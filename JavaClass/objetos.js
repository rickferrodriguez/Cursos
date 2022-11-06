// creamos la función dentro del objeto, de esta forma si queremos usarlo en otro lado, podemos tener una especie de compuesto
let persona = {
    nombre : 'Juan',
    apellidos : 'Rodriguez',
    email : 'richards@gmail.com',
    edad : 24,
    nombreCompleto : function (){
        return this.nombre + ' '+ this.apellidos; 
    }
}

console.log(persona.nombreCompleto());

// Object definition part 2

// In this example we create at the start an empty object, then we can add some properties, we can reserve some space in memory for everything that we want in this object
let person2 = new Object();
person2.nombre = 'Richard';
person2.lastName = 'Martinez';
person2.email = 'richardMa@gmail.com';
person2.age = 25;

console.log('name of the person 2 is: ' + person2.nombre);

// Access to the properties of an object in Javascript
// For in, recorrer un objeto

for ( propertieName in persona) {
    console.log('the propertie Name is: ' +propertieName);
    console.log('the value of the propertie is: ' + persona[propertieName]);
}

// metodo Get en objetos
// Este lo podemos utilizar para llamar a un objeto compuesto o que pueda ser considerada una función 
// Metodo 'set' en Javascript
// se usa para cambiar los atributos de un objeto

let gymWorkOut = {
    monday : 'chest',
    tuesday : 'quads',
    wednesday : 'back',
    thursday : 'glutes',
    friday : 'arms',
    get upperChanger (){
        if (this.monday === this.monday.toUpperCase())
            return this.monday;
        else
        return this.monday.toUpperCase() + ' Transformed';
    },
    set upperChanger (theChange){
        this.monday = theChange.toUpperCase();
    },
    get specialDays (){
        return 'el día especial es: ' +this.wednesday + ' and ' + this.friday;
    }
}

// en este caso ya solo llamamos a nuestro metodo get y nos simplifica el código porque ya no es considerada una función 
console.log(gymWorkOut.upperChanger);
gymWorkOut.upperChanger = 'arms'; // en este apartado yo llamo al metodo set de upperChanger y después del '=' el comprende que le estoy brindando un parámetro
console.log(gymWorkOut.upperChanger); 
console.log(gymWorkOut.monday); 

// Constructor de Objetos de tipo Persona
// Método constructor in JavaScript

function PersonaGymInfo(pNombre, pApellido, pEmail, pEdad, pIdioma){
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.email = pEmail;
    this.edad = pEdad;
    this.idioma = pIdioma;
}

let padre = new PersonaGymInfo('juan', 'cabrera', 'juancabrera@gmail.com','21','ES');
console.log(padre);

let madre = new PersonaGymInfo('maria','lozano', 'marialozano@gmail.com', '18','EN');
console.log(madre);

//Method inside the constructor


function PersonaGymInfo2(pNombre, pApellido, pEmail, pEdad, pIdioma){ 
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.email = pEmail;
    this.edad = pEdad;
    this.idioma = pIdioma;
    this.nombreCompleto = function ()
    {
        return this.nombre + ' '+ this.apellido;
    };
}

let padre2 = new PersonaGymInfo2('Richard', 'cabrera', 'juancabrera@gmail.com','21','ES')
console.log(padre2.nombreCompleto())

// Other ways to create objects in JavaScript

// let myNewObject = new object();
let myNewObject2 = {};

let myNewString = new String('this is a string');
let myNewString2 = 'this is a shorter string';

let myNewNumber = new Number(2);
let myNewNumber2 = 2;

let myNewBoolean = new Boolean(false);
let myNewBoolean2 = false;

let myNewArray = new Array();
let myNewArray2 = [];

let myNewFunction = new Function();
let myNewFunction2 = function (a , b){return a + b};

let persona3 = {
    nombre : 'Juan',
    apellidos : 'granizo',
    nombreCompleto : function(equipo, plataforma){
        return this.nombre + ' ' + this.apellidos + ' ' + equipo + ' ' + plataforma;
    }
}

let persona4 = {
    nombre : 'Ibai',
    apellidos : 'LLanos'
}

// Using the 'call' method to call xD the persona3.nombreCompleto function, with persona4 data

console.log('CALL METHOD');
console.log(persona3.nombreCompleto.call(persona4 , 'KOI', 'Twitch')); // if we want to call arguments (parametros) podemos hacerlo con una ',' después de llamar a la variable



const animes = [
    "boku no hero",
    "Spy X Family",
    "Chainsaw Man",
    "Mob"
];

// este no me va,no sé porqué
function animeShow (){
    let i = 0;
    let arraylenght = animes.length;
    while (i <= arraylenght){
        let miAnime = animes[i];
        i++;
        if ( miAnime == "Mob"){
            return 'este anime si se encuentra en la lista';
        }
        else 
            return 'este anime no se encuentra en la lista';
    };
}

console.log(animeShow());

// Metodo 'apply' en Javascript

let clase1 = {
    nombre : 'Camilo',
    apellido : 'Flores',
    nombreCompleto : function (titulo , telefono){
        return titulo + ': ' +this.nombre + ' '+ this.apellido + ' ' + telefono;
    }
}

let clase2 = {
    nombre : 'Brandon',
    apellido : 'Jimenez'
}

//
//cuando se utiliza el 'apply' y existe una función con parámetros, se bebe crear un arreglos con estos para poder usar el metodo 'apply'
//
let arreglo = ['ing','22422'];
console.log(clase1.nombreCompleto.apply(clase2, arreglo));
