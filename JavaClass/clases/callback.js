const funcion1 = () => 'función 1';

function funcion2() {
    console.log(funcion1());
}
funcion2()

// Función de tipo callback
const imprimir = (mensaje) => {console.log(mensaje)}

function sumar (op1, op2, funcionCallback){
    let res = op1 + op2;
    // aquí internamente se le indica que el parametro que llega será de tipo función.
    funcionCallback(`Resultado: ${res}`);
}

// al momento de utilizar nuestra función,con solo nombrarla el sistema ya comprende que estamos llamando a otra función
sumar(4,2,imprimir)

// Función 'set timeout' o llamadas asíncronas

function miFuncionCallback(){
    console.log('Pero mañana te toca pierna')
}

// setTimeout(miFuncionCallback, 3000 ); // después de tres segundos

const ejercicio = (elEjercicio) => {console.log(elEjercicio)}

function gimnasio (dia, funcionCallback){
    if(dia == 'lunes'){
        funcionCallback(`El día de hoy ${dia} te toca: Pecho`);
        setTimeout(miFuncionCallback, 3000); 
    }
    else 
        return console.log('Este día no se encuentra registrado')
}

gimnasio('martes',ejercicio)

// setInterval en Javascript

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

setInterval(reloj, 1000); // Cada un segundo se va a imprimir la nueva hora actual
