class Orden extends Producto{
    static contadorOrdenes = 0;
    static contadorProductosAgregados = 0;
    static get MAX_PRODUCTOS(){
        return 5; 
    }
    constructor(){
        this._idOrden = ++ Orden.contadorOrdenes;
        const productos = [super.toString()];
        this._contadorProductosAgregados = ++ Orden.contadorProductosAgregados;
    }
}
