console.log(salarios)

const encontrarPersona = (persona) => {
    return salarios.find(sal => sal.name === persona)
}

const arrayTrabajos = (nombrePersona) => {
    const trabajos = encontrarPersona(nombrePersona).trabajos
    return trabajos
}

// arrayTrabajos("Juanita")

const arraySalarios = (persona) => {
    const salarios = arrayTrabajos(persona).map(trab =>{
        return trab.salario
    })
    console.log(salarios)
    return salarios
}


const arrayOrden = arraySalarios("Juanita").sort( (a,b) => a - b )
const arrayPar = () => !(arrayOrden.length % 2)

const calcularMediana = () =>{
    let iGeneral = 0
    let text = ''
    if(arrayPar()){
        iGeneral = Math.round(arrayOrden.length / 2)
        console.log(iGeneral)
    } else {
        let inImpar = Math.round(arrayOrden.length / 2)
        text = `el array es impar, la mediana es ${arrayOrden[inImpar]}`
        console.log(text)
    }

    if(iGeneral > 0){
        let iActual = iGeneral - 1
        let iSiguiente = iGeneral
        let sum = parseInt(arrayOrden[iActual])+ parseInt(arrayOrden[iSiguiente])
        let divi = sum / 2
        text = `el array es par, la mediana es ${divi}`
        console.log(text)
    }
}
calcularMediana()


const arrPorc = []
arraySalarios('Juanita').forEach((_, index, arr) => {
    let res = (arr[index]) - (arr[index- 1])
    let div = res / (arr[index -1])
    if(isNaN(div)) {
        return
    }
    else {
        arrPorc.push(div)
        return
    }
})

console.log(arrPorc)
const porOrden = arrPorc.sort( (a,b) => a - b )
console.log(porOrden)

