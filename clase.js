class estudiante {
    constructor (nombre) {
        this.nombre = nombre;
        this.asignaturas = ["HTML, CSS, JavaScript"];
    }

    


obtenDatos() {
    return {
    nombre: this.nombre,
    asignaturas: this.asignaturas,
    }; 
}
}

const miEstudiante = new estudiante("Lautaro");
console.log(miEstudiante.obtenDatos());