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
