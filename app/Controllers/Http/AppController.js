'use strict'

const {Extandar,ExtandarException}  = require('@disarrollo/disarrollo-extandar-back')
const Env = use('Env')

class AppController {

	async ping ({request, response}) {

		try{
			let respuesta = Extandar.respuestaOk('pong')
			return response.json(respuesta);

		} catch (error) {
			console.log(error)
			throw Extandar.handledException(error)	
        }
	}

	async version ({request, response}) {

		try{
			let version = Env.get('APP_CLIENT_VERSION')
			let respuesta = Extandar.respuestaOk({version:version})
			return response.json(respuesta);

		} catch (error) {
			console.log(error)
			throw Extandar.handledException(error)	
        }
	}


}

module.exports = AppController
