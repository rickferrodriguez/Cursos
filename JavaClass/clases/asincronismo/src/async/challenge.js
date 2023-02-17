const API = 'https://api.escuelajs.co/api/v1'
const $picture_product = document.querySelector('#picture-product')

async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const anotherFunction = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`)
        const product = await fetchData(`${urlApi}/products/${products[12].id}`)
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`)

        console.log(products[0])
        console.log(product.title)
        console.log(product.images)
        $picture_product.innerHTML = `<img class="img-card" src="${product.images[0]}">`
        console.log(category.name)
    } catch (error) {
        console.error(error)
    }
}

anotherFunction(API)
