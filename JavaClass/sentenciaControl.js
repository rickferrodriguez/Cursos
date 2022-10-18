// Looks like the condition 'if' starts with the relult 'true' by default
let condition = true;

if (condition){
    console.log("Condición verdadera");
}
else{
    console.log("Condición falsa");
}


let resultado = condition ? console.log("Condición verdadera"): console.log("Condición Falsa");

// Exercise if/else multiple conditions
let a = 2;

if (a == 1){
    console.log("Number one");
}
else if (a == 2){
    console.log("Number two");
}
else if (a == 3){
    console.log("Number three");
}
else if (a == 4){
    console.log("Number three");
}
else{
    console.log("No se encuentra dentro del rango de numeros");
}


// Exercise month calculator
let mes = 12;

if (mes >= 1 && mes <=3){
    console.log("You are on spring (primavera)")
}
else if ( mes >= 4 && mes <=6){
    console.log("You are on summer (verano)")
}
else if ( mes >= 7 && mes <=9){
    console.log("You are on autumn (otoño)")
}
else if ( mes >= 10 && mes <=12){
    console.log("You are on winter (invierno)")
}
else{
    console.log("This number isn't a month of the year")
}

// Best solution for this exercise
let temporada;

if (mes >= 1 && mes <=3){
    temporada = "spring";
}
else if ( mes >= 4 && mes <=6){
    temporada =  "summer";
}
else if ( mes >= 7 && mes <=9){
    temporada =  "autumn";
}
else if ( mes >= 10 && mes <=12){
    temporada =  "winter";
}
else{
    temporada = "Your number isn't a month of the year";
}
console.log("Your are on: " + temporada);
    
// Control sentence Switch on JavaScript
// In this case we are going to call the variable 'a' that we created before

let numeroTexto = 'Valor desconocido';

switch ( a ){
    case 1:
        numeroTexto = 'Number one';
        break;
    case 2:
        numeroTexto = 'Number two';
        break;
    case 3:
        numeroTexto = 'Number three';
        break
    case 4:
        numeroTexto = 'Number four';
        break
    default:
        numeroTexto = 'Caso no encontrado';
}
console.log(numeroTexto);

// Exercise, season calculator with switch on JavaScript

let month = 8, messageSeasons ="You're on: ";
let season ='';
console.log( alterSeasons);
switch ( month ){
    case 1 : case 2: case 3:
        season = 'spring';
        break;
    case 4 : case 5: case 6:
        season = 'summer';
        break;
    case 7 : case 8: case 9:
        season = 'autumn';
        break;
    case 10 : case 11: case 12:
        season = 'winter';
        break;
    default:
        messageSeasons = 'incorrect value';
        break;
}
console.log(messageSeasons + season);



