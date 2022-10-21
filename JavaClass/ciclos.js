// Ciclo while 

let contador = 0;

while (contador < 3){
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo while");

// Ciclo Do While

let counter = 4;
// Ejecuta todo lo que se encuentra dentro del Do sin importar la condicion del ciclo, pero solo una vez.
do {
    console.log(counter);
    counter++; //En este caso el contador si se suma en uno, pero no la imprime porque es un postincremento
}while (counter < 3);
console.log("la variable de postincremento tiene el valor de: "+ counter)
console.log("Fin del Do While");

// Ciclo 'for'

for (let i = 0; i < 3; i++){
    console.log(i);
}
console.log("Fin del ciclo for");


// Palabra 'break' en Javascript

for (let contador = 0; contador <= 10; contador++){
    if (contador % 2 == 0){
        console.log(contador);
        break; // este break sirve para que me envie el primer valor par que encuentre y tambien termina el ciclo
    }
}
console.log("Fin del ciclo for con un break");

// Palabra 'continue' en Javascript

for (let i = 0; i <= 10; i++){
    if ( i % 2 !== 0 ) {
        continue; // Ir a la siguiente iteración
    }
    else{
    console.log(i);
    }
}
console.log("Fin del ciclo for con 'continue'");



while (contador <= 5){
    contador++;
    if( contador % 2 == 0 ) {
        continue; // el 'continue' tambien funciona con el while
    }
    else {
        console.log(contador);
    }
}


