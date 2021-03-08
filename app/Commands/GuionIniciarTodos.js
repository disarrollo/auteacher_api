'use strict'

const { Command } = require('@adonisjs/ace')
const fs = require('fs');
const mongoose = use('mongoose')

var GuionService = use('App/Services/GuionService')
var Curso = use('App/Models/Curso')

var Guion = use('App/Models/Guion')


class GuionIniciarTodos extends Command {
  static get signature () {
    //return 'guion:iniciar'

    return `
      guion:iniciar_todos
    `
  }

  static get description () {
    return 'Inicializa los guiones'
  }

  async handle (args, options) {
    this.info('GuionIniciarTodos inicia..')

    let codigo = args.codigo

    console.log('codigo:'+codigo)

    try{
      //Crear todos los guiones que estén en la carpeta
      
      //Eliminar todos los guiones
      await Guion.deleteMany()
      /*
      //TODO - leer todos los archivos
      //TODO - crear todos los guiones
      */

      //Crear el especificado en la linea de comandos
      //Eliminar el guion

      
      

    }catch(error){
      if(error.code && error.code == 'MODULE_NOT_FOUND'){
        console.log('ERROR - NO SE ENCONTRO EL ARCHIVO:'+codigo)
      }else{
        console.log(error)
      }
      
    }
    

    /*  
    await Guion.deleteMany()

    leccion_codigo = 'a1u0l1'

    let payload = {
    	leccion_codigo: leccion_codigo,
      publicado: true
    }


  
    let guion = await GuionService.crearGuion({
      codigo =
    })

    let escena0 = {
    	codigo: leccion_codigo+'e1',
    	requisitos:[],
      	lineas:[
			{uso:'contexto', tipo_cuerpo: 'texto', cuerpo: 'Hola'},
			{uso:'contexto', tipo_cuerpo: 'texto', cuerpo: 'Bienvenido al curso de Fundamentals'},
			{uso:'contexto', tipo_cuerpo: 'texto', cuerpo: 'Yo soy la coordinadora de este nivel'},
			{uso:'contexto', tipo_cuerpo: 'texto', cuerpo: 'Voy a esar pendiente de tu avance'},
			{uso:'pregunta', tipo_cuerpo: 'texto', tipo_pregunta: 'abierta', cuerpo: "Déjame saber que leiste con un 'ok'"},
		],
		posibles_respuestas: [
			{
				texto: 'consentimiento',
				valor: 100, 
				salida: leccion_codigo+'e2',
        tipo_coincidencia: 'grupo'
			}
		], //Afirmacion, aceptacion, concentimiento, negacion, 
		salidas:[],
    }
    guion.escenas.push(escena0)


    //*********** OTRA ESCENA
    let escena1 = {
    	codigo: leccion_codigo+'e2',
    	requisitos:[],
      	lineas:[
    			{uso:'contexto', tipo_cuerpo: 'texto', cuerpo: 'Te voy a asignar los docentes que te van a apoyar en tu proceso de aprendizaje'},
    			{uso:'contexto', tipo_cuerpo: 'texto', cuerpo: 'Cada uno de ellos te ayudará a alcanzar diferentes logros'},
    			{uso:'contexto', tipo_cuerpo: 'texto', cuerpo: 'Por ejemplo, Anderson se encargará de ayudarte a practicar tu vocabulario'},
    			{uso:'pregunta', tipo_cuerpo: 'texto', tipo_pregunta: 'abierta', cuerpo: "Haz entendido?"},
    		],
    		posibles_respuestas: [
    			{
    				texto: 'consentimiento',
    				valor: 100, 
    				salida: null,
            tipo_coincidencia: 'grupo'
    			}
    		], 
    }
    guion.escenas.push(escena1)


    
    await guion.save()

*/


    mongoose.connection.close()

    this.info('... GuionIniciarTodos termina')

  }
}

module.exports = GuionIniciarTodos
