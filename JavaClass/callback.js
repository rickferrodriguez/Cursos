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
