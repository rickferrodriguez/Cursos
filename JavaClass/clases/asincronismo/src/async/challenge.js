const API = 'https://api.escuelajs.co/api/v1'
const $image_card = document.querySelector('#image-card')
const $prod_category = document.querySelector('#prod-category')
const $prod_title = document.querySelector('#prod-title')
const $prod_description = document.querySelector('#prod-description')
const $prod_price = document.querySelector('#prod-price')

async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const formatoNumero = async (num) => {
     return num.toLocaleString("en-US", {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    })
}

const anotherFunction = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`)
        const product = await fetchData(`${urlApi}/products/${products[12].id}`)
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`)
        const precioFormato = await formatoNumero(product.price)

        console.log(products[12])
        console.log(product.title)
        console.log(product.images)
        $image_card.innerHTML = `<img class="img-card" src="${product.images[0]}">`
        $prod_category.textContent = category.name
        $prod_title.textContent = product.title
        $prod_description.textContent = product.description
        $prod_price.textContent = precioFormato
    } catch (error) {
        console.error(error)
    }
}

anotherFunction(API)
