const $res_desc = document.querySelector('#res-desc')
const $after = document.querySelector('#after')
const $before = document.querySelector('#before')

const productos = [
    {nombre: 'camisa', precio: 500},
    {nombre: 'pantalon', precio: 600},
    {nombre: 'zapato', precio: 700},
] 

const cupones = [
    {nombre: 'MrStore', valor: 20},
    {nombre: 'Adidas', valor: 10},
    {nombre: 'Optica', valor: 15},
    {nombre: 'Carmelita', valor: 10},
    {nombre: 'LaMerced', valor: 22},
]

const cupon = (myName) => {
    let cupVal = 0
    cupones.map((cup) => {
        if(cup.nombre != myName)return 

        console.log(cup.valor)
        cupVal = cup.valor
    })
    return cupVal
}

const descuento = () => {
    // const $desc_val = parseInt(document.querySelector('#desc-val').value)    
    const $desc_cupon = document.querySelector('#desc-cupon')
    let after = '<h3>after</h3>'
    const prodDesc = productos.map( (prod) => {
        let result = [prod.precio] * ((100 - parseInt(cupon($desc_cupon.value)))/100)
        after += `<div class="linea"><p>${prod.nombre}</p> <br> <p>${result}</p></div>`
        return result
    })
    $after.innerHTML= after
    return prodDesc
}

const before = () => {
    let before = `<h3>Before</h3>`
    productos.map( prod => {
        before += `<div class="linea"><p>${prod.nombre}</p> <br> <p>${prod.precio}</p></div>`
    })
    $before.innerHTML = before
}

$res_desc.addEventListener('click', () => {
    // const prodDesc = productos.map(prod => (prod.precio * parseInt($desc_val)))
    descuento()
    before()
})


