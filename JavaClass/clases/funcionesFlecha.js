// Función clasica
function miFuncion(){
    console.log("saludos desde mi función")
}
//Para usarla solo la llamamos
miFuncion()

// Función flecha, lo recomendable es no asingnar un nombre a este tipo de funciones y que por lo tanto estas deben ser anónimas

let miFuncionFlecha = ()=> {
    console.log("saludos desde mi función flecha")
}
miFuncionFlecha();

// es más recomendable usar el termino 'const' debido a que las funciones no van a cambiar en ningún momento
const miFuncionFlechaCons = ()=> {
    console.log("saludos desde mi función flecha con 'const'")
}
miFuncionFlechaCons();

// Más funciones flecha

// Si esta función es de una sola linea no hace falta agregar las llaves
const flecha1 = () => console.log("saludos desde flecha 1")
flecha1()

// Dado el caso de que se desee mandar a imprimir un mensaje
const flechaMsj = () => {
    return 'Saludos desde flecha msj';
}

console.log(flechaMsj())

// Msj simplificado
const flechaMsjSim = () =>  'Saludos desde msj simplificado';
console.log(flechaMsjSim())

// Tipo flecha con un objeto
const regresaObjeto = () => ({nombre: 'Juan', apellitos:'Lara'});
console.log(regresaObjeto() )

// tipo flecha con parametro
const conParametro = (mensaje) => console.log(mensaje);
conParametro('funcion de tipo flecha con parametro')

// si solo es un parametro se pueden omitir los paréntecis
const conParaSimple = mensaje => console.log(mensaje);
conParaSimple('Con parámetro simple');

// flecha con varias variables
const conVariosPara = (val1, val2) => console.log(val1 + val2);
conVariosPara(2, 3)
