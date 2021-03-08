'use strict'

const { Command } = require('@adonisjs/ace')
const mongoose = use('mongoose')
var CursoService = use('App/Services/CursoService')
var Curso = use('App/Models/Curso')

class CursoIniciar extends Command {
  static get signature () {
    return 'curso:iniciar'
  }

  static get description () {
    return 'Inicializa la tabla de cursos'
  }

  async handle (args, options) {
    this.info('CursoIniciar inicia..')

    let payload = {
  	     codigo: 'a1',
      	 nombre: 'Fundamentals',
      	 activo: true, 
    }

    await Curso.deleteMany()

    let a1 = await CursoService.crearCurso(payload)
    
    let unidades = [
      {
        codigo: 'a1u0',nombre:'Introduccion',
        lecciones: [
          {codigo: 'a1u0l1',nombre:'Saludo',guiones:['g1']},
        ]
      },
      {
        codigo: 'a1u1',nombre:'Unidad 1',
        lecciones: [
          {codigo: 'a1u1l1',nombre:'Leccion 1-1',guiones:['g2','g3','g4','g5','g6']},
          {codigo: 'a1u1l2',nombre:'Leccion 1-2',guiones:['g7','g8','g9','g10']},
          {codigo: 'a1u1l3',nombre:'Leccion 1-3',guiones:['g11','g12','g13','g14','g15']},
        ]
      },
      {
        codigo: 'a1u2',nombre:'Unidad 2',
        lecciones: [
          {codigo: 'a1u2l5',nombre:'Leccion 2-1'},
          {codigo: 'a1u2l6',nombre:'Leccion 2-2'},
          {codigo: 'a1u2l7',nombre:'Leccion 2-3'},
        ]
      },
      {
        codigo: 'a1u3',nombre:'Unidad 3'
      },
    ]

    for (let i in unidades){
      a1.unidades.push(unidades[i])  
    }

    await a1.save()


    mongoose.connection.close()

    this.info('... CursoIniciar termina')

  }
}

module.exports = CursoIniciar
