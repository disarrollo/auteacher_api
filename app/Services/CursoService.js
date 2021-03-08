'use strict'

//Esto es para base de datos estatico
var Curso = use('App/Models/Curso')

/*
* Usado en modo seleccion debase de datos dinamico
*/
const db = null

class CursoService {

	static async setDb(db){
		this.db = db
		this.Curso = await this.db.model("Curso");
	}

	
	/*
	* Estandariza el proceso de creacion de un guion
	*
	*/

	static async crearCurso(payload){

		let curso = new Curso()
		Object.assign(curso,payload)
		
		curso.unidades = []
		curso.lecciones = []

		await curso.save()
		return curso

	}

}

module.exports = CursoService