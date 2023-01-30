const lista = [ 2, 3, 1, 5, 6, 6, 2]

// es decir si el resultado de esta operación no tiene en residuo
const esPar = () => {
    return !(lista.length % 2)
}

// es decir si el resultado de esta operación tiene en residuo
const esImpar = () => {
    return lista.length % 2
}

// el sort determina si uno de estos dos elementos (a,b) se encuentra por delante o por detras del indice del otro
// cuando yo le digo (a-b) le digo que si el resultado de esa resta es:
// <0 (menor que sero) 'a' está en un índice mener que 'b', a es menor que b
// 0 'a' y 'b' prodrían estar igual
// >0 -> a está en un índice mayor que b, a es mayor que b
const li_orden = lista.sort( (a, b) => a - b)
console.log(li_orden)
const mediana = () => {
    if(esPar()){
        console.log("es par")
    } else {
        let indexMedia = Math.round(li_orden.length / 2)
        console.log("es impar, la media es: " + li_orden[indexMedia - 1])
    }

}

mediana()
