'use strict'

//Esto es para base de datos estatico
var Estudiante = use('App/Models/Estudiante')
var Cliente = use('App/Models/Cliente')
var Curso = use('App/Models/Curso')
var Bot = use('App/Models/Bot')
var Guion = use('App/Models/Guion')
var Conversacion = use('App/Models/Conversacion')
const id = require("@xmpp/id");


/*
* Usado en modo seleccion debase de datos dinamico
*/
const db = null

class EstudianteService {

	static async setDb(db){
		this.db = db
		this.Estudiante = await this.db.model("Estudiante");
	}

	
	/*
	* Estandariza el proceso de creacion de un guion
	*
	*/

	static async crearEstudiante(payload){

		//TODO - crear indices de unicidad
		
		let cliente = await Cliente.findOne({'_id':payload._id})
		if(cliente){
			let estudiante = new Estudiante()
			estudiante.cliente_id = cliente._id
			estudiante.nombre = cliente.nombre
			estudiante.jid = cliente.jid

			await estudiante.save()
			return estudiante

		}else{
			console.error('No se encontro el cliente')
			return false
		}

	}

	/*
	* Matricula un estudiante en un curso
	*
	*/

	static async matricularByJid(payload){

		//TODO - Verificar si la matricula ya existe

		let cliente = await Cliente.findOne({'jid':payload.jid})
		if(!cliente){
			console.error('No se encontro el cliente')
			return false
		}

		let curso = await Curso.findOne({'codigo':payload.codigo_curso})
		if(!curso){
			console.error('No se encontro el curso')
			return false
		}

		let estudiante = await Estudiante.findOne({'cliente_id':payload.cliente_id})
		if(!estudiante){

			estudiante = new Estudiante()
			estudiante.cliente_id = cliente._id
			estudiante.nombre = cliente.nombre
			estudiante.jid = cliente.jid

			await estudiante.save()
		}

		let matricula = {
			codigo_curso : payload.codigo_curso,
			codigo_leccion_actual : null,
			created_at: new Date(),
			user: null
		}


		
		estudiante.matriculas.push(matricula)
		await estudiante.save()

		return estudiante

	}

	/*
	*	hace la carga inicial del curso
	*/
	static async cargarGuiones(estudiante,curso){

		let matricula = estudiante.matriculas.find((element)=>{
			return element.codigo_curso == curso.codigo
		})

		if(!matricula){
			console.log('ERROR - NO SE ENCONTRO LA MATRICULA')
			return null
		}
		
		console.log('la matricula tiene inicialmente:'+matricula.progreso.length+' guiones cargados')
		//Nos aseguramos que estan cargados todos los guiones
		for(let unidad of curso.unidades){
			for(let leccion of unidad.lecciones){
				for(let codigo_guion of leccion.guiones){

					let progreso = matricula.progreso.find((element)=>{
						return element.codigo_guion == codigo_guion
					})

					if(progreso){
						//Como ya hay un progreso no lo agrega nuevamente
						console.log('Progreso encontrado para:'+codigo_guion)
					}else{
						//Los guiones entran a la lista siempre en bloqueado
						let p = {
							codigo_guion: codigo_guion,
				            estado: 'bloqueado',//por_asignar|asignado|finalizado|bloqueado
				            total_interacciones: 0,
				            tiempo_acumulado: 0,
				            puntaje_acumulado: 0,
						}
						//Si es el primer guion que se agrega se asigna de una vez a un coordinador
						if(matricula.progreso.length == 0){
							p.estado = 'por_asignar'

						}

						matricula.progreso.push(p)
					}

				}
			}
		}

		console.log('ahora la matricula tiene :'+matricula.progreso.length+' guiones cargados')

		return estudiante
		

	}

	/*
	*	revisa si es posible desbloquear guiones
	*/
	static async desbloquearGuiones(estudiante,curso){

		let matricula = estudiante.matriculas.find((element)=>{
			return element.codigo_curso == curso.codigo
		})

		if(!matricula){
			console.log('ERROR - desbloquearGuiones - NO SE ENCONTRO LA MATRICULA')
			return null
		}

		//Desbloqueamos de acuerdo a la cantidad maxima de dialogos activos y los requisitos
		let guionesActivos = matricula.progreso.filter((element)=>{
			return element.estado == 'por_asignar' || element.estado == 'asignado'
		})

		console.log("la matricula tiene:"+guionesActivos.length+" guionesActivos")

		let permitidos = 10 //TODO - TRAER ESTO DE LA CONFIGURACION

		let posibles = permitidos - guionesActivos.length

		while (posibles > 0) {

			let candidato = matricula.progreso.find((element)=>{
				return element.estado == 'bloqueado'
			})

			if(candidato){
				let guion = await Guion.findOne({'codigo':candidato.codigo_guion})
				let requisitos = guion.requisitos
				console.log('el candidato:'+candidato.codigo_guion+' tiene los requisitos:'+requisitos)
				/*
				let faltantes = matricula.progreso.filter((element)=>{
					return requisitos.includes(element.codigo_guion) && element.estado != 'finalizado'
				})
				*/

				let faltantes = []
				for(let requisito of requisitos){
					if(!estudiante.logros.includes(requisito)){
						faltantes.push()	
					}
				}
				

				if(faltantes && faltantes.length>0){
					console.log('No cumple los requisitos')
					console.log(faltantes)
				}else{
					console.log('Cumple los requisitos')
					candidato.estado = 'por_asignar'
					posibles--
				}

			}else{
				//No hay candidatos
				console.log('No hay mas candidatos')
				return estudiante
			}
		}

		console.log("ahora la matricula tiene:"+guionesActivos.length+" guionesActivos")
		return estudiante

	}

	/*
	*	revisa si es posible asignar guiones
	*/
	static async asignarGuiones(estudiante,curso){

		let matricula = estudiante.matriculas.find((element)=>{
			return element.codigo_curso == curso.codigo
		})

		if(!matricula){
			console.log('ERROR - asignarGuiones - NO SE ENCONTRO LA MATRICULA')
			return null
		}

		//CONVERSACION INICIAL
		//Verificamos si el progreso 0 esta por asignar lo asingamos a un coordinador
		if(matricula.progreso[0].estado == 'por_asignar'){
			console.log("Asignar el primer guion al coordinador")
			let coordinador = await Bot.findOne({activo:true,roles:"coordinador",coordinador_curso:curso.codigo})	
			if(coordinador){
				//creamos la primera conversacion
				let progreso = matricula.progreso[0]
				let guion = await Guion.findOne({'codigo':progreso.codigo_guion})

				let escena = guion.escenas[0]

				let conversacion = new Conversacion()

				conversacion.estudiante_jid = estudiante.jid
				conversacion.bot_jid = coordinador.jid
				conversacion.curso_codigo = curso.codigo

				let dialogo = {
					codigo : id(),
					guion_codigo : guion.codigo,
					activo : true,
					estado : 'envio_pendiente',
					esperar_hasta: new Date(),
					escena_actual_codigo: escena.codigo
				}

				conversacion.dialogos.push(dialogo)
				conversacion.dialogo_activo = dialogo.codigo

				await conversacion.save()

				progreso.estado = 'asignado'

			}
		}

		//Asignamos de acuerdo a la cantidad de bots disponibles 
		//y la cantidad maxima de dialogos por conversacion
		//y la cantidad maxima de conversaciones por estudiante
		//Buscamos guiones por asignar
		let progresosPorAsignar = matricula.progreso.filter((element)=>{
			return element.estado == 'por_asignar'
		})
		console.log('Guiones por asignar encontrados:'+progresosPorAsignar.length)

		//Buscamos las conversaciones del estudiante
		let conversaciones = await Conversacion.find({
			estudiante_jid: estudiante.jid
		})

		let listaBotsUsados = []
		for(let conversacion of conversaciones){
			listaBotsUsados.push(conversacion.bot_jid)

		}

		//Buscamos los bots asistentes activos
		let botsActivos = await Bot.find({activo:true,roles:"assistant"})
		
		let botDisponibles = botsActivos.filter(element=>{
			return !listaBotsUsados.includes(element.jid)
		})

		//POR AHORA SOLO ASIGNAMOS NUEVOS BOTS
		//TODO - REUTILIZAR LA CONVERSACION
		for(let progreso of progresosPorAsignar){

			let guion = await Guion.findOne({'codigo':progreso.codigo_guion})

			let bot = botDisponibles.shift()

			if(bot==undefined){
				console.log("No hay mas bots")
				return estudiante
			}
			console.log('Creando converaciones para:'+bot.nombre)

			let escena = guion.escenas[0]

			let conversacion = new Conversacion()

			conversacion.estudiante_jid = estudiante.jid
			conversacion.bot_jid = bot.jid

			let dialogo = {
				codigo : id(),
				guion_codigo : guion.codigo,
				activo : true,
				estado : 'envio_pendiente',
				esperar_hasta: new Date(),
				escena_actual_codigo: escena.codigo
			}

			conversacion.dialogos.push(dialogo)
			conversacion.dialogo_activo = dialogo.codigo

			await conversacion.save()

			progreso.estado = 'asignado'

		}

		return estudiante

	}

}

module.exports = EstudianteService