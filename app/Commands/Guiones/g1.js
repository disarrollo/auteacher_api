'use strict'
var codigo = module.id.substring(module.path.length+1,module.id.length-3)

module.exports = {
	codigo : codigo,
	publicado : false,

	escenas : [
		{
	    	codigo: codigo+'e1',
	    	requisitos:[],
	      	contexto:[
	      		/*
	      		tipo_cuerpo: 'texto' | 'imagen' | 'audio' | 'video' | 'emoji',
	      		*/
				{
					tipo_cuerpo: 'texto', 
					cuerpo: 'Hi,',
					ayuda: 'Hola,'
				},
				{
					tipo_cuerpo: 'texto', 
					cuerpo: 'Welcome to the Fundamentals Course,',
					ayuda: 'Bienvenido al curso de Fundamentals,'
				},
				{
					tipo_cuerpo: 'texto', 
					cuerpo: "I'm the coordinator of this course",
					ayuda: 'Yo soy la coordinadora de este curso,'
				},
				{
					tipo_cuerpo: 'texto', 
					cuerpo: "I will be tracking your progress",
					ayuda: 'Voy a estar pendiente de tu avance,'
				},
				{
					tipo_cuerpo: 'texto', 
					cuerpo: "You can text me if you have any question",
					ayuda: 'Puedes escribirme si tienes alguna inquietud,'
				},
				
			],
			pregunta: {
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'si_no',
				cuerpo: "If you understood, please write 'ok'",
				ayuda: "Si entendiste, por favor escribe 'ok'",
			},

			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					grupo: 'consentimiento',
					valor: 100, 
					salida: codigo+'e2', //Si no hay salida se fnaliza el guion
					tiempo: 0,
					logros: [codigo],
	        		cierre: {
						tipo_cuerpo: 'texto', 
						cuerpo: 'Great!',
						ayuda: 'Estupendo!',
					}
				},
			],

			respuesta_desconocida: {
				tipo_cuerpo: 'texto',
				cuerpo: "Please answer 'ok'",
				ayuda: "Por favor contesta 'ok'",
			},
		
			

	    },
	    {
	    	codigo: codigo+'e2',
	    	requisitos:[],
	      	contexto:[
	      		/*
	      		tipo_cuerpo: 'texto' | 'imagen' | 'audio' | 'video' | 'emoji',
	      		*/
				{
					tipo_cuerpo: 'texto', 
					cuerpo: "I'm going to assign you the teachers who will support you in your learning process",
					ayuda: 'Te voy a asignar los docentes que te van a apoyar en tu proceso de aprendizaje'
				},
				{
					tipo_cuerpo: 'texto', 
					cuerpo: "They will help you achieve the necessary achievements to pass the course",
					ayuda: 'Ellos te van a ayudar a alcanzar logros necesarios para superar el curso'
				},
				{
					tipo_cuerpo: 'texto', 
					cuerpo: "I hope you do very well",
					ayuda: 'Espero que te vaya muy bien'
				},
    			
    		],

    		pregunta: {
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'abierta',
				cuerpo: "See you later!",
				ayuda: 'Hablamos pronto!'
			},
			posibles_respuestas: [
			],

    		respuesta_desconocida: {
				tipo_cuerpo: 'texto',
				cuerpo: "Hi, I will review your question",
				ayuda: "Hola, voy a revisar tu pregunta",
			},
 
	    }
	]

}
