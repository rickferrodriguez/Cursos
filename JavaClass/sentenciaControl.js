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
let a = 4;

if (a == 1){
    console.log("Number one");
}
else if (a == 2){
    console.log("Number two");
}
else if (a == 3){
    console.log("Number three");
}
else{
    console.log("Number four");
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
    



