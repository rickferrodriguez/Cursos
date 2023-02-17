const API = 'https://dummyjson.com/products'
const $image_card = document.querySelector('#image-card')
const $prod_category = document.querySelector('#prod-category')
const $prod_title = document.querySelector('#prod-title')
const $prod_description = document.querySelector('#prod-description')
const $prod_price = document.querySelector('#prod-price')
const $main = document.querySelector('#main')

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
        const products = await fetchData(urlApi)
        // const product = await fetchData(`${urlApi}/products/${products[12].id}`)
        // const category = await fetchData(`${urlApi}/categories/${product.category.id}`)
        const allProd = products.products

        let texto = ''
        allProd.forEach((prod, index) => {
            if(index > 12) {
                texto += `
            <article class="product">
                    <picture id="image-card">
                        <img src="${prod.images[0]}" alt="">
                    </picture>

                    <div class="prod-desc">
                        <p id="prod-category" class="prod-category">${prod.category}</p>
                        <h1 id="prod-title" class="prod-title">${prod.title}</h1>
                        <p id="prod-description">${prod.description}</p>
                        <p id="prod-price" class="prod-price">300</p>
                        <!-- <button class="fav-btn">Favoritos</button> -->
                        <button class="add-btn">Añadir al Carrito</button>
                    </div>
            </article>
`
            }
            $main.innerHTML = texto
        });

        // const precioFormato = await formatoNumero(prod12.price)
        // console.log(products)
        // console.log(prod12.title)
        // console.log(prod12.images)
        // $image_card.innerHTML = `<img class="img-card" src="${prod12.images[0]}">`
        // $prod_category.textContent = prod12.category
        // $prod_title.textContent = prod12.title
        // $prod_description.textContent = prod12.description
        // $prod_price.textContent = precioFormato
    } catch (error) {
        console.error(error)
    }
}



anotherFunction(API)
