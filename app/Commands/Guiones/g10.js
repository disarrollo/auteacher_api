'use strict'
var codigo = module.id.substring(module.id.lastIndexOf('/')+1,module.id.length-3)
/*
	Dialogo para aprender la palabra 'singer'
	A singer is a person who helps students to acquire knowledge
	Es una persona que enseña una ciencia o un arte
	Ayuda a los estudiantes a adquirir conocimiento
*/
module.exports = {
	codigo : codigo,
	publicado : false,
	requisitos:['g1'],
	escenas : [
		//Contexto principal
		{
	    	codigo: codigo+'e1',
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
					cuerpo: "Now, let's talk about the word 'singer'",
					ayuda: "Ahora, vamos a hablar sobre 'singer'"
				},
				{
					tipo_cuerpo: 'imagen',	
					cuerpo: "singer-en-1.jpg",
					ayuda: "singer-es-1.jpg"
				},
				{
					tipo_cuerpo: 'audio',	
					cuerpo: "singer.mp3",
				},
				{
					tipo_cuerpo: 'texto',
					cuerpo: 'a singer is a person who sings, often as their job',
					ayuda: 'un cantante es una persona que canta, a menudo como su trabajo'
				},
				{
					tipo_cuerpo: 'texto',
					cuerpo: 'You can find singers in concerts, operas, or academies.',
					ayuda: 'Puedes encontrar cantantees en conciertos, operas, o academias.',
				},
			],

			pregunta: {
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'si_no',
				cuerpo: "Do you understand the meaning of 'singer'?",
				ayuda: "Entiendes el significado de 'singer'?",
			},
			
			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					grupo: 'afirmacion',
					valor: 100, 
					salida: codigo+'e2',
					tiempo: 1,
					logros: [],
	        		cierre: {
	        			grupo: 'great',
						tipo_cuerpo: 'texto', 
						cuerpo: 'Great!',
						ayuda: 'Estupendo!',
					}
				},
				{
					
					grupo: 'negacion',
					valor: 0, 
					salida: codigo+'e3',
					tiempo: 1
				},
			],

			respuesta_desconocida: {
				tipo_cuerpo: 'texto',
				cuerpo: 'Please answer yes or no',
				ayuda: 'Por favor contesta si o no',
			},
		
	    },
	    //Contexto de refuerzo
	    {
	    	codigo: codigo+'e3',
	    	
	      	contexto:[
	      		/*
	      		tipo_cuerpo: 'texto' | 'imagen' | 'audio' | 'video' | 'emoji',
	      		*/
	      		{
	      			tipo_cuerpo: 'texto',
					cuerpo: "Don't worry,",
					ayuda: "No te preocupes,",
				},
				{
					tipo_cuerpo: 'texto',
					cuerpo: "Let's try it again,",
					ayuda: "Intentémoslo nuevamente,",
				},
				{
					tipo_cuerpo: 'imagen',	
					cuerpo: "singer-en-2.jpg",
					ayuda: "singer-es-2.jpg"
				},
				{
					tipo_cuerpo: 'audio',	
					cuerpo: "singer.mp3",
				},
				{
					tipo_cuerpo: 'texto',	
					cuerpo: "The 'singer' is the person who is standing on the stage with the microphone.",
					ayuda: "'singer' es la persona que está de pie en la tarima con el micrófono."
				},
				{
					tipo_cuerpo: 'texto',
					cuerpo: "The 'singer' is the one who sings to entertain their audience.",
					ayuda: "'singer' es quien canta para entretener a su audiencia. "
				},
			],
			pregunta:{
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'si_no',
				cuerpo: "Are you clear about the concept of singer now?",
				ayuda: "Ahora tienes claro el concepto de 'singer'?",
			},
			
			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					
					grupo: 'afirmacion',
					valor: 100, 
					salida: codigo+'e4',
					tiempo: 2,
					logros: [],
					cierre: {
						grupo: 'great',
						tipo_cuerpo: 'texto', 
						cuerpo: 'Great!',
						ayuda: 'Estupendo!',
					}
	        		
				},
				{
					
					grupo: 'negacion',
					valor: 0, 
					salida: codigo+'e3',
					tiempo: 2
				},
			],

			respuesta_desconocida: {
				tipo_cuerpo: 'texto',
				cuerpo: "Please answer 'yes' or 'no'",
				ayuda: "Por favor contesta 'si' o 'no'",
			},
		
	    },


	    //Practica 1
	    // wh question a or b, dos opciones, una correcta y una incorrecta
	    {
	    	codigo: codigo+'e2',
	    	
	      	contexto:[
	      		/*
	      		tipo_cuerpo: 'texto' | 'imagen' | 'audio' | 'video' | 'emoji',
	      		*/
	      		{
	      			tipo_cuerpo: 'texto',
					cuerpo: "Please, help me remember,",
					ayuda: "Por favor ayúdame a recordar,",
				},
				{
					tipo_cuerpo: 'texto',
					cuerpo: "Who is the person on the stage?",
					ayuda: "Quien es la persona sobre la tarima?",
				},
			],
			pregunta:{
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'abierta',
				cuerpo: "singer or student?",
				ayuda: "cantante o estudiante",
			},
			
			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					grupo: 'grupo_propio',
					grupo_propio: ['singer'],
					valor: 100, 
					salida: codigo+'e4',
					tiempo: 3,
					logros: [],
	        		cierre: {
	        			grupo: 'great',
						tipo_cuerpo: 'texto', 
						cuerpo: 'Great!',
						ayuda: 'Estupendo!',
					}
				},
				{
					grupo: 'grupo_propio',
					grupo_propio: ['student'],
					valor: 0, 
					salida: codigo+'e3',
					tiempo: 3
				},
			],

			respuesta_desconocida: {
				tipo_cuerpo: 'texto',
				cuerpo: "Please answer 'singer' or 'student'",
				ayuda: "Por favor contesta 'singer' o 'student'",	
			},
		
	    },


	    //Practica 2
	    // the traduction of 'a' is 'b', is correct? respuesta si o no
	    {
	    	codigo: codigo+'e4',
	    	
	      	contexto:[
	      		/*
	      		tipo_cuerpo: 'texto' | 'imagen' | 'audio' | 'video' | 'emoji',
	      		*/
	      		{
	      			tipo_cuerpo: 'texto',
					cuerpo: "Let's practice,",
					ayuda: "Vamos a practicar,",
				},
				{
					tipo_cuerpo: 'texto',
					cuerpo: "the traduction of 'singer' is 'cantante' ",
					ayuda: "la traducción de 'singer' es 'cantante'",
				},
			],
			pregunta:{
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'si_no',
				cuerpo: "is that correct?",
				ayuda: "es eso correcto?",
			},
			
			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					
					grupo: 'afirmacion',
					valor: 100, 
					salida: codigo+'e5',
					tiempo: 4,
					logros: [],
					cierre: {
						grupo: 'great',
						tipo_cuerpo: 'texto', 
						cuerpo: 'Great!',
						ayuda: 'Estupendo!',
					}
	        		
				},
				{
					
					grupo: 'negacion',
					valor: 0, 
					salida: codigo+'e3',
					tiempo: 4
				},
			],

			respuesta_desconocida: {
				tipo_cuerpo: 'texto',
				cuerpo: "Please answer 'yes' or 'no'",
				ayuda: "Por favor contesta 'si' o 'no'",
			},
		
	    },


	    //Practica 3
	    // how do you said in english 'word', unica respuesta word
	    {
	    	codigo: codigo+'e5',
	    	
	      	contexto:[
	      		/*
	      		tipo_cuerpo: 'texto' | 'imagen' | 'audio' | 'video' | 'emoji',
	      		*/
	      		{
	      			tipo_cuerpo: 'texto',
					cuerpo: "Let's remember,",
					ayuda: "Vamos a recordar,",
				},
			],
			pregunta:{
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'si_no',
				cuerpo: "How do you said in ingles 'cantante'?",
				ayuda: "Cómo dices en inglés 'cantante'?",
			},
			
			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					grupo: 'grupo_propio',
					grupo_propio: ['singer', 'the singer', 'a singer'],
					valor: 100, 
					salida: codigo+'e6',
					tiempo: 5,
					logros: [],
					cierre: {
						grupo: 'great',
						tipo_cuerpo: 'texto', 
						cuerpo: 'Great!',
						ayuda: 'Estupendo!',
					}
	        		
				},
				
			],

			respuesta_desconocida: {
				tipo_cuerpo: 'texto',
				cuerpo: "Try it again",
				ayuda: "Inténtalo otra vez",
			},
		
	    },

	     //Practica 4
	    // how do you said in spanish 'word', unica respuesta word
	    {
	    	codigo: codigo+'e6',
	    	
	      	contexto:[
	      		/*
	      		tipo_cuerpo: 'texto' | 'imagen' | 'audio' | 'video' | 'emoji',
	      		*/
	      		{
	      			tipo_cuerpo: 'texto',
					cuerpo: "Let's practice,",
					ayuda: "Practiquemos,",
				},
			],
			pregunta:{
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'si_no',
				cuerpo: "How do you said in spanish 'singer'?",
				ayuda: "Cómo dices en español 'singer'?",
			},
			
			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					grupo: 'grupo_propio',
					grupo_propio: ['cantante','el cantante'],
					valor: 100, 
					salida: codigo+'e7',
					tiempo: 6,
					logros: [],
	        		cierre: {
	        			grupo: 'great',
						tipo_cuerpo: 'texto', 
						cuerpo: 'Great!',
						ayuda: 'Estupendo!',
					}
				},
				
			],

			respuesta_desconocida: {
				tipo_cuerpo: 'texto',
				cuerpo: "Try it again",
				ayuda: "Inténtalo otra vez",
			},
	    },


	    //Practica 5
	    // Afirmation, respuesta falso o verdadero
	    {
	    	codigo: codigo+'e7',
	    	
	      	contexto:[
	      		/*
	      		tipo_cuerpo: 'texto' | 'imagen' | 'audio' | 'video' | 'emoji',
	      		*/
	      		{
	      			tipo_cuerpo: 'texto',
					cuerpo: "If you are looking for singers,",
					ayuda: "Si buscas cantantees,",
				},
				{
					tipo_cuerpo: 'texto',
					cuerpo: "You can find them in a school",
					ayuda: "Puedes encontrarlos en un colegio",
				},
			],
			pregunta:{
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'abierta',
				cuerpo: "true or false?",
				ayuda: "verdadero o falso?",
			},
			
			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					
					grupo: 'verdadero',
					valor: 100, 
					salida: codigo+'e8',
					tiempo: 7,
					logros: [],
	        		cierre: {
	        			grupo: 'great',
						tipo_cuerpo: 'texto', 
						cuerpo: 'Great!',
						ayuda: 'Estupendo!',
					}	
				},
				{
					
					grupo: 'falso',
					valor: 0, 
					salida: codigo+'e3',
					tiempo: 7
				},
			],

			respuesta_desconocida: {
				tipo_cuerpo: 'texto',
				cuerpo: "Please answer 'true' or 'false'",
				ayuda: "Por favor contesta 'verdadero' o 'falso'",
			},
		
	    },


	    //Practica 6
	    // Negacion, respuesta falso o verdadero
	    {
	    	codigo: codigo+'e8',
	    	
	      	contexto:[
	      		/*
	      		tipo_cuerpo: 'texto' | 'imagen' | 'audio' | 'video' | 'emoji',
	      		*/
	      		{
	      			tipo_cuerpo: 'texto',
					cuerpo: "Look at this:",
					ayuda: "Mira esto:",
				},
				//Imagen de un bombero
				{
					tipo_cuerpo: 'imagen',
					cuerpo: "fireman-1.jpg",
				},
				{
					tipo_cuerpo: 'texto',
					cuerpo: "He is not a singer",
					ayuda: "El no es un cantante",
				},
			],
			pregunta:{
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'abierta',
				cuerpo: "true or false?",
				ayuda: "falso o verdadero?",
			},
			
			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					
					grupo: 'verdadero',
					valor: 100, 
					salida: codigo+'e9',
					tiempo: 8,
					logros: [],
					cierre: {
						grupo: 'great',
						tipo_cuerpo: 'texto', 
						cuerpo: 'Great!',
						ayuda: 'Estupendo!',
					}
	        		
				},
				{
					
					grupo: 'falso',
					valor: 0, 
					salida: codigo+'e3',
					tiempo: 8
				},
			],

			respuesta_desconocida: {
				tipo_cuerpo: 'texto',
				cuerpo: "Please answer 'true' or 'false'",
				ayuda: "Por favor contesta 'verdadero' o 'falso'",
			},
	    },



	    //Practica 7
	    // What do you listen?, audio - única respuesta 'word or sentence'
	    {
	    	codigo: codigo+'e9',
	    	
	      	contexto:[
	      		/*
	      		tipo_cuerpo: 'texto' | 'imagen' | 'audio' | 'video' | 'emoji',
	      		*/
	      		{
	      			tipo_cuerpo: 'texto',
					cuerpo: "Listen to this:",
					ayuda: "Escucha esto:",
				},

				{
					tipo_cuerpo: 'audio',
					cuerpo: "singer.mp3",
				},
			],
			pregunta:{
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'si_no',
				cuerpo: "What did you hear?",
				ayuda: "¿Que escuchaste?",
			},
			
			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					grupo: 'grupo_propio',
					grupo_propio: ['singer'],
					valor: 100, 
					salida: codigo+'e10',
					tiempo: 9,
					logros: [],
	        		cierre: {
	        			grupo: 'great',
						tipo_cuerpo: 'texto', 
						cuerpo: 'Great!',
						ayuda: 'Estupendo!',
					}
				},
				
			],

			respuesta_desconocida: {
				tipo_cuerpo: 'texto',
				cuerpo: "Try it again",
				ayuda: "Inténtalo otra vez",
			},
	    },


	    //Practica 8
	    // What do you see?, image - única respuesta 'word or sentence'
	    {
	    	codigo: codigo+'e10',
	    	
	      	contexto:[
	      		/*
	      		tipo_cuerpo: 'texto' | 'imagen' | 'audio' | 'video' | 'emoji',
	      		*/
	      		{
	      			tipo_cuerpo: 'texto',
					cuerpo: "Look at this:",
					ayuda: "Mira esto:",
				},

				{
					tipo_cuerpo: 'imagen',
					cuerpo: "singer-1.jpg",
				},
			],
			pregunta:{
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'si_no',
				cuerpo: "Who is he?",
				ayuda: "Quien es él?",
			},
			
			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					grupo: 'grupo_propio',
					grupo_propio: ['singer', 'a singer', 'the singer','is a singer', 'he is a singer', "he's a singer"],
					valor: 100, 
					
					tiempo: 10,
					logros: ['g10'],
					cierre: {
						grupo: 'great',
						tipo_cuerpo: 'texto', 
						cuerpo: 'Great!',
						ayuda: 'Estupendo!',
					}
	        		
				},
				
			],

			respuesta_desconocida: {
				tipo_cuerpo: 'texto',
				cuerpo: "Try it again",
				ayuda: "Inténtalo otra vez",
			},
		
	    },


	]

}
