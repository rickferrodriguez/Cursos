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
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
    }
}

let producto1 = new Producto('Papas', '2000');
console.log(producto1.toString());
let producto2 = new Producto('Zanahorias', '1000');
console.log(producto2.toString());
let producto3 = new Producto('Tomates', '1500');
console.log(producto3.toString());
let producto4 = new Producto('Aracachas', '2500');
console.log(producto4.toString());
