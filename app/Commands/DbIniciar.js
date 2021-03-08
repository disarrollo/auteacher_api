DbIniciar.js

'use strict'

const { Command } = require('@adonisjs/ace')
const mongoose = use('mongoose')

class DbIniciar extends Command {
  static get signature () {
    return 'db:iniciar'
  }

  static get description () {
    return 'Crea los indices en la base de datos'
  }

  async handle (args, options) {
    this.info('DbIniciar inicia..')

    //TODO - Iniciar los indices


    //estudiante.matricula.codigo_curso
    //estudiante.jid
    //bot.username

    mongoose.connection.close()

    this.info('... DbIniciar termina')

  }
}

module.exports = DbIniciar
