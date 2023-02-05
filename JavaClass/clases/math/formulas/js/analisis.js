const $inpPersona = document.querySelector('#inp-persona')
const $mostrar = document.querySelector('#mostrar')
const $ulSalary = document.querySelector('#ul-salary')
const $ulPorc = document.querySelector('#ul-porc')
const $porcCre = document.querySelector('#porc-cre')
const $newSala = document.querySelector('#new-sala')
const $personaSel = document.querySelector('#persona-sel')
const $btnNext = document.querySelector('#btn-next')
const $btnBefore = document.querySelector('#btn-before')




let laPersona = salarios.find(sal => sal.name === salarios[0].name)
$btnNext.addEventListener('click', () => {
    mostrarPersona($btnNext.value)
    mostrarGeneral()
})
$btnBefore.addEventListener('click', () =>{
    mostrarPersona($btnBefore.value)
    mostrarGeneral()
})
// $personaSel.textContent = text
console.log(laPersona)

let count = 0
let text = `${salarios[0].name}`
$personaSel.textContent = text
const mostrarPersona = (valor) => {
    if( valor === 'next' && count < (salarios.length- 1)){
        count ++
        text = `${salarios[count].name}`
        $personaSel.textContent = text
        laPersona = salarios.find(sal => sal.name === text)
    } else if(valor === 'before' && count > 0){
        count --
        text = `${salarios[count].name}`
        $personaSel.textContent = text
        laPersona = salarios.find(sal => sal.name === text)
    }
    $personaSel.textContent = text
}


const encontrarPersona = (persona) => {
    // return salarios.find(sal => sal.name === persona)
    return laPersona = salarios.find(sal => sal.name === persona)
}

const arrayTrabajos = (nombrePersona) => {
    // const trabajos = encontrarPersona(nombrePersona).trabajos
    const trabajos = laPersona.trabajos
    return trabajos
}


const arraySalarios = (persona) => {
    const salarios = arrayTrabajos(persona).map(trab =>{
        return trab.salario
    })
    return salarios
}


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


const porcSalary = (persona) => {
    let arrPorc = []
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
    return arrPorc
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
    encontrarPersona($inpPersona.value)
    $personaSel.textContent = $inpPersona.value
    mostrarGeneral()
})

const mostrarGeneral = () => {
    let arrayOrden = []
    let valor = $inpPersona.value
    console.log(valor)
    arrayOrden = arrOrder(arraySalarios(valor))    
    mostrarSalarios(arrayOrden)
    let arrayPar = () => !(arrayOrden.length % 2)
    calcularMediana(arrayOrden, arrayPar())
    porcSalary(valor)
    mostrarPorcentajes(porcSalary(valor))
    let porOrden = arrOrder(porcSalary(valor))
    let arrayParPor= () => !(porOrden.length % 2)
    mostrarPorCre(calcularMediana(porOrden, arrayParPor()))
    let miPorcentaje = calcularMediana(porOrden, arrayParPor())
    let miSalary = arraySalarios(valor)
    mostrarNewSal(newSalary(miSalary, miPorcentaje))
}
