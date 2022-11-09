// La palabra 'static' se usa para crear metodos exclusivos dentro de un archivo

class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
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

persona1 = new Persona('Juan','Rodriguez');
// console.log(persona1.saludar()); no es posible llamar desde un objeto a un metodo 'static' ligado a una clase

// Para usarlo se debe llamar a la clase contenedora de este método 'static'
Persona.saludar();

// En este caso se esta usando la clase persona para llamar al metodo 'static' saludar2, que pregunta por un atributo de tipo persona, en este caso es persona1
Persona.saludar2(persona1);

