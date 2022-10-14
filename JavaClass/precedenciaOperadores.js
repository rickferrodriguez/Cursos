let a =3 , b = 4, c = 1 , d = 2;


//al igual que en las matemáticas normales los operadores tienen una prioridad

let z = a * b; 
console.log("el resultado es: " + z );

// las operociones se realizan de izquierda a derecha, pero tambien se toma en cuenta la prioridad del operador

let y = a + b * c;
console.log("el resultado es: " + y); // en este ejercicio a pesar de que el simbolo del '+' se encuentra primero, no es un operador de prioridad

let x = a * c / d;
console.log("el resultado es: " + x)


//OPERADORES DE ASIGNACIÓN
//
//El más común que se ha usado es el '=' al momento de crear una variable.
//
let e = 4;


//Operador de asignación compuesto
e += 3; // e = e + 3 (el resultado sería 7 porque a vale 4)
console.log("el resultado es: " + e);

//Este operador compuesto puede ser utilizado con los demás operadores.
a -= 4; // a = a - 4 (el resultado sería -1 porque a es igual a 3)
console.log("el resultado con el menos: " + a);
