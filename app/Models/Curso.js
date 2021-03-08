'use strict'

const BaseModel = use('MongooseModel')
const mongoose = use('mongoose')
const { ObjectId } = use('mongoose').Schema.Types

/**
 * @class Devices
 */
class Curso extends BaseModel {
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
      codigo: String,
      nombre: String,
      activo: Boolean, 
      unidades: [
      	{
      		codigo: String,
      		nombre: String,
          lecciones: [
            {
                codigo: String,
                nombre: String,
                guiones: [String] //codigos de los guiones
            }
          ],
      	}
      ],
    }
  }


}

module.exports = Curso.buildModel('Curso')
