// La palabra 'static' se usa para crear metodos exclusivos dentro de un archivo

class Persona {
    // atributos estáticos
    static contadorPersonas = 0; // atributo de la clase

    email = 'default value email'; // atributo  de nuestros objetos

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        // en este ejercicio se va a acceder a el atributo 'static' por medio nuevamente de la clase, ya que no podemos usar 'this'
        Persona.contadorPersonas++;
        console.log('Se incrementa el contador de persona ' + Persona.contadorPersonas);
    }
    get nombre(){return this._nombre;}
    set nombre(nombre){ this._nombre = nombre;}
    get apellido(){return this._apellido;}
    set apellido(apellido){ this._apellido = apellido;}

    nombreCompleto (){
        this._nombre + ' ' + this._apellido;
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

let persona1 = new Persona('Juan','Rodriguez');
// console.log(persona1.saludar()); no es posible llamar desde un objeto a un metodo 'static' ligado a una clase

// Para usarlo se debe llamar a la clase contenedora de este método 'static'
Persona.saludar();

// En este caso se esta usando la clase persona para llamar al metodo 'static' saludar2, que pregunta por un atributo de tipo persona, en este caso es persona1
Persona.saludar2(persona1);

// La forma correcta de llamar a un objeto estático es llamando a la clase
console.log(Persona.contadorPersonas)

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

console.log('esto es desde el hijo: ' + PersonaHija.contadorPersonas);

console.log(persona1.email)
