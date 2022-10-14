let a = 3 , b = 2, c = "3";

let comparison = a == b; // este revisa el valor sin importar el tipo
console.log(comparison); //internamente lo que bota es un false, es decir que estan comparaciones son de tipo boolean

//important: existe un comparador mas estricto, capas de revisar el valor incluso por su tipo y se realiza con 3 iguales "==="
let estricto = a === c; // apesar de que el valor sea 3 el tipo de 'c' es un string
console.log(estricto);

let noEstricto = a == c; 
console.log(noEstricto); // En este caso da true porque no es un comparador estricto y convierte el numero 3 que se encuentra como string a number
