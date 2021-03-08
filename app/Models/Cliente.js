'use strict'

const BaseModel = use('MongooseModel')
const mongoose = use('mongoose')
const { ObjectId } = use('mongoose').Schema.Types

/**
 * @class Cliente
 */
class Cliente extends BaseModel {
  static boot ({ schema }) {    
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'ClienteHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }


  /**
   * Cliente's schema
   */
  static get schema () {

    return {
      nombre: String,
      apellido: String,
      tratamiento: String, //Harold, Dr. Harold, Sr. Harold, Sr. Villota
      password: String,
      grupos: [String], //'CLIENTE',
      identificacion:{
        tipo: String,
        numero: String,
        fecha_validada: String
      },

      telefono: {
        codigo_pais: String,
        numero: String,
        verificado:{
          fecha:Date,
          usuario: mongoose.ObjectId,
          metodo: String
        }
      },
      jid: String,
      telefonos_archivados: [mongoose.Mixed], //Si cambiar de telefono el anterior se almacena

      email: {
        email: String,
        verificado:{
          fecha:Date,
          usuario: mongoose.ObjectId,
          metodo: String
        }
      },
      emails_archivados: [mongoose.Mixed], //Si cambiar de email el anterior se almacena

      direcciones: [
        {
          etiqueta: String, //Residencia, trabajo, visita
          actual: { type: Boolean, default: true },
          direccion: String,
          complemento: String, //Apartamento, casa, oficina
          agrupacion: String, 
          barrio: String, 
          ciudad: String, 
          metodo_ingreso: String, //manual, google
          sitio : mongoose.ObjectId,
          coordenadas: { lat: String, long: String },
        }
      ],

      dispositivos_seguros:[mongoose.ObjectId],
      solicitud_ingreso: {
        metodo:String, //email, celular, password, google, facebook
        
        solicitud_origen:mongoose.Mixed,
        fecha_solicitud:Date,
        codigo_generado:String, //Codigo generado por el sistema que se envia al usuario
        fecha_caduca_codigo:Date,  //La fecha en que la solicitud caduca

        validacion_origen:mongoose.Mixed, //Dispositivo desde el que valida la solicitud
        fecha_validacion:Date,
        codigo_validacion:String, //Codigo que ingresa el usuario debe ser igual al codigo generado
        intentos_validacion:Number, //Cantidad de intentos de validacion (max 3)
        estado:String, //esperando_validacion, validado, rechazado, caducado

        extra_info: mongoose.Mixed,
        
      },
      solicitudes_ingreso_archivadas: [mongoose.Mixed],

      genero: String,
      fecha_nacimiento: Date,
      extra_info: mongoose.Mixed,
      
      creacion_origen: mongoose.Mixed, //El origen en el momento de la creacion (No sobreescribir)
      //Mejor no // visitas: [{device_id:mongoose.ObjectId,ip:String,fecha:Date}], //Por ahora aquí con la posibilidad de almacenar histórico
      notificaciones: {
        sms: { type: Boolean, default: true },
        email: { type: Boolean, default: true },
      },
      metodos_pago:[
        {
          actual: { type: Boolean, default: true },
          tipo: String,
          numero: String,
          cardholder_name: String,
          cardholder_lastname: String,
          token: String,
          validada: { type: Boolean, default: false },
        }
      ],
      //carritos de compras
      pedidos: [
        {
          codigo: String,
          subtotal: Number,
          impuesto: Number,
          descuento: Number,
          otros_cobros:[
            {
              concepto:String,
              valor:Number  
            }
          ],
          total: Number,

          productos: [{
            producto_id: ObjectId,
            descripcion: String,
            detalles: mongoose.Mixed, //Variaciones del producto
            observaciones:  String,
            cantidad: { type: Number, required: true },
            valor_unitario: Number, //Antes de impuesto  
            subtotal: Number,  //Antes de impuesto
            descuento: Number, 
            impuesto: Number,
            total: Number,  //Incluido impuesto,
            esta_disponible: Boolean,
            fecha_agregado: Date,
            thumbnail: String
          }],

          observaciones:  String,
          direccion_entrega: ObjectId, //cliente.direcciones._id
          entrega: {
            fecha: Date,
            texto: String,
            metodo: String, //porteria, puerta, inmediato
          },
          metodo_pago: {
            tipo: String, //credit_card, cash, payu, pse
            id_credit_card: ObjectId,
            cuotas: Number,
            info: mongoose.Mixed,
            texto: String,
            icon: String
          }

        }
      ]
    }
  }
}

module.exports = Cliente.buildModel('Cliente')
