const $inpPersona = document.querySelector('#inp-persona')
const $mostrar = document.querySelector('#mostrar')
const $ulSalary = document.querySelector('#ul-salary')
const $ulPorc = document.querySelector('#ul-salary')



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

let arrayOrden = []

const calcularMediana = (arr, par) =>{
    let iGeneral = 0
    let text = ''
    if(par){
        iGeneral = Math.round(arr.length / 2)
        console.log(iGeneral)
    } else {
        let inImpar = Math.round(arr.length / 2)
        text = `el array es impar, la mediana es ${arr[inImpar]}`
        console.log(text)
    }

    if(iGeneral > 0){
        let iActual = iGeneral - 1
        let iSiguiente = iGeneral
        let sum = parseInt(arr[iActual])+ parseInt(arr[iSiguiente])
        let divi = sum / 2
        text = `el array es par, la mediana es ${divi.toFixed(2)}`
        console.log(text)
    }
}


let arrPorc = []
const porcSalary = (persona) => {
    arraySalarios(persona).forEach((_, index, arr) => {
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
}

$mostrar.addEventListener('click', () => {
    let valor = $inpPersona.value
    arrayOrden = arraySalarios(valor).sort( (a,b) => a - b )
    let arrayPar = () => !(arrayOrden.length % 2)
    calcularMediana(arrayOrden, arrayPar())
    porcSalary(valor)
    let porOrden = arrPorc.sort( (a,b) => a - b )
    let arrayParPor= () => !(porOrden.length % 2)
    console.log(porOrden)
    console.log(arrayParPor())
    calcularMediana(porOrden, arrayParPor())
})
