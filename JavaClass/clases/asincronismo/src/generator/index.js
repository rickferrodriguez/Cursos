const API = 'https://dummyjson.com/products'

const getData = async (url) => {
    let response = await fetch(url)
    let data = response.json()
    return data
}

async function* nextData(url) {
    let datos = await getData(url)
    for( let da of datos ){
        yield da
    }
}

// nextData(API)

const g = nextData(API)



// function* gen(arr) {
//     for(let a of arr){
//         if(a === undefined) return
//
//         yield a
//     }
// }
//
// const g = gen(arrayData)
//
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
