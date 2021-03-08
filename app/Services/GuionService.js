
'use strict'

//Esto es para base de datos estatico
var Guion = use('App/Models/Guion')

/*
* Usado en modo seleccion debase de datos dinamico
*/
const db = null

class GuionService {

	static async setDb(db){
		this.db = db
		this.Guion = await this.db.model("Guion");
	}

	
	/*
	* Estandariza el proceso de creacion de un guion
	*
	*/

	static async crearGuion(payload){

		let guion = new Guion()
		Object.assign(guion,payload)
		await guion.save()
		return guion

	}

}

module.exports = GuionService