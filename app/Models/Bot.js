'use strict'

const BaseModel = use('MongooseModel')
const mongoose = use('mongoose')
const { ObjectId } = use('mongoose').Schema.Types

/**
 * @class Devices
 */
class Bot extends BaseModel {
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
      jid: String,
      password: String,
      nombre: String,
      roles: [String],
      activo: Boolean,
      coordinador_curso: String,
      dialogos_activos: [ObjectId],
    }
  }


}

module.exports = Bot.buildModel('Bot')
