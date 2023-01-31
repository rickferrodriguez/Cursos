const MediayModa = {}
const lista = [ 5, 3, 5, 5, 2, 6, 7, 4, 4, 4, 2, 2]
const sizeArray = lista.length

// es decir si el resultado de esta operación no tiene en residuo
const esPar = () => {
    return !(sizeArray % 2)
}

// es decir si el resultado de esta operación tiene en residuo
// const esImpar = () => {
//     return sizeArray % 2
// }

// el sort determina si uno de estos dos elementos (a,b) se encuentra por delante o por detras del indice del otro
// cuando yo le digo (a-b) le digo que si el resultado de esa resta es:
// <0 (menor que sero) 'a' está en un índice mener que 'b', a es menor que b
// 0 'a' y 'b' prodrían estar igual
// >0 -> a está en un índice mayor que b, a es mayor que b
let li_orden = []
li_orden = lista.sort( (a, b) => a - b)
console.log(li_orden)
const mediana = () => {
    let indexGeneral = 0
    if(esPar()){
        indexGeneral = li_orden.length / 2
        console.log("el array es par, el index es: " + indexGeneral)
    } else {
        let indexImpar = Math.round(li_orden.length / 2)
        console.log("el array es impar, la mediana es: " + li_orden[indexImpar - 1])
    }

    if(indexGeneral > 0){
        let elMismo = parseInt(li_orden[indexGeneral - 1])
        let elSigu = parseInt(li_orden[indexGeneral])
        console.log("el index es " + parseInt(indexGeneral - 1) + " y " + indexGeneral +", la mediana es: " + calculoPromedio(elMismo, elSigu))
    }
}

const calculoPromedio = (a ,b) => {
    let valor = 0
    valor = (a + b) / 2
    return valor
}

mediana()

const calcularModa = () => {
    let moda = {}
    lista.map( elem => {
        // sepregunta si este elemento del recorrida ya existe dentro del objeto, gracias a la key 'lis'
        if(moda[elem]){
            // si ya existe este elemento solo se debe sumar el valor de la cantidad de veces que se repite en +1
            moda[elem] ++
        } else 
            // se crea un nuevo objeto en donde la 'key' va a ser el numero del array, y el value será la cantidad de veces que se repite
            moda[elem] = 1
    })
    const mappedModa =Object.entries(moda).map(entry => {
        const [key, value] = entry
        return {key, value}
    })
    const  li_moda = mappedModa.sort( (a, b) => b.value - a.value)
    const multiModa = []
    multiModa.push(li_moda[0])

    for (let i = 1; i < li_moda.length; i++) {
        const element = li_moda[i];
        if(element.value >= multiModa[0].value){
            multiModa.push(element)
        } else{
            break
        }
    }
    console.log(multiModa)
    let texto = ''
    if(multiModa.length >= 1){
        texto = `La moda se repite ${multiModa.length} veces y sus valores son: `
        multiModa.forEach(multi => {
            texto += `${multi.key} y la cantidad es  ${multi.value}, `
        })
    } else {
        console.log('aca tambien')
        texto = `la moda es ${multiModa[0].key} y se repie ${multiModa[0].value}`
    }

    console.log( texto)
    // let maximo = Math.max(...myvalue) 
    // console.log(parseInt(maximo))
}


calcularModa()
