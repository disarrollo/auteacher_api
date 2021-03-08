'use strict'

const { Command } = require('@adonisjs/ace')
const mongoose = use('mongoose')
var Estudiante = use('App/Models/Estudiante')
var Conversacion = use('App/Models/Conversacion')

class ClienteReiniciarMatricula extends Command {
  static get signature () {
    
    return `
	    cliente:reiniciar_matricula
	    { cliente_jid : jid del cliente  }
	    { codigo_curso : id del curso para matricular  }
	  `
  }

  static get description () {
    return 'Matricula un cliente en un curso'
  }

  async handle (args, options) {
    this.info('ClienteReiniciarMatricula inicia..')

    
  	let cliente_jid = args.cliente_jid
  	let codigo_curso = args.codigo_curso
    
    let estudiante = await Estudiante.findOne({jid:cliente_jid})
    let matricula = estudiante.matriculas.find((element)=>{
    	return element.codigo_curso == codigo_curso
    })

    if(matricula){
    	matricula.progreso = []
    }
    estudiante.logros = []
    await estudiante.save()

    await Conversacion.deleteMany({estudiante_jid:cliente_jid})

    mongoose.connection.close()

    this.info('... ClienteReiniciarMatricula termina')
  }
}

module.exports = ClienteReiniciarMatricula
