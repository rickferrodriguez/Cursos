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

async function loadJson(url) {
    let response = await fetch(url)

    if(response.status === 200) {
        let json = await response.json()
        return json
    } else {
        throw new Error(response.status)
    }

}

function loadJson2 (url) {
    return new Promise((resolve, reject) => {
        let fetchado = fetch(url)
        if(fetchado.status === 200){
            resolve(fetchado.json())
        }

        reject(new Error('Error!'))
    })
}
