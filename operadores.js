//suma
let a = 2, b =3;
let z = a + b;
console.log("resultado resultado de la suma "+ z);

//resta
let c = 12, d = 6;
let y = c - d;
console.log("resultado de la resta " + y);

//multiplicación
let e = 9, f= 5;
let x = e * f;
console.log("resultado de la multiplicación " + x);

//división
let g = 90 , h = 8;
let w = g / h;
console.log("resultado de la división " + w);

//residuo de la división
z = g % h; // importante: No puedes usar 'let' cuando esta variable ya ha sido creada.
console.log("resultado de la operación módulo (residuo): " + z)

let i = 2, j = 5;
let v = i ** j;
// console.log("resultado del exponente: " + v);

//
//operadores de incremento 
//
//operadores de Pre-incremento (el operador ++ antes de la variable)
v = ++i; //el Pre-incremento sirve para sumar en 1 la misma variable
console.log("el resultado del pre-incremento es decir que se suma en 1 su valor actual es: " +v);

//Post-incremento (el operador ++ después de la variable)
let u = 0;


console.log("el resultado del Post-incremento, es decir, este suma su valor en 1 pero no lo hace en ese instante, si no que lo deja pendiente para cuando esta variable se la vuelva a utilizar"+ u);

//operadores de Pre-decremento, funciona igual que en el ejercicio anterior pero restando en 1 su valor, exactamente en ese momento
let k = 10;
let t =0;
t = --k;
console.log("el resultado del Pre-decremento es: "+ t);

//operadores de Post-decremento, es decir, este resta en uno su valor pero para cuando la variable sea reutilizada en otra ocación, es como si la dejara guardando.
let l = 20;
let s =0;
s = l--;
console.log("esta es la variable que guarda el decremento no aplicado "+ l);
console.log("el resultado del Post-decremento es: "+ s);
