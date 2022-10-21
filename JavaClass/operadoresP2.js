let a = 3 , b = 2, c = "3", d = 33;

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

// Operadores logicos, AND
// Este se utiliza con este simbolo "&&"

let valorMaximo = 10, valorMinimo = 0;

// En este caso para que este valor me regrese un verdadero ambas condiciones en medio del '&&' deben ser verdaderas, en caso de que no sea asi irá por la condición del 'else'
if( d >= valorMinimo && d <= valorMaximo){
    console.log("este valor se encuentra dentro del rango");
}
else {
    console.log("este valor no se encuentra dentro del rango");
}


//Operadores lógicos, OR, se utiliza con el simbolo '||'
//En este caso con que cualquiera de las variables sea verdadera la respuesta será "true"

let vacaciones = false, diaDescanso = false;

// Parece que de entrada el operador inicia con la posibilidad de que las variables sean verdaderas 
if( vacaciones || diaDescanso ) { 
    console.log("El padre puede asistir ");
}
// Dado que pase lo contrario el sistema botara false 
else {
    console.log("El padre no puede asistir")
}

// Operador Ternario

// lo que hace esto operador es guardar dentro de la variable uno de los resuldos sea falso o verdadero
let resultado = ( 3 > 2 ) ? "Verdadero, este es mayor" : "esto es falso, es menor";
console.log(resultado);


let valorPar = 24;
let esPar = (valorPar % 2 == 0) ? "Verdadero, este valor es par" : "Falso, este valor no es par";
console.log(esPar);


// Transformar un numero de String a Number

let miNumero = "20";
// Importante para transformar un String en un Number
let transformado = Number(miNumero);

let edad = transformado >= 18  ? "Esta persona puede botar ( Mayor de Edad)" : "Esta persona no puede botar ( Menor de Edad)";
console.log(typeof transformado)
console.log(edad);

// Importante, tambien se puede cambiar el tipo en medio de una operacion
if ( Number(miNumero) === 20 ) {
    console.log("Esta persona puede botar ( Mayor de Edad)");
}
else {
    console.log("Esta persona no puede botar ( Menor de Edad)");
}

// Para verificar que efectivamente un valor es un numero se puede usar la funcion 'isNaN' 

let numeroString = "24x";

if ( isNaN(numeroString)){
    console.log("este no es un numero por completo")
}
else{
    let edad = transformado >= 18  ? "Esta persona puede botar ( Mayor de Edad)" : "Esta persona no puede botar ( Menor de Edad)";
    console.log(edad);
}

// Precedencia de operadores

let h = 5 , i = 10
let q = ++h + i--
console.log(h)
console.log(i)
console.log(q)

let resuldo = 4 + 5 * 6 / 3; // 4+((5*6)/3)
console.log(resuldo);

resuldo = (4 + 5) * 6 / 3; // ((4 + 5)*6)/3
console.log(resuldo);


//al igual que en las matemáticas normales los operadores tienen una prioridad

 z = a * b; 
console.log("el resultado es: " + z );

// las operociones se realizan de izquierda a derecha, pero tambien se toma en cuenta la prioridad del operador

y = a + b * c;
console.log("el resultado es: " + y); // en este ejercicio a pesar de que el simbolo del '+' se encuentra primero, no es un operador de prioridad

 x = a * c / d;
console.log("el resultado es: " + x)


//OPERADORES DE ASIGNACIÓN
//
//El más común que se ha usado es el '=' al momento de crear una variable.
//
 e = 4;


//Operador de asignación compuesto
e += 3; // e = e + 3 (el resultado sería 7 porque a vale 4)
console.log("el resultado es: " + e);

//Este operador compuesto puede ser utilizado con los demás operadores.
a -= 4; // a = a - 4 (el resultado sería -1 porque a es igual a 3)
console.log("el resultado con el menos: " + a);


 a =3 , b = 4, c = 1 , d = 2;


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
a -= 4; // 
console.log("el resultado con el menos: " + a);
