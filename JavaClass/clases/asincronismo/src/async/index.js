const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('mensaje Async!'), 2000)
            : reject(new Error('Error!'))
    })
}

const anotherFunct = async () => {
    const something = await fnAsync()
    console.log(something)
    console.log('Hola desde another')
}

console.log('Before')
anotherFunct()
console.log('After')
