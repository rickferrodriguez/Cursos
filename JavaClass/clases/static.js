// La palabra 'static' se usa para crear metodos exclusivos dentro de un archivo

class Persona {
    // atributos estáticos
    static contadorPersonas = 0; // atributo de la clase

    // Constantes estáticas
    static get MAX_OBJ(){
        return 3; // en este caso se le indica la cantidad maxima de objetos de tipo persona que puede tener
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            // en este ejercicio se va a acceder a el atributo 'static' por medio nuevamente de la clase, ya que no podemos usar 'this'
            this._idPersona = Persona.contadorPersonas++; // lo que hará es que cada vez que se crea un objeto de tipo persona se aumentará en 1 el contador y lo asignara como un ID de cada objeto creado, por lo que todos estos tendrán un valor único
            // console.log('Se incrementa el contador de persona ' + Persona.contadorPersonas);
        }
        else{
            return "se han superado el máximo de objetos permitidos"
        }
    }
    get nombre(){return this._nombre;}
    set nombre(nombre){ this._nombre = nombre;}
    get apellido(){return this._apellido;}
    set apellido(apellido){ this._apellido = apellido;}

    nombreCompleto (){
        return this._idPersona + ' ' +this._nombre + ' ' + this._apellido;
    }
    //static, metodo exclusivo
    static saludar(){
        console.log("saludos desde el método 'static'");
    }
    // lo que si se puede hacer es crear un 'static' que tenga un parametro de la clase, y lo podemos utilizar desde fuera
    static saludar2(persona){
        console.log(persona.nombre);
    }
}


class PersonaHija extends Persona{
    constructor(nombre, apellido, ocupacion){
        super(nombre, apellido);
        this._ocupacion = ocupacion;
    }

    get ocupacion(){return this._ocupacion;}
    set ocupacion(ocupacion){ this._ocupacion = ocupacion;}

    combinacion(){
        return super.nombreCompleto() + ' ' + this._ocupacion;
    }
}

let persona1 = new Persona('Juan','Rodriguez');
let persona2 = new Persona('Sara','Rosero');
let persona3 = new Persona('Sofia','Rodriguez');
let persona4 = new Persona('Sofia','Rodriguez');
console.log(persona1.nombreCompleto())
// console.log(persona1.saludar()); no es posible llamar desde un objeto a un metodo 'static' ligado a una clase

// Para usarlo se debe llamar a la clase contenedora de este método 'static'
Persona.saludar();

// En este caso se esta usando la clase persona para llamar al metodo 'static' saludar2, que pregunta por un atributo de tipo persona, en este caso es persona1
Persona.saludar2(persona1);

// La forma correcta de llamar a un objeto estático es llamando a la clase
console.log(Persona.contadorPersonas)



let empleado1 =new PersonaHija('Richard' + 'Rodriguez' + 'ingeniero');
console.log(empleado1.combinacion());
console.log(empleado1.nombreCompleto())

// Ya que este es un metodo get solo se podrá traer la información que contiene y no podra ser modificada
console.log(Persona.MAX_OBJ); 

console.log('esto es desde el hijo: ' + PersonaHija.contadorPersonas);
