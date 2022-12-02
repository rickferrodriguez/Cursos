// sobreescritura es cuando una clase hija puede heredar las caracteristicas de la clase padre

class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalle(){ return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`}
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._deportamento = departamento;
    }
    obtenerDetalle(){ return `Gerente => [${super.obtenerDetalle()} Departamento: ${this._deportamento}]`}
}


// Polimorfismo es cuando a partir de una misma linea de código dependiendo del objeto se puede acceder a diferentes metodos,tanto padre como hijo.

// en este caso el tipo puede ser tanto de empleado como de cliente y dependiendo del que se usa el resultado es diferente
function imprimir(tipo){
    console.log(tipo.obtenerDetalle());
}
let empleado1 = new Empleado('Sofia', 1450000);
let gerente1 = new Gerente('Sofia', 1450000,'Sistemas');

imprimir(empleado1)
imprimir(gerente1)
