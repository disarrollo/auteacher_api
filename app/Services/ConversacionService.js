'use strict'

//Esto es para base de datos estatico
var Conversacion = use('App/Models/Conversacion')

/*
* Usado en modo seleccion debase de datos dinamico
*/
const db = null

class ConversacionService {

	static async setDb(db){
		this.db = db
		this.Conversacion = await this.db.model("Conversacion");
	}

	
	/*
	* Estandariza el proceso de creacion de un guion
	*
	*/

	static async crearGuion(payload){

		let Conversacion = new Conversacion()
		Object.assign(Conversacion,payload)
		await Conversacion.save()
		return Conversacion

	}

	/*
	*	analiza la conversacion
	*	cantidad de dialogos activos
	*/
	static async refreshStatus(conversacion){
		
	}

}

module.exports = ConversacionService