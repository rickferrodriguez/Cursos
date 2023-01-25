const $res_desc = document.querySelector('#res-desc')
const $after = document.querySelector('#after')
const $before = document.querySelector('#before')

const productos = [
    {nombre: 'camisa', precio: 500},
    {nombre: 'pantalon', precio: 600},
    {nombre: 'zapato', precio: 700},
] 


$res_desc.addEventListener('click', () => {
    let after = '<h3>after</h3>'
    const $desc_val = document.querySelector('#desc-val').value
    // const prodDesc = productos.map(prod => (prod.precio * parseInt($desc_val)))
    before()
    const prodDesc = productos.map( (prod) => {
        let result = [prod.precio] * ((100 - parseInt($desc_val))/100)
        after += `<div class="linea"><p>${prod.nombre}</p> <br> <p>${result}</p></div>`
        return result
    })
    $after.innerHTML= after
    console.log(prodDesc)
    return prodDesc
})

const before = () => {
    let before = `<h3>Before</h3>`
    productos.map( prod => {
        before += `<div class="linea"><p>${prod.nombre}</p> <br> <p>${prod.precio}</p></div>`
    })
    $before.innerHTML = before
}

