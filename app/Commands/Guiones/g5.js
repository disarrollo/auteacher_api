'use strict'
var codigo = module.id.substring(module.id.lastIndexOf('/')+1,module.id.length-3)
/*
	Dialogo para aprender la palabra 'actor'
	A actor is a person who helps students to acquire knowledge
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
					cuerpo: "Now, let's talk about the word 'actor'",
					ayuda: "Ahora, vamos a hablar sobre 'actor'"
				},
				{
					tipo_cuerpo: 'imagen',	
					cuerpo: "actor-en-1.jpg",
					ayuda: "actor-es-1.jpg"
				},
				{
					tipo_cuerpo: 'audio',	
					cuerpo: "actor.mp3",
				},
				{
					tipo_cuerpo: 'texto',
					cuerpo: 'a actor is a person who helps students acquire knowledge',
					ayuda: 'un actor es la persona que ayuda a los estudiantes a adquirir conocimiento'
				},
				{
					tipo_cuerpo: 'texto',
					cuerpo: 'You can find actors in schools, universities and educational institutions',
					ayuda: 'Puedes encontrar actores en colegios, universidades e instituciones educativas',
				},
			],

			pregunta: {
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'si_no',
				cuerpo: "Do you understand the meaning of 'actor'?",
				ayuda: "Entiendes el significado de 'actor'?",
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
					cuerpo: "actor-en-2.jpg",
					ayuda: "actor-es-2.jpg"
				},
				{
					tipo_cuerpo: 'audio',	
					cuerpo: "actor.mp3",
				},
				{
					tipo_cuerpo: 'texto',	
					cuerpo: "The 'actor' is the person who is standing in front of the students in the classroom",
					ayuda: "'actor' es la persona que está de pie en frente de los estudiantes en el salón de clase"
				},
				{
					tipo_cuerpo: 'texto',
					cuerpo: "The 'actor' is the one who guides students in their learning process",
					ayuda: "'actor' es quien guia a los estudiantes en su proceso de aprendizaje"
				},
			],
			pregunta:{
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'si_no',
				cuerpo: "Are you clear about the concept of actor now?",
				ayuda: "Ahora tienes claro el concepto de 'actor'?",
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
					cuerpo: "Who is the person in front of classroom?",
					ayuda: "Quien es la persona al frente del salón de clases?",
				},
			],
			pregunta:{
				/*
				tipo_pregunta: 'abierta' | 'cerrada' | 'si_no'
				*/
				tipo_pregunta: 'abierta',
				cuerpo: "actor or student?",
				ayuda: "actor o estudiante",
			},
			
			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					grupo: 'grupo_propio',
					grupo_propio: ['actor'],
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
				cuerpo: "Please answer 'actor' or 'student'",
				ayuda: "Por favor contesta 'actor' o 'student'",	
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
					cuerpo: "the traduction of 'actor' is 'actor' ",
					ayuda: "la traducción de 'actor' es 'actor'",
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
				cuerpo: "How do you said in ingles 'actor'?",
				ayuda: "Cómo dices en inglés 'actor'?",
			},
			
			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					grupo: 'grupo_propio',
					grupo_propio: ['actor', 'the actor', 'a actor'],
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
				cuerpo: "How do you said in spanish 'actor'?",
				ayuda: "Cómo dices en español 'actor'?",
			},
			
			posibles_respuestas: [
				/*
				tipo_coincidencia: 'grupo' | 'palabra' | 'frase'
				texto: el nombre del grupo, la palabra o la frase
				*/
				{
					grupo: 'grupo_propio',
					grupo_propio: ['actor','el actor'],
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
					cuerpo: "If you are looking for actors,",
					ayuda: "Si buscas actores,",
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
					cuerpo: "He is not a actor",
					ayuda: "El no es un actor",
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
					cuerpo: "actor.mp3",
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
					grupo_propio: ['actor'],
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
					cuerpo: "actor-1.jpg",
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
					grupo_propio: ['actor', 'a actor', 'the actor','is a actor', 'he is a actor', "he's a actor"],
					valor: 100, 
					
					tiempo: 10,
					logros: ['g5'],
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
