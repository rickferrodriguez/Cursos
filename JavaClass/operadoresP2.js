let a = 3 , b = 2, c = "3";

let comparison = a == b; // este revisa el valor sin importar el tipo
console.log(comparison); //internamente lo que bota es un false, es decir que estan comparaciones son de tipo boolean

//important: existe un comparador mas estricto, capas de revisar el valor incluso por su tipo y se realiza con 3 iguales "==="
let estricto = a === c; // apesar de que el valor sea 3 el tipo de 'c' es un string
console.log(estricto);

let noEstricto = a == c; 
console.log(noEstricto); // En este caso da true porque no es un comparador estricto y convierte el numero 3 que se encuentra como string a number

//operadores distinto A en Javascript
//La estructura es la misma solo que en este caso se coloca es signo de exclamación '!'

let distinto = a != b;
console.log("esta comparación de distinto es: " + distinto);


let disEstricto = a !== c;
console.log("Este distinto estricto es: " + disEstricto); // Al igual que en el ejercicio anterior Javascript tiene un oporador de distinto estricto, es decir, que compara si el tipo de valor es el mismo

// Operadores relacionales

let relacion = a < b;
console.log("Esta relacion de menor que es: " + relacion); // tambien se puede hacer con el mayor y el igual

let relacionMenIgu = a <= b; // Menor o igual
console.log("Esta relacion menor o igual es: " + relacionMenIgu); // tambien se puede con el mayor igual

