const suma = (a,b) => {
    return a + b
}

const calc = (a,b, callback) => {
    return callback(a,b)
}

console.log(calc(2,2, suma))

// setTimeout(() => {
//     console.log('Hola Javascript')
// }, 2000);

const saludo = (name) => {
    console.log(`Hola ${name}`)
}

// setTimeout(() => {
//     saludo('richard')
// }, 3000);

const modify = (arr, callback) => {
    // hacemos algo
    arr.push('Tatiana')

    // después de hacer algo
    callback(arr)
}
const lista = ['richard', 'sofia', 'magda']

modify(lista, function (array) {
    console.log(`He modificado el array y ahora tiene ${array.length}`)
})

const ultCallback = (num1, num2) => {
    console.log(num1 + num2)
    return num1 + num2
}

const callback = (a,b,callback) => {
    return callback(a,b)
}

callback(2,3,ultCallback)




