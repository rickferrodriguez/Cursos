const $listado = document.querySelector('#listado')

const url = 'https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_ZHzebMpw6KTiAsv559lo44aFshLTypdh8l6uWFDLcjV55KTttjq56rOAz36sU73L'

// const fetchData = (urlApi) => {
//     return fetch(urlApi)
// }

// fetchData(`${url}/products`)
//     .then(res => res.json())
//     .then(products => {
//         console.log(products)
//     })
//     .catch(error => console.log(error))

fetch(url)
    .then(res => res.json())
    .then(cats => {
        let text = ''
        console.log(cats[0])
        const images = cats.forEach(cat => {
            text += `<li><img class="image" src="${cat.url}"</li>`
        })
        $listado.innerHTML = text
    })
// fetchData(`${url}/products`)
//     .then(res => res.json())
//     .then(products => {
//         let texto = ''
//         // const filtrado = products.filter(product => product.category.name.startsWith('El'))
//         const filtrado =products.filter(product => product.id == 41)
//
//         console.log(filtrado)
//         $listado.innerHTML = texto
//         // return fetchData(`${url}/products/${products[0].id}`)
//     })
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
