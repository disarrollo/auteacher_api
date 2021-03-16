'use strict'
var codigo = module.id.substring(module.id.lastIndexOf('/')+1,module.id.length-3)
/*
	Dialogo para aprender la palabra 'athlete'
	A athlete is a person who helps students to acquire knowledge
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
					cuerpo: "Now, let's talk about the word 'athlete'",
					ayuda: "Ahora, vamos a hablar sobre 'athlete'"
				},
				{
					tipo_cuerpo: 'imagen',	
					cuerpo: "athlete-en-1.jpg",
					ayuda: "athlete-es-1.jpg"
				},
				{
					tipo_cuerpo: 'audio',	
					cuerpo: "athlete.mp3",
				},
				{
					tipo_cuerpo: 'texto',
					cuerpo: 'an athlete is a person who is good at sports such as running, jumping, or throwing things',
					ayuda: 'un atleta es la persona que es buena en deportes como correr, saltar, o lanzar cosas'
				},
				{
					tipo_cuerpo: 'texto',
					cuerpo: 'You can find athletes in tracks, gyms, competitions, and olympic games',
					ayuda: 'Puedes encontrar atletas en pistas, gimnasios, competiciones y juegos olímpicos',
				},
			],

			pregunta: {
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'si_no',
				cuerpo: "Do you understand the meaning of 'athlete'?",
				ayuda: "Entiendes el significado de 'athlete'?",
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
					cuerpo: "athlete-en-2.jpg",
					ayuda: "athlete-es-2.jpg"
				},
				{
					tipo_cuerpo: 'audio',	
					cuerpo: "athlete.mp3",
				},
				{
					tipo_cuerpo: 'texto',	
					cuerpo: "The 'athlete' is the person who is running across the track",
					ayuda: "'athlete' es la persona que está corriendo a través de la pista"
				},
				{
					tipo_cuerpo: 'texto',
					cuerpo: "The 'athlete' is the one who competes against others for a medal or a prize",
					ayuda: "'athlete' es quien compite contra otros por una medalla o un premio. "
				},
			],
			pregunta:{
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'si_no',
				cuerpo: "Are you clear about the concept of athlete now?",
				ayuda: "Ahora tienes claro el concepto de 'athlete'?",
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
					cuerpo: "Who is the person in the running track?",
					ayuda: "Quien es la persona en la pista de atletismo?",
				},
			],
			pregunta:{
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'abierta',
				cuerpo: "athlete or architect?",
				ayuda: "atleta o arquitecto?",
			},
			
			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					grupo: 'grupo_propio',
					grupo_propio: ['athlete'],
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
					grupo_propio: ['architect'],
					valor: 0, 
					salida: codigo+'e3',
					tiempo: 3
				},
			],

			respuesta_desconocida: {
				tipo_cuerpo: 'texto',
				cuerpo: "Please answer 'athlete' or 'student'",
				ayuda: "Por favor contesta 'athlete' o 'student'",	
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
					cuerpo: "the traduction of 'athlete' is 'atleta' ",
					ayuda: "la traducción de 'athlete' es 'atleta'",
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
				cuerpo: "How do you said in ingles 'atleta'?",
				ayuda: "Cómo dices en inglés 'atleta'?",
			},
			
			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					grupo: 'grupo_propio',
					grupo_propio: ['athlete', 'the athlete', 'a athlete'],
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
				cuerpo: "How do you said in spanish 'athlete'?",
				ayuda: "Cómo dices en español 'athlete'?",
			},
			
			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					grupo: 'grupo_propio',
					grupo_propio: ['atleta','el atleta'],
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
					cuerpo: "If you are looking for athletes,",
					ayuda: "Si buscas atletaes,",
				},
				{
					tipo_cuerpo: 'texto',
					cuerpo: "You can find them in the olympic games",
					ayuda: "Puedes encontrarlos en los juegos olímpicos",
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
					cuerpo: "He is not an athlete",
					ayuda: "El no es un atleta",
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
					cuerpo: "athlete.mp3",
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
					grupo_propio: ['athlete'],
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
					cuerpo: "athlete-1.jpg",
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
					grupo_propio: ['athlete', 'an athlete', 'the athlete','is an athlete', 'he is an athlete', "he's an athlete"],
					valor: 100, 
					
					tiempo: 10,
					logros: ['g6'],
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
