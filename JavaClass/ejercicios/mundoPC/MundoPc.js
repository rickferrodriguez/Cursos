class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada() { return this._tipoEntrada; }
    get marca() { return this._marca; }

    set tipoEntrada(tipoEntrada){this._tipoEntrada = tipoEntrada;}
    set marca(marca){this._marca = marca;}
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton() { return this.idRaton; }
    toString(){
        return `Ratón: ${this._idRaton}, TipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado() { return this._idTeclado; }
    toString(){
        return `Teclado: ${this._idTeclado}, TipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamano) {
        this._idMonitor = ++ Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }
    get idMonitor() { return this.idMonitor; }
    get marca() { return this._marca;}
    get tamano() { return this._tamano; }

    set marca(marca){ this._marca = marca;}
    set tamano(tamano) { this._tamano = tamano;}

    toString(){
        return `Monitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamano}`;
    }
}

class Computadora {
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get idComputadora() { return this._idComputadora;}
    toString(){
        return `Computadora: ${this._idComputadora}, Nombre: ${this._nombre}\n {${this._monitor} }\n  {${this._teclado}}\n  {${this._raton} } \n`;
    }
}

class Orden {
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++ Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden() { return this._idOrden;}

    agregarComputadora(miComputadora){
        this._computadoras.push(miComputadora);
    }
    mostrarOrden(){
        let miOrden = '';
        for (let computador of this._computadoras){
            miOrden += `\n ${computador}  `;
        }
        console.log(`Orden: ${this._idOrden}\n Computadora: ${miOrden}`);
    }
}


let raton1 = new Raton('USB', 'Logitech');
let raton2 = new Raton('Wireless', 'Benq');
let teclado1 = new Teclado('USB', 'Razer')
let teclado2 = new Teclado('Wireless', 'SteelSeries')
let monitor1 = new Monitor('AOC', 24)
let monitor2 = new Monitor('Samsung', 23)
let computadora1 = new Computadora('HP', monitor1, teclado1, raton1)
let computadora2 = new Computadora('Lenovo', monitor2, teclado2, raton1)
let computadora3 = new Computadora('Lenovo', monitor1, teclado2, raton2)
let orden1 = new Orden()
let orden2 = new Orden()
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden()
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora3);
orden2.mostrarOrden()

// Esto llama automáticamente al método 'to string'
// console.log(`${computadora1}`);
// console.log(`${computadora2}`);
