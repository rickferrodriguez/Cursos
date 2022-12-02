class Comida{
    static contadorComidas =0;
    constructor(nombre, tipo, calorias){
        this._idComida = ++Comida.contadorComidas;
        this._nombre = nombre;
        this._tipo = tipo;
        this._calorias = calorias;
    }
    get idComida(){return this._idComida;}
    get nombre(){return this._nombre;}
    get tipo(){return this._tipo;}
    get calorias(){return this._calorias;}

    set nombre(nombre){ this._nombre = nombre;}
    set tipo(tipo){ this._tipo = tipo;}
    set calorias(calorias){ this._calorias = calorias;}

    toString(){
        return `No: ${this._idComida}, Comida: ${this._nombre}, Tipo: ${this._tipo}, Calorias: ${this._calorias}`;
    }
}

class Platos{
    static contadorPlatos = 0;
    static get MAX_COMIDAS(){
        return 3;
    }
    constructor(){
        this._idPlatos = ++ Platos.contadorPlatos;
        // con este array se guardaran todos los objetos de tipo Comida
        this._comidas = [];
    }
    get idPlatos() { return this._idPlatos; }

    agregarPlatos(micomida){
        if(this._comidas.length < Platos.MAX_COMIDAS){
            // aqui se agregan las comidas dentro del array de comida
            this._comidas.push(micomida);
        }
        else 
            console.log("se ha exedido el máximo de comidas");
    }
    calcularTotal(){
        let totalCalorias = 0;
        for(let comida of this._comidas){
            totalCalorias += comida.calorias;
        }
        return totalCalorias;
    }
    mostrarCalorias(){
        let comidaTotal = '';
        for(let comida of this._comidas){
            comidaTotal += '\n{' + comida.toString() + '} ';
        }
        console.log(`Plato: ${this._idPlatos} Total: ${this.calcularTotal()}, Contenido: ${comidaTotal}`);
    }
    
}

let comida1 = new Comida('Arroz','Granos',160);
let comida2 = new Comida('Carne','Proteinas',240);
let comida3 = new Comida('Banana','Frutas',140);
// console.log(comida1.toString())
let plato1 = new Platos();
plato1.agregarPlatos(comida1);
plato1.agregarPlatos(comida2);
plato1.agregarPlatos(comida3);
plato1.agregarPlatos(comida3);
plato1.mostrarCalorias()
