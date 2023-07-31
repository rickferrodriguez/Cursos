function sumar(num1, num2, done) {
    const suma = num1 + num2
    return done(suma)
}

function terminado(resultado) {
    console.log(`El resultado es ${resultado}`)
}

sumar(2,3, terminado)

function duplicarNumeros(arr, done) {
    const duplicado = arr.map(a => a*2)
    return done(duplicado)
}

function imprimirArrayDuplicado(res) {
    console.log(`Este es el duplicado: ${res}`)
}

duplicarNumeros([1, 2, 3, 4], imprimirArrayDuplicado)

function ordenarPorPropiedad(arr,prop, done) {
    // const variantes = {
    //     nombre: () => {
    //         arr.sort((a, b) => {
    //             const nameA = a.nombre.toUpperCase(); // ignore upper and lowercase
    //             const nameB = b.nombre.toUpperCase(); // ignore upper and lowercase
    //             if (nameA < nameB) {
    //                 return -1;
    //             }
    //             if (nameA > nameB) {
    //                 return 1;
    //             }
    //
    //             // names must be equal
    //             return 0;
    //         })
    //     },
    //     edad: () => {
    //         arr.sort((a,b) => a.edad -b.edad)
    //     }
    // }
    //
    let ordenado = []
    if(prop === 'nombre') {
        ordenado = arr.sort((a, b) => {
            const nameA = a[prop].toUpperCase(); // ignore upper and lowercase
            const nameB = b[prop].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        })
        return done(ordenado)
    } else {
        ordenado =arr.sort((a,b) => a[prop] -b[prop])
        return done(ordenado)
    }

}

function imprimirPersonasOrdenadas(res) {
    console.log(res)
}

ordenarPorPropiedad([{nombre: "Pedro", edad: 32}, {nombre: "María", edad: 25}, {nombre: "Juan", edad: 40}], "edad", imprimirPersonasOrdenadas)

const objectFunction = {
    nombre: () => {
        let num1 = 2
        let num2 = 2
        console.log(num1 + num2)
        return num1 + num2
    }
}
let elNombre = 'nombre'
objectFunction[elNombre]()

function ordenarPromesas(arr, prop) {
    return new Promise((resolve, reject) => {
    let ordenado = []
    if(prop === 'nombre') {
        ordenado = arr.sort((a, b) => {
            const nameA = a[prop].toUpperCase(); // ignore upper and lowercase
            const nameB = b[prop].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        })
        resolve( ordenado)
    } else if(prop === 'edad') {
        ordenado =arr.sort((a,b) => a[prop] -b[prop])
        resolve( ordenado)
    } else {
            reject('No existe esta propiedad')
        }

    })
}

function imprimirConPromesas(res) {
    console.log(res)
}

ordenarPromesas([{nombre: "Pedro", edad: 32}, {nombre: "María", edad: 25}, {nombre: "Juan", edad: 40}], "edad")
    // .then(res => res.json())
    .then(data => imprimirConPromesas(data))
    .catch((error) => console.error(error))

async function ordenarAsync(arr, prop) {
    let ordenado = []
    if(prop === 'nombre') {
        ordenado = arr.sort((a, b) => {
            const nameA = a[prop].toUpperCase(); // ignore upper and lowercase
            const nameB = b[prop].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        })
        return ordenado
    } else if(prop === 'edad') {
        ordenado =arr.sort((a,b) => a[prop] -b[prop])
        return ordenado
    } else {
        'No existe esta propiedad'
    }
}

function imprimirAsync(res) {
    console.log(res)
}

(async () => {
    try {
        const resultado = await ordenarAsync([{nombre: "Pedro", edad: 32}, {nombre: "María", edad: 25}, {nombre: "Juan", edad: 40}], "edad")
        imprimirAsync(resultado)
    } catch (error) {
        console.error(error)
    }
})()
