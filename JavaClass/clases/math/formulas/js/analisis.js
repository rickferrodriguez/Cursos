const $inpPersona = document.querySelector('#inp-persona')
const $mostrar = document.querySelector('#mostrar')
const $ulSalary = document.querySelector('#ul-salary')
const $ulPorc = document.querySelector('#ul-porc')
const $results = document.querySelector('#results')


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
    return salarios
}

let arrayOrden = []

const calcularMediana = (arr, par) =>{
    let iGeneral = 0
    let text = ''
    if(par){
        iGeneral = Math.round(arr.length / 2)
    } else {
        let inImpar = Math.round(arr.length / 2)
        text = `el array es impar, la mediana es ${arr[inImpar]}`
    }

    if(iGeneral > 0){
        let iActual = iGeneral - 1
        let iSiguiente = iGeneral
        let sum = parseInt(arr[iActual])+ parseInt(arr[iSiguiente])
        let divi = sum / 2
        text = `el array es par, la mediana es ${divi.toFixed(2)}`
    }
    return text
}


const mostrarPorcentajes = (arr) => {
    let texto = ``
    arr.forEach(a => {
        texto += `<li>${a}</li>`
    });
    $ulPorc.innerHTML = texto
}

const arrOrder = (arr) => {
    return arr.sort( (a, b) => a -b )
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

const mostrarSalarios = (arr) => {
    let texto = ``
    arr.forEach(a => {
        texto += `<li>${a}</li>`
    })
    $ulSalary.innerHTML = texto
}


$mostrar.addEventListener('click', () => {
    let valor = $inpPersona.value
    arrayOrden = arrOrder(arraySalarios(valor))    
    mostrarSalarios(arrayOrden)
    let arrayPar = () => !(arrayOrden.length % 2)
    calcularMediana(arrayOrden, arrayPar())
    porcSalary(valor)
    mostrarPorcentajes(arrPorc)
    let porOrden = arrOrder(arrPorc)
    let arrayParPor= () => !(porOrden.length % 2)
    calcularMediana(porOrden, arrayParPor())
})
