const suma = (a,b) => {
    return a + b
}

const calc = (a,b, callback) => {
    return callback(a,b)
}

console.log(calc(2,2, suma))

setTimeout(() => {
    console.log('Hola Javascript')
}, 2000);


