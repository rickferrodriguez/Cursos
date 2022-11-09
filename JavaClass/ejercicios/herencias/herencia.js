class Persona {
    static contadorPersonas = 0;
    constructor( nombre, apellido, edad) {
        this._idPersona = contadorPersonas++;
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
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, edad,idEmpleado, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = idEmpleado;
        this._sueldo = sueldo;
    }

    get idEmpleado() { return this._idEmpleado;}
    get sueldo() { return this._sueldo; }

    set idEmpleado(idEmpleado) { this._idEmpleado = idEmpleado;}
    set sueldo(sueldo) { this._sueldo = sueldo;}
    
    toString(){
        return super.toString()+ this._idEmpleado + ' ' + this._sueldo;
    }
}

class Cliente extends Persona {
    constructor(nombre, apellido, edad,idCliente, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliene = idCliente;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente() { return this._idCliente;}
    get fechaRegistro() { return this._fechaRegistro; }

    set idCliente(idCliente){this._idCliente = idCliente;}
    set fechaRegistro(fechaRegistro){this._fechaRegistro = fechaRegistro;}

    toString(){
        return super.toString()+ ' '+ this._idEmpleado + ' '+ this._fechaRegistro;
    }
}
