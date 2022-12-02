
class Persona {
    static contadorPersonas = 0;

    constructor( nombre, apellido, edad) {
        this._idPersona = ++ Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona() { return this._idPersona; }
    get nombre() { return this._nombre; }
    get apellido() { return this._apellido; }
    get edad() { return this._edad; }

    set nombre(nombre) { this._nombre = nombre;}
    set apellido(apellido) { this._apellido = apellido;}
    set edad(edad) { this._edad = edad;}

    toString(){
        // esta es simplemente otra forma de concatenar objetos
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}


class Empleado extends Persona {
    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++ Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }

    get idEmpleado() { return this._idEmpleado;}
    get sueldo() { return this._sueldo; }

    set sueldo(sueldo) { this._sueldo = sueldo;}
    
    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}


class Cliente extends Persona {
    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++ Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente() { return this._idCliente;}
    get fechaRegistro() { return this._fechaRegistro; }

    set fechaRegistro(fechaRegistro){this._fechaRegistro = fechaRegistro;}

    toString(){
        return `${super.toString()} ${this._idCliente}  ${this._fechaRegistro}`;
    }
}

// Prueba clase persona
let persona1 = new Persona('Juan', 'Bolaños', 15 )
console.log(persona1.toString())
let persona2 = new Persona('Camila', 'Morales', 15 )
console.log(persona2.toString())
let empleado1 = new Empleado('Karla', 'Gomez', 22,125000)
console.log(empleado1.toString())
let empleado2 = new Empleado('Kevin', 'Bolaños', 25,225000)
console.log(empleado2.toString())
let cliente1 = new Cliente('Daniela', 'Flores',21, new Date())
console.log(cliente1.toString())
let cliente2 = new Cliente('Brian', 'Flores',21, new Date())
console.log(cliente2.toString())
