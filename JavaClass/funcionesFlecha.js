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
    console.log("saludos desde mi función flecha")
}
miFuncionFlecha();



