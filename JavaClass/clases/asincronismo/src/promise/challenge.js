// import fetch from 'node-fetch'

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
        console.log(products[0])
        return fetchData(`${url}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title)
        return fetchData(`${url}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name)
    })
    .catch(err => console.log(err))
    .finally( () => console.log('Finally'))
