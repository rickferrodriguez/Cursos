const $inpPersona = document.querySelector('#inp-persona')
const $mostrar = document.querySelector('#mostrar')
const $ulSalary = document.querySelector('#ul-salary')
const $ulPorc = document.querySelector('#ul-porc')
const $porcCre = document.querySelector('#porc-cre')
const $newSala = document.querySelector('#new-sala')


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
        text = `${arr[inImpar-1]}`
        return text
    }

    if(iGeneral > 0){
        let iActual = iGeneral - 1
        let iSiguiente = iGeneral
        let sum = parseInt(arr[iActual])+ parseInt(arr[iSiguiente])
        let divi = sum / 2
        text = `${divi.toFixed(2)}`
    }
    return text
}


const mostrarPorcentajes = (arr) => {
    let texto = `<li>&nbsp;<li>`
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
            arrPorc.push(div.toFixed(3))
            return
        }
    })
}

const newSalary = (arr,porc) => {
    let ultSalary = arr[arr.length -1]
    let sum = 1.0 + (Math.round( porc * 1e12 ) / 1e12 )
    let mul = ultSalary * sum
    return mul
}

const mostrarSalarios = (arr) => {
    let texto = ``
    arr.forEach(a => {
        texto += `<li>${a}</li>`
    })
    $ulSalary.innerHTML = texto
}

const mostrarPorCre = (el) => {
    $porcCre.innerText = `Tu porcentaje de crecimiento es: ${el}`
}

const mostrarNewSal = (el) => {
    $newSala.innerText = `Tu posible nuevo salario es: ${el}`
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
    mostrarPorCre(calcularMediana(porOrden, arrayParPor()))
    let miPorcentaje = calcularMediana(porOrden, arrayParPor())
    let miSalary = arraySalarios(valor)
    mostrarNewSal(newSalary(miSalary, miPorcentaje))
})
