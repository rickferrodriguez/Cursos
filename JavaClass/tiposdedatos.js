// existen varios tipos de datos, el primero es de tipo String y se realiza de la siguiente manera
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
