'use strict'

const BaseModel = use('MongooseModel')
const mongoose = use('mongoose')
const { ObjectId } = use('mongoose').Schema.Types

/**
 * @class Devices
 */
class Conversacion extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'DevicesHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Conversacion's schema
   */
  static get schema () {
    return {
		estudiante_jid: String,
		bot_jid: String,
		dialogo_activo: String,
		curso_codigo: String,
		dialogos: [{
			codigo: String,
			guion_codigo: String,
			activo: Boolean, //true: si el dialogo no ha terminado | false para dialogos finalizador listos para archivar
			estado: String, // 'envio_pendiente | respuesta_pendiente | lectura_pendiente | esperando' | finalizado,
			escena_actual_codigo: String, //codigo de la escena actual
			esperar_hasta: Date, //Fecha cuando debe pasar de stand_by a envio pendiente
			interacciones: [
				{	
					escena_codigo: String, //Identificadod de la secuencia que se debe usar para desarrollar la interaccion_padre:  //Identificador de la interaccion predecesora
					estado: String, //'activa|finalizada',
					mensajes:[{
						id: String,
						to: String,
						from: String,
						body: String,
						body_type: String,
						hint: String,
						sent_at: Date,
						delivered_at: Date,
						read_at: Date,
					}], //todo lo enviado y recibido concerniente al dialogo
					respuesta: {
						texto: String, //Cuerpo del mensaje de respuesta
						valor_asignado: Number,
					},
					escena_salida_codigo: ObjectId, //El id de la secuencia seleccionada como salida
					tiempo_transcurrido: Number,  //El tiempo desde que el mensaje es leido hasta la respuesta
				}
			],
			tiempo_acumulado: Number, //La sumatoria de los tiempos_transcurridos de las interacciones
			puntaje_acumulado: Number, //La sumatoria de los valores de las respuestas
		}],
		
		mensajes:[{
			id: String,
			to: String,
			from: String,
			body: String,
			body_type: String,
			hint: String,
			sent_at: Date,
			delivered_at: Date,
			read_at: Date,
		}], //todo lo enviado y recibido
				
    }
  }


}

module.exports = Conversacion.buildModel('Conversacion')
