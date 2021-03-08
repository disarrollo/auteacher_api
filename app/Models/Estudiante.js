'use strict'

const BaseModel = use('MongooseModel')
const mongoose = use('mongoose')
const { ObjectId } = use('mongoose').Schema.Types

/**
 * @class Devices
 */
class Estudiante extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'DevicesHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Devices's schema
   */
  static get schema () {
    return {
      cliente_id: ObjectId,
      jid: String,
      nombre: String,
      matriculas: [{
        codigo_curso: String,
        created_at: Date,  
        user: String,  //El colaborador que realiza la matricula

        progreso: [
          {
            codigo_guion: String,
            estado: String,//por_asignar|asignado|finalizado|bloqueado
            dialogo_id: ObjectId,
            //Se llena luego del cierre
            total_interacciones: Number,
            tiempo_acumulado: Number, //La sumatoria de los tiempos_transcurridos de las interacciones
            puntaje_acumulado: Number, //La sumatoria de los valores de las respuestas 
          }
        ],

        balance_interacciones: Number, //total de interacciones pendientes
      }],
      logros: [String], //Id de los cursos, unidades, lecciones

    }
  }


}

module.exports = Estudiante.buildModel('Estudiante')
