'use strict'

//Esto es para base de datos estatico
var Bot = use('App/Models/BotService')

/*
* Usado en modo seleccion debase de datos dinamico
*/
const db = null

class BotService {

	static async setDb(db){
		this.db = db
		this.BotService = await this.db.model("BotService");
	}

	
	/*
	* Estandariza el proceso de creacion de un guion
	*
	*/

	static async crearGuion(payload){

		let bot = new BotService()
		Object.assign(bot,payload)
		await bot.save()
		return bot

	}

	/*
	*	analiza el bot
	*	cantidad de conversaciones activas
	*/
	static async refreshStatus(bot){
		
	}

}

module.exports = BotService