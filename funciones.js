// Declaración de la función
function myFunction(a,b){
    console.log("La suma es: "+(a+b));
}

// How to call the function, el llamamiento es global (en este documento) debido al hoisting
myFunction(2,3);

//Return

function sumando (a,b){
    return a + b;
}

let resultado = sumando(2,3);
console.log(resultado);

// Funciones de tipo Expresion
// Declaración de función de tipo Expresión
let x = function (a,b){return a + b};

resultado = x(4,2);
console.log(resultado);

const seasons = ['spring', 'summer', 'autumn','winter'];

function seasonCalculator (mes){
    if ( mes == 1 || mes == 2 || mes == 3){
        return seasons[0];
    }
    else if ( mes == 4 || mes == 5 || mes == 6){
        return seasons[1];
    }
    else if ( mes == 7 || mes == 8 || mes == 9){
        return seasons[2];
    }
    else if ( mes == 10 || mes == 11 || mes == 12){
        return seasons[3];
    }
    else
        return console.log('error');
    
}

resultado = console.log("you are on the season: " + seasonCalculator(2));


// Funciones de tipo Self Invoking
// Son aquellas que se llaman a si mismas y se ejecutan automaticamente, pero no la podemos reutilizar
(function () {
    console.log("Esta función se está ejecutando");
})()


// Funciones de tipo flecha

let sumar = function(a , b){return a + b}; // Las funciones de tipo Expresión son parecidas a las de tipo flecha

// Ejemplo tipo flecha

const sumaTipoFlecha = (a,b) => a + b;
resultado = sumaTipoFlecha(3,5);

console.log(resultado);

let resultadoArgument = sumarTodo(2, 4, 6, 10, 9);
console.log("el resultado del argumento es: " +resultadoArgument);

function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}

// Paso por referencia en funciones

const persona = {
    nombre: 'Juan',
    apellido: 'Martinez'
}

function cambiarValorObjeto (p1){
    p1.nombre = 'Richard';
    p1.apellido = 'Rodriguez';
}

// En este punto se hace el paso por referencia
cambiarValorObjeto (persona);
console.log(persona);

const gymWeek = {
    monday: 'chest',
    tuesday: 'quads',
    wednesday: 'back',
    thursday:'glutes',
    friday:'arms'
}

function gymTrainerAdvisor (d1, daytrain){
        if (d1.friday == daytrain){
            d1.friday = 'It is friday you have to do arms';
        }
        else
            console.log('Estos dias aún no los programo');
}
gymTrainerAdvisor ( gymWeek, 'arms');
console.log(gymWeek);

    
