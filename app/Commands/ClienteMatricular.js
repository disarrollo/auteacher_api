'use strict'

const { Command } = require('@adonisjs/ace')
const mongoose = use('mongoose')
var EstudianteService = use('App/Services/EstudianteService')

class ClienteMatricular extends Command {
  static get signature () {
    
    return `
	    cliente:matricular
	    { jid : id del cliente  }
	    { codigo_curso : id del curso para matricular  }
	  `
  }

  static get description () {
    return 'Matricula un cliente en un curso'
  }

  async handle (args, options) {
    this.info('ClienteMatricular inicia..')

    let payload = {
    	jid: args.jid,
    	codigo_curso: args.codigo_curso,
    }

    let estudiante = await EstudianteService.matricularByJid(payload)

    mongoose.connection.close()

    this.info('... ClienteMatricular termina')
  }
}

module.exports = ClienteMatricular
