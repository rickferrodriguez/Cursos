// al usar este modo, un error común es que el sistema no permite utilizar variables que na hayan sido definidas
'use strict';

try {
    x = 0;
}
// en este caso el error que estamos capturando es que la variable 'x' ne ha sido definida
catch (e) {
    console.log(e);
}
finally{
    console.log('terminamos con la revisión de errores')
}
// el método 'finally' se ejecuta siempre, sin importar si el error se presenta o no, pero este es opcional

// Cuando ocurre un error que no es tratado en el sistema el código deja de ejecutarse, pero por ejemplo al usar catch podemos seguir ejecutando los metodos incluso cuando se presenta un error

console.log('continuamos...')

