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
