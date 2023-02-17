const API = 'https://api.escuelajs.co/api/v1'

async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const anotherFunction = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`)
        const product = await fetchData(`${urlApi}/products/${products[0].id}`)
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`)

        console.log(products[0])
        console.log(product.title)
        console.log(product.images)
        console.log(category.name)
    } catch (error) {
        console.error(error)
    }
}

anotherFunction(API)
