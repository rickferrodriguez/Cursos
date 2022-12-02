//NO es posible crear objetos antes de declarar una clase, ne se aplica el concepto de 'hoisting'
// let persona2 = new Persona('Karla','Sanchez');
// constructor de un proyecto
// para usar los metodos 'get' y 'set' es necesario que los nombres de las propiedades de la clase se llamen igual, por eso estos deben tener un '_' antes para no confundirse
// Clase Padre (object)
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

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    // cuando se trate de imprimir esta información dentro de un navegador web, el sistema solo mostrará la información como si fuera un objeto sin nada, por eso se debe sobreescribir sus valores con el metodo 'toString'
    // ahora estamos transformando esta información en una cadena de caracteres
    toString(){
        return this.nombreCompleto();
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) 
    { 
        super(nombre, apellido); //Lamar al constructor de la clase padre
        this._departamento = departamento
    }

    get departamento() { return this._departamento;}
    set departamento(departamento) { this._departamento = departamento;}
    //Sobreescritura
    //Lo que se hace es volver a llamar el código que estaba en la clase padre, pero ahora le añadimos la propiedad de nuestra clase hija
    nombreCompleto(){
        // return this._nombre + ' ' + this._apellido + ' ' + this._departamento;
        // para no tener que volver a escribir este código y solamente llamar a esta función se hace lo siguiente:
        // usamos el metodo 'super' + el metodo creado dentro de la clase
        return super.nombreCompleto() + ' ' + this._departamento;
    }
}

// instancia de clase u objeto
let persona1 = new Persona('Juan', 'Perez');
// ahora vamos a cambiar la propiedad nombre de la siguiente manera
persona1.nombre = 'Juan Carlos';
// ahora vamos a llamar a el metedo 'get' de forma indirecta de la siguiente forma
console.log(persona1.nombre)
// Todo depende del objeto que estamos creando, este al parte de la clase padre solo muestra la información inicial y no la del empleado (clase hijo)
console.log(persona1.toString())

let empleado1 = new Empleado('richard','Rodriguez','Sistemas');
console.log(empleado1.nombreCompleto())
// En este caso, como esta clase hijo hace referencia en su constructor a la clase padre, además de imprimir el departamento, también mostrará el nombre y el apellido
// La clase padre va a heredar el 'toString' dentro del hijo y lo imprimirá todo como tal
console.log(empleado1.toString())


class Entreno extends Persona {
    constructor(nombre, apellido, dia) 
    { 
        super(nombre, apellido); //Lamar al constructor de la clase padre
        this._dia = dia
    }

    get dia() { return this._dia;}
    set dia(dia) { this._dia = dia;}
    //Sobreescritura
    //Lo que se hace es volver a llamar el código que estaba en la clase padre, pero ahora le añadimos la propiedad de nuestra clase hija
    tipoEjercicio(){
        // return this._nombre + ' ' + this._apellido + ' ' + this._departamento;
        // para no tener que volver a escribir este código y solamente llamar a esta función se hace lo siguiente:
        // usamos el metodo 'super' + el metodo creado dentro de la clase
        if (this._dia == 1)
            return super.nombreCompleto() + ' ' + this._dia;
        else 
            return 'este día no está registrado'
    }
}

let persona2 = new Entreno('richard','Rodriguez','2');
console.log(persona2.tipoEjercicio());

