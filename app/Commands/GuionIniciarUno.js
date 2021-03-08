'use strict'

const { Command } = require('@adonisjs/ace')
const fs = require('fs');
const mongoose = use('mongoose')

var GuionService = use('App/Services/GuionService')
var Curso = use('App/Models/Curso')

var Guion = use('App/Models/Guion')


class GuionIniciarUno extends Command {
  static get signature () {
    return `
      guion:iniciar_uno
      { codigo : Nombre del archivo }
    `
  }

  static get description () {
    return 'Inicializa los guiones'
  }

  async handle (args, options) {
    this.info('GuionIniciarUno inicia..')

    let codigo = args.codigo
    console.log('Codigo:'+codigo)

    try{
      
      //Leer el archivo
      let contenido = use('App/Commands/Guiones/'+codigo)  
      
      if(contenido && contenido.codigo){
        //Eliminar el guion
        await Guion.deleteOne({codigo:codigo})

        let guion = new Guion()

        Object.assign(guion,contenido)

        console.log('Guion listo:')
        console.log(guion)

        await guion.save()  
        console.log('Guion creado')

      }else{
        console.log('ERROR - No se pudo leer el contenido de:'+codigo)
      }


    }catch(error){
      if(error.code && error.code == 'MODULE_NOT_FOUND'){
        console.log('ERROR - NO SE ENCONTRO EL ARCHIVO:'+codigo)
      }else{
        console.log(error)
      }
      
    }
    
    mongoose.connection.close()

    this.info('... GuionIniciarUno termina')

  }
}

module.exports = GuionIniciarUno
