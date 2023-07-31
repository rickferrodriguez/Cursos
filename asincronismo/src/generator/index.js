const API = 'https://dummyjson.com/products'

const getData = async (url) => {
    let response = await fetch(url)
    let data = response.json()
    return data
}

const recoProd = async (url) => {
    let data = await getData(url)
    let arrProd = data.products
}

recoProd(API)




function* gen(arr) {
    for(let a of arr){
        if(a === undefined) return

        yield a
    }
}

const g = gen(arrayData)

console.log(g.next().value)

