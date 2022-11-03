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
