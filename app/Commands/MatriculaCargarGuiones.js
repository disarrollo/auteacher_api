'use strict'

const { Command } = require('@adonisjs/ace')
const mongoose = use('mongoose')
var EstudianteService = use('App/Services/EstudianteService')
var Estudiante = use('App/Models/Estudiante')
var Curso = use('App/Models/Curso')

class MatriculaCargarGuiones extends Command {
  static get signature () {
    
    return `
	    matricula:cargar_guiones
	    { jid : id del estudiante  }
	    { codigo_curso : id del curso para matricular  }
	  `
  }

  static get description () {
    return 'Carga los guiones del curso'
  }

  async handle (args, options) {
    this.info('MatriculaCargarGuiones inicia..')

    let payload = {
    	jid: args.jid,
    	codigo_curso: args.codigo_curso,
    }

    let estudiante = await Estudiante.findOne({'jid':payload.jid})
  	if(!estudiante){
  		console.error('No se encontro el estudiante')
  		return false
  	}

  	let curso = await Curso.findOne({'codigo':payload.codigo_curso})
  	if(!curso){
  		console.error('No se encontro el curso')
  		return false
  	}

    estudiante = await EstudianteService.cargarGuiones(estudiante,curso)
    await estudiante.save()
    mongoose.connection.close()

    this.info('... MatriculaCargarGuiones termina')
  }
}

module.exports = MatriculaCargarGuiones
