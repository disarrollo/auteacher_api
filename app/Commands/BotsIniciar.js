'use strict'

const { Command } = require('@adonisjs/ace')
const mongoose = use('mongoose')
var CursoService = use('App/Services/CursoService')
var Bot = use('App/Models/Bot')

class BotsIniciar extends Command {
  static get signature () {
    return 'bots:iniciar'
  }

  static get description () {
    return 'Inicializa la tabla de bots'
  }

  async handle (args, options) {
    this.info('BotsIniciar inicia..')

    await Bot.deleteMany()

    //COORDINADOR
    let bot1 = new Bot()
    bot1.jid = '579990000000000'
    bot1.nombre = 'Alejandra'
    bot1.roles = ['coordinador']
    bot1.activo = true
    bot1.coordinador_curso = 'a1'

    await bot1.save()
    
    //ASSISTANTS
    let lista = [
     
      {
        jid : '579991111111111',
        nombre : 'Robert'
      },
      {
        jid : '579991111111112',
        nombre : 'Tommy'
      },
      {
        jid : '579991111111113',
        nombre : 'Valery'
      },
      {
        jid : '579991111111114',
        nombre : 'Joan'
      },
      {
        jid : '579991111111115',
        nombre : 'Paula'
      },
      {
        jid : '579991111111116',
        nombre : 'Peter'
      },
      {
        jid : '579991111111117',
        nombre : 'Isabella'
      },
      {
        jid : '579991111111118',
        nombre : 'Santiago'
      },
      {
        jid : '579991111111119',
        nombre : 'Antonella'
      },

    ]
      
    for(let item of lista){
      
      let b = new Bot()
      Object.assign(b,item)

      b.roles = ['assistant']
      b.activo = true
      b.password = '123456789'

      console.log(b)

      await b.save()
    }
    

    mongoose.connection.close()

    this.info('... BotsIniciar termina')

  }
}

module.exports = BotsIniciar
