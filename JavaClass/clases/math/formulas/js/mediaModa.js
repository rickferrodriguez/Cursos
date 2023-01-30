const lista = [ 2, 3, 1, 5, 2, 6, 7, 4]
const sizeArray = lista.length

// es decir si el resultado de esta operación no tiene en residuo
const esPar = () => {
    return !(sizeArray % 2)
}

// es decir si el resultado de esta operación tiene en residuo
const esImpar = () => {
    return sizeArray % 2
}

// el sort determina si uno de estos dos elementos (a,b) se encuentra por delante o por detras del indice del otro
// cuando yo le digo (a-b) le digo que si el resultado de esa resta es:
// <0 (menor que sero) 'a' está en un índice mener que 'b', a es menor que b
// 0 'a' y 'b' prodrían estar igual
// >0 -> a está en un índice mayor que b, a es mayor que b
const li_orden = lista.sort( (a, b) => a - b)
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

    if(indexGeneral){
        let elMismo = parseInt(li_orden[indexGeneral - 1])
        let elSigu = parseInt(li_orden[indexGeneral])
        console.log("el index es " + parseInt(indexGeneral - 1) + " y " + indexGeneral +", la mediana es: " + calculo(elMismo, elSigu))
    }
}

const calculo = (a ,b) => {
    let valor = 0
    valor = (a + b) / 2
    return valor
}

mediana()
