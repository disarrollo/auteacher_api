 comparar en minusculas
 corregir ancho de el chat item en mobile
 corregir el ancho de la conversacion en mobile


 - 20 imagenes
 - 20 audios
 - arreglar funcion marcar mensaje leido, almacenar
 - Notificaciones
 - Iniciar indices de la base de datos
 - Diferir un poco las conversaciones aleatoriamiente para que no inicien todas al mismo tiempo
 
 - verificacion de version - actualizacion obligatoria
 
 FUNCIONES
 

 Al finalizar un dialogo hay que revisar según curso que guiones se desbloquean

-- Para un guion especifico
Buscar todos los guiones que tengan como requerimiento el guion que se superó
Revisar en cada uno de esos guiones si todos los requerimientos ya estan superados
Guardar el guion en en una cola de tareas para crear los dialogos, estos registros estaran sin asistente

El coordinador 

Desbloquearlo ??? Crear un dialogo

-- Sin guion especifico (revision completa)
Buscar todos los logros 

 DEFINIR

Cantidad máxima de dialogos activos en una conversación
Una escena finaliza con una única respuesta o puede continuar iterando
**************

Procesar respuesta
Grupos de respuestas
igualar a todas las respuestas - PLN
igualar solo a las posibles respuestas
igualar a grupo por grupo según la expectativa (primero el grupo considerado el más probable)

Posibles grupos

respuesta_afirmativa (grupo general)
respuesta_positiva
palabra (grupo especifico)
oracion


un grupo general es un grupo de respuestas que se puede utilizar en varias interacciones
un grupo específico es un grupo que únicamente se utiliza en una interacción

una respuesta puede ser identificada o no identificada
si es identificada puede estar dentro de los grupo de respuestas esperadas o no
si no se encuentra en los grupos de respuestas esperadas debe haber una salida diseñada, 
ej. 'lo siento pero no entiendo tu respuesta, no tiene nada que ver con lo que te estoy preguntado'

si la respuesta es no identificada hay que pasarla a un humano


tipos de preguntas
si,no
abierta
cerrada
multiple

**************
TEXTOS

Déjame pensar en una forma de ayudarte a que memorices esto y nunca lo olvides
Luego hablamos para practicar
Un par de veces más y nunca lo olvidarás


**************

ademas de los bots encargados de las lecciones contamos con otros tipos de bots

Traductor Ingles - Español
Traductor Español - Ingles
Diccionario
Sinonimo
Antonimo




**************
## Consideraciones


Un curso es un producto ofrecido por la institución que por lo general tiene un conjunto de temas agrupados en unidades.

Un tema académico es una agrupación de conocimiento enfocado a varios logros específico, los cuales son evaluables, un tema por lo general se entrega en una clase presencial.

??? Cada logro específico está enfocado al desarrollo de un conjunto de habilidades en relacion al tema,
es evaluable

Alrededor de cada tema académico se realizan varios diálogos, es decir un diálogo pertenece a un tema

Un diálogo es una conversación que el bot entabla con el estudiante según el guión, es corta, se desarrolla en varios momentos de tiempo con el objetivo de afianzar los conceptos en la memoria de largo plazo del estudiante, se desarrolla alrededor de un único tema, se compone de varias interacciones. un diálogo se desarrolla según el guión.

Un guión es una estructura que le permite al sistema como desarrollar el diálogo.

Interacciones, son la mínima parte de un diálogo y se compone por lo general de un contexto, una pregunta y una respuesta. Están organizadas en una secuencia. La interacción finaliza con la repuesta satisfactoria del estudiante. Un interacción se desarrolla según la secuencia.

Una secuencia es un fragmento del guión, una estructura simple que le permite al sistema desarollar la interacción.


Dialogos actuales, los diálogos que el estudiante tiene pendiente por contestar.
Al cerrar un diálogo se debe archivar y calcular tiempos de respuesta (eficacia y eficiencia)

Un diálogo podría ser dinámico o estático, es decir de acuerdo al tiempo de respuesta del estudiante puede alargarse (en caso de evidenciar un tiempo largo) o acortarse (en caso de respuestas rápidas).

Para esto las interacciones deben estar condicionadas al resultado de la interaccion anterior, es decir que una interacción elige a la siguiente de acueerdo al resultado, la siguiente la llamamos interacción de salida.

Las interacción de salida se componen de un mensaje de finalización (bien hecho, vas por buen camino),
y el id de la siguiente interacción, los mensajes de finalización por lo general se toman aleatoreamiente de un conjunto de posibilidades.


Al finalizar la interacción su respectivo identificador se agrega a la lista de logros del curso, de esa manera se pueden condicionar las interacciónes de otros diálogos que pertenezcan al mismo tema

El guión es la plantilla del diálogo.



#FUNDAMENTOS

- Un proceso complejo se subdivide hasta alcanzar unidades mínimas sencillas
En este caso el proceso de aprendizaje del ingles se subdivide en interacciones que constituyen un proceso sencillo, fácil de comprender y medir.

- Un diálogo tiene un objetivo
	ej. - aprender el significado de una palabra
		- aprender una regla gramatical
		- aprender a usar una expresión
		- aprender a hacer una pregunta

- Un interacción es un paso en el proceso de alcanzar ese objetivo
- Una interacción se resuelve y contesta en tiempo real
- Un nueva interacción se agrega a lista de tareas (diferido)


##Opciones para la actividad de los bots

1. Un bot tiene una cola de tareas
	El bot esta permanentemente buscando en su cola por tareas de los dialogos activos y ejecutarlos

	Quien llena las tareas?
	El mismo al resolver una secuencia
	
	Un coordinador que dedicado a asignar dialogos



Davivienda 
llamada 22 de Febrero
Juan Camilo Trujillo

**********

Crear guiones de prueba

cp g2.js g3.js 
cp g2.js g4.js 
cp g2.js g5.js 
cp g2.js g6.js 
cp g2.js g7.js 
cp g2.js g8.js 
cp g2.js g9.js 
cp g2.js g10.js 
cp g2.js g11.js 
cp g2.js g12.js 
cp g2.js g13.js 
cp g2.js g14.js 
cp g2.js g15.js 

sed -i '' 's/teacher/student/g' "g3.js"
sed -i '' 's/profesor/estudiante/g' "g3.js"
sed -i '' 's/g2/g3/g' "g3.js"
sed -i '' 's/teacher/architect/g' "g4.js"
sed -i '' 's/profesor/arquitecto/g' "g4.js"
sed -i '' 's/g2/g4/g' "g4.js"
sed -i '' 's/teacher/actor/g' "g5.js"
sed -i '' 's/profesor/actor/g' "g5.js"
sed -i '' 's/g2/g5/g' "g5.js"
sed -i '' 's/teacher/athlete/g' "g6.js"
sed -i '' 's/profesor/atleta/g' "g6.js"
sed -i '' 's/g2/g6/g' "g6.js"
sed -i '' 's/teacher/musician/g' "g7.js"
sed -i '' 's/profesor/musico/g' "g7.js"
sed -i '' 's/g2/g7/g' "g7.js"
sed -i '' 's/teacher/artist/g' "g8.js"
sed -i '' 's/proferos/artista/g' "g8.js"
sed -i '' 's/g2/g8/g' "g8.js"
sed -i '' 's/teacher/banker/g' "g9.js"
sed -i '' 's/profesor/banquero/g' "g9.js"
sed -i '' 's/g2/g9/g' "g9.js"
sed -i '' 's/teacher/singer/g' "g10.js"
sed -i '' 's/profesor/cantante/g' "g10.js"
sed -i '' 's/g2/g10/g' "g10.js"
sed -i '' 's/teacher/flight attendant/g' "g11.js"
sed -i '' 's/profesor/auxiliar de vuelo/g' "g11.js"
sed -i '' 's/g2/g11/g' "g11.js"
sed -i '' 's/teacher/chef/g' "g12.js"
sed -i '' 's/profesor/chef/g' "g12.js"
sed -i '' 's/g2/g12/g' "g12.js"
sed -i '' 's/teacher/writer/g' "g13.js"
sed -i '' 's/profesor/escritor/g' "g13.js"
sed -i '' 's/g2/g13/g' "g13.js"
sed -i '' 's/teacher/manager/g' "g14.js"
sed -i '' 's/profesor/administrador/g' "g14.js"
sed -i '' 's/g2/g14/g' "g14.js"
sed -i '' 's/teacher/scientist/g' "g15.js"
sed -i '' 's/profesor/científico/g' "g15.js"
sed -i '' 's/g2/g15/g' "g15.js"

adonis guion:iniciar_uno g1
adonis guion:iniciar_uno g2
adonis guion:iniciar_uno g3
adonis guion:iniciar_uno g4
adonis guion:iniciar_uno g5
adonis guion:iniciar_uno g6
adonis guion:iniciar_uno g7
adonis guion:iniciar_uno g8
adonis guion:iniciar_uno g9
adonis guion:iniciar_uno g10
adonis guion:iniciar_uno g11
adonis guion:iniciar_uno g12
adonis guion:iniciar_uno g13
adonis guion:iniciar_uno g14
adonis guion:iniciar_uno g15

