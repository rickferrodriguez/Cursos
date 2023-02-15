const $listado = document.querySelector('#listado')

const url = 'https://api.escuelajs.co/api/v1'

const fetchData = (urlApi) => {
    return fetch(urlApi)
}

// fetchData(`${url}/products`)
//     .then(res => res.json())
//     .then(products => {
//         console.log(products)
//     })
//     .catch(error => console.log(error))

fetchData(`${url}/products`)
    .then(res => res.json())
    .then(products => {
        let texto = ''
        // const filtrado = products.filter(product => product.category.name.startsWith('El'))
        const imagenes = []
        const filtrado = products.filter(product => product.id == 41)
        Object.entries(filtrado[0]).forEach(entry => {
            const [key, value] = entry
            if(key === 'images'){
                texto = `<li>${filtrado[0].title}</li>`
                value.forEach(image => {
                    // imagenes[0] ??= image
                    imagenes.push(image)
                    texto += `<img src="${image}">`

                })
            }

        })
        console.log(imagenes)
        console.log(filtrado)
        $listado.innerHTML = texto
        // return fetchData(`${url}/products/${products[0].id}`)
    })
    // .then(response => response.json())
    // .then(product => {
    //     console.log(product.title)
    //     return fetchData(`${url}/categories/${product.category.id}`)
    // })
    // .then(response => response.json())
    // .then(category => {
    //     console.log(category.name)
    // })
    // .catch(err => console.log(err))
    // .finally( () => console.log('Finally'))
