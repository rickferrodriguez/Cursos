let miPromesa =new Promise((resolve, reject) =>{
    let laPromesa = true;
    if (laPromesa == true)
        resolve("Resuelto completado");
    else
        reject("Se produjo un error");
});

// el 'then' sirve para llamar a la promesa creada, lo que se encuentra dentro de los parentecis es como si fueran los parametros de la promesa
// miPromesa.then(valor => console.log(valor),error => console.log(error));

// En este caso no se utiliza el caso de rechazo como un parametro de la promesa, si no como un aspecto por fuera de ella pero el resultado es el mismo
// miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));

let miEjercicio = new Promise((resolve, error) =>{
    let elEjercicio = 'Espalda';
    if (elEjercicio == 'Espalda')
        resolve("El día de hoy es miercoles");
    else 
        error("Este día no está registrado");
})

// miEjercicio.then(valor => console.log(valor)).catch(error => console.log(error));

//setTimeOut usando promesas, esto sirve para agregar un delay al momento de ejecutar una función

let promesaTime = new Promise((resolve) =>{
    setTimeout(()=>resolve('saludo con promesa y timeout de tres segúndos de delay'), 3000);
});

promesaTime.then(valor => console.log(valor));
