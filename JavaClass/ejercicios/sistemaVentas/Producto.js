class Producto{
    static contadorProductos = 0;
    constructor( nombre, precio){
        this._idProducto = ++ Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){ return this._idProducto; }
    get nombre(){ return this._nombre;}
    get precio(){ return this._precio;}

    set nombre(nombre){this._nombre = nombre;}
    set precio(precio){this._precio = precio;}
    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}

class Orden {
    static contadorOrdenes = 0;
    // static contadorProductosAgregados = 0;
    static get MAX_PRODUCTOS(){
        return 3; 
    }
    constructor(){
        this._idOrden = ++ Orden.contadorOrdenes;
        this._productos = [];
        // this._contadorProductosAgregados = ++ Orden.contadorProductosAgregados;
        this._contadorProductosAgregados = 0;
    }
    get idOrden() { return this._idOrden; }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }
        else{
             console.log("se ha exedido el máximo de productos");
        }
    }

    calculaTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '\n' + producto.toString() + ' ';
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calculaTotal()}, Productos: ${productosOrden}`);
    } 
}


let producto1 = new Producto('Papas', 2000);
let producto2 = new Producto('Zanahorias', 1000);
let producto3 = new Producto('Tomates', 1500);
let producto4 = new Producto('Aracachas', 2500);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();
