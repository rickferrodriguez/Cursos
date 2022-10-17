/*
    6am-11am - Buenos Días
12pm-18pm - Buenos Tardes
19pm-24pm - Buenos Noches
0am-6am - Durmiendo
*/
let hour = "7am";
// Aquí lo que hago es remplazar cualquier texto que ingrese el usuario para que solo se usen los numeros, pero si tomará el valor en caso de agregar un signo negativo
let tranformado = hour.replace(/[a-z]/g, "");
let mensaje;

if (tranformado >= 6 && tranformado<= 11){
    mensaje = "Buenos Días"
}
else if (tranformado >= 12 && tranformado<= 18){
    mensaje = "Buenas Tardes";
}
else if (tranformado >= 19 && tranformado<= 24){
    mensaje = "Buenas Noches";
}
else if (tranformado >= 0 && tranformado < 6){
    mensaje = "Durmiendo";
}
else 
    mensaje = "Valor incorrecto";
console.log(mensaje);
