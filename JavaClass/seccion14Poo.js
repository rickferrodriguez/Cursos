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
    toString(){ return `Gerente => [${super.obtenerDetalle()} Departamento: ${this._deportamento}]`}
}

let empleado1 = new Empleado('Sofia', 1450000);
console.log(empleado1.obtenerDetalle());
let gerente1 = new Gerente('Sofia', 1450000,'Sistema');
console.log(gerente1.toString())
