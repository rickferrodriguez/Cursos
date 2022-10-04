var nombre = 'Richard';
var apellido = 'Rodriguez';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nummasnombre = nombre + (2 + 4);
console.log(nummasnombre)

// Declaracion de variables
// comunmente se usa la palabra 'var' pero actualmente ya no es recomendable, es por ello que ahora se usa 'let'
// IMPORTANTE: Destacar que no hace falta colocar una palabra reservada para crear una variable con el nombre ya es suficiente
nombre = "Juan" /* las literales son los valores que se le colocan a las variables */
// cabe recalcar que esto no es una buena practica

// 'let' es una palabra difinida que sirve papa crear variables.
let nombre2 = "Roberto";
// IMPORTANTE: se pueden declarar variables y despues agregar el valor
let inicial;
inicial = "Juan";
console.log(inicial);

const apellidoCons = "Perez";
// apellidoCons = "real"; en este caso el las constantes no pueden ser cambiadas nunca, si se dejara este codigo el sistema will show an error.

// Good practices for variables on JavaScript
// Se puede crear multiples variables en la misma linea. eg.
let x, y;
x = 20 , y = 10; // tambien se pueden asignar en la misma linea de la siguiente forma.
let resultado = x + y; 
console.log(resultado);

