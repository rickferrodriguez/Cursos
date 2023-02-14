const promise = new Promise((resolve) => {
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

// El finally pasa primero
productor.then(song => console.log(song))
    .catch((error) => {
        console.log(error)
    }).finally(console.log('Como fan al fin tienes tu respuesta'))

// Ejemplo: loadScript

const loadScript = (direccion) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = direccion

        script.onload = () => resolve(script)
        script.onerror = () => reject(new Error('Error cargando el script'))

        document.head.append(script)
    })
}

const miScript = loadScript('https//bla')

miScript.then(
    script => console.log(`${script.src} está cargado`),
    error => console.log(error.message)
)

// Ejemplo: Demora una promesa
//

const delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

delay(3000).then(
    () => console.log('se ejecuta después de 3 segundos')
)

const operation = (num1, num2) => {
    const result = num1 + num2
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result)
        }, 500);
    })
}

operation(5,3).then(total => console.log(total))

// function showCircle(cx, cy, radius) {
//     let div = document.createElement('div');
//     div.style.width = 0;
//     div.style.height = 0;
//     div.style.left = cx + 'px';
//     div.style.top = cy + 'px';
//     div.className = 'circle';
//     document.body.append(div);
//
//     setTimeout(() => {
//       div.style.width = radius * 2 + 'px';
//       div.style.height = radius * 2 + 'px';
//     }, 0);
//   }

const showCircle = (cx, cy, radius) => {

    let div = document.createElement('div');
    div.style.width = 0
    div.style.height = 0
    div.style.left = cx + 'px'
    div.style.top = cy + 'px'
    div.className = 'circle'
    document.body.append(div)

    return new Promise((resolve) => {
        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';
            resolve(div)
        }, 0)
    })
}

