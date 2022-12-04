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
//
// Tipos de Datos
//
var nombre = "Carlos"; /* estan van entre doble comilla */
console.log(nombre);

// Tipo de dato numérico
var numero = 1000;
console.log(numero);

// Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Bolaños",
    telefono : "333323"
}
// importante entender que todos estos datos se encuetran almacenados dentro de un objeto
console.log(objeto);

// Saber el tipo de elemento que llamamos para imprimir 
// Esto lo podemos hacer con la palabra "typeof"
console.log(typeof nombre);


// Tipos de datos: Boolean (true, false)
var booleano = false;
console.log(typeof booleano);

// Tipos de datos function: estos permiten ejecutar múltiples lineas de código y son reutilizables.
function miFuncion(){}
console.log(miFuncion);

// Tipos de datos : Simbolo, se utiliza para crear un valor único de una variable
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);

// Tipo clase tambien va a ser una function, la diferencia es que esta en su interior si inicializa con un constructor y a su vez este tiene variables
class Persona{
    constructor(nombre, apellido)
    {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
 console.log(Persona);

// Tipo undefined, este viene por defecto cuando no se le define un valor a una variable
var X;
console.log(X); /* al imprimirlo el sistema me lo identifica como undefined */
// tambien podemos definir el valor de undefined de la siguinete manera
X = undefined;
console.log(X);
//null = ausencia de valor
var nulo = null;
console.log(nulo); /* este tipo de valor es un objeto que no contiene nada en su interior */

var campeones = ['vayne','olaf', 'shivanna' ]; /* los arreglos son de tipo object */
console.log(campeones);
