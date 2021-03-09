'use strict'

const BaseModel = use('MongooseModel')
const mongoose = use('mongoose')
const { ObjectId } = use('mongoose').Schema.Types

/**
 * @class Devices
 */
class Guion extends BaseModel {
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
      codigo:String,
      publicado: Boolean,
      requisitos:[String],
      escenas:[
	      {
	      		codigo: String,
		      	contexto:[
					{
						tipo_cuerpo: String, //'texto|imagen|sonido|video|emoji',
						cuerpo: String,
						ayuda: String
					}
				],

				pregunta: {
					tipo_pregunta: String, //abierta | cerrada | si_no
					cuerpo: String,
					ayuda: String,
				},
				
				posibles_respuestas: [
					{
						grupo: String, // 'grupo_propio' | nombre del grupo
						grupo_propio: [String],
						valor: Number,  //Podemos usarlo para darle un 
						salida: String, //Id de la escena de salida directa segun la respuesta
						tiempo: Number, //Tiempo en minutos para activar la salida
						logros: [String], //codigos de los logros que se desbloquean al finalizar
						cierre: {
							grupo: String,
							tipo_cuerpo: String, 
							cuerpo: String,
							ayuda: String,
						}
					}
				],
				//Usamos una linea en caso de salidas desconcoidasd
				respuesta_desconocida: {
					grupo: String,
					tipo_cuerpo: String, //'texto|imagen|sonido|video|emoji',
					cuerpo: String,
					ayuda: String,
				}
				
	      }
      ]
      
    }
  }
}

module.exports = Guion.buildModel('Guion')
