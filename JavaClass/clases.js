//NO es posible crear objetos antes de declarar una clase, ne se aplica el concepto de 'hoisting'
// let persona2 = new Persona('Karla','Sanchez');
// constructor de un proyecto
// para usar los metodos 'get' y 'set' es necesario que los nombres de las propiedades de la clase se llamen igual, por eso estos deben tener un '_' antes para no confundirse
class Persona {

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() { return this._nombre; }
    // es necesario en este metodo un parametro de entrada, porque lo que hace 'set' es remplazar el valor que viene por parametro dentro de la propiedad de la clase
    set nombre(nombre) { this._nombre = nombre;}

    get apellido() { return this._apellido}
    set apellido(apellido) {this._apellido = apellido;}
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) 
    { 
        super(nombre, apellido); //Lamar al constructor de la clase padre
        this._departamento = departamento
    }

    get departamento() { return this._departamento;}
    set departamento(departamento) { this._departamento = departamento;}
}

// instancia de clase u objeto
let persona1 = new Persona('Juan', 'Perez');
// ahora vamos a cambiar la propiedad nombre de la siguiente manera
persona1.nombre = 'Juan Carlos';
// ahora vamos a llamar a el metedo 'get' de forma indirecta de la siguiente forma
console.log(persona1.nombre)

let empleado1 = new Empleado('richard','Rodriguez','Sistemas');
console.log(empleado1)
