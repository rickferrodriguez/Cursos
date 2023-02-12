const promise = new Promise((resolve, reject) => {
    resolve('hey!')
})

const cows = 15

const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`)
    } else {
        reject('There is no cows on the farm')
    }
})

countCows.then((result) => {
    console.log(result)
}).catch((error) => {
        console.log(error)
    })

// fetch('https://api.escuelajs.co/api/v1/products')
//     .then(res => res.json())
//     .then(response => {
//         console.log(response[0])
//         console.log(response[0].title)
//         console.log(response[0].category.name)
//     })
//
const album = ['Amor y odio', 'En realidad te amo']
const productor = new Promise ((resolve, reject) => {
    // adentro se encuentra el cantante
    if(album.length > 0){
        // resolve(`La canción está lista y la primera se llama: ${album[0]}`)
        setTimeout(() => {
            resolve(`La canción está lista y la primera canción es: ${album[0]}`)
        }, 2000)
    } else {
        reject ('El album no está listo')
    }
})

productor.then(song => console.log(song))
    .catch((error) => {
        console.log(error)
    }).finally(console.log('Como fan al fin tienes tu respuesta'))
