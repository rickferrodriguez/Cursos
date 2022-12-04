// Este puede ser utilizado para que el sistema nos muestre algun error cuando ne hemos deifinido una variable y se activa de la siguiente manera
"use strict";

x = 10;
// el sistem va a mostrar un error porque la variable no ha sido definida
console.log(x);

// esto es la forma correcta
let y = 10;

miFuncion();

function miFuncion() {
    y = 22; // aqui el sistema bota que esta función no ha sido declarada
}

