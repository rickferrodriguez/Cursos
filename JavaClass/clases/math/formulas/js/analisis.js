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
    const trabajos = encontrarPersona(nombrePersona).trabajos
    // const trabajos = laPersona.trabajos
    return trabajos
}

// convertimos un array de dos niveles en uno solo
const granTrabajos = salarios.flatMap(sal => sal.trabajos)
const arrayEmpresas = () => {
    let empresas = {}
    granTrabajos.map(emp => {
        // si la empresa no existe cree el objeto de forma vacia
        if(!empresas[emp.empresa]){
            empresas[emp.empresa] = {}
        }

        // si la empresa con el array de año no existe, creelo con un array de cada año
        if(!empresas[emp.empresa][emp.year]){
            empresas[emp.empresa][emp.year] = []
        }

        // dentro del array de cada año se hace un push del salario que le corresponde
        empresas[emp.empresa][emp.year].push(emp.salario)
        
    })
    return empresas
}

arrayEmpresas()



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
    } else if( arr.length == 1){
        text = `${arr[0]}`
    } else {
        let inImpar = Math.round(arr.length / 2)
        text = `${arr[inImpar-1]}`
    }

    if(iGeneral > 0){
        let iActual = iGeneral - 1
        let iSiguiente = iGeneral
        let sum = parseInt(arr[iActual])+ parseInt(arr[iSiguiente])
        let divi = sum / 2
        text = `${divi.toFixed(2)}`
    }
    console.log(text)
    return text
}

const laEmpresa = (empresa, year ) => {
    const miEmpresa = Object.entries(arrayEmpresas()).forEach(entry => {
        const clave = entry[0]
        const valor = entry[1]
        if(clave === empresa){
            console.log(valor[year])
            const sinOrden = valor[year]
            const esPar = !(sinOrden.length % 2)
            const enOrden = sinOrden.sort((a, b) => a-b)
            calcularMediana(enOrden, esPar)
        }
    })
    return miEmpresa
}


laEmpresa('Industrias Mokepon', 2021)



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

const capturarValor =() => {
    let valor = ''
    if($inpPersona.value){
        valor = $inpPersona.value
    } else {
        valor = $personaSel.textContent
    }
    return valor
}

$mostrar.addEventListener('click', () => {
    $personaSel.textContent = capturarValor()
    mostrarGeneral()
})


const mostrarGeneral = () => {
    let arrayOrden = []
    // let valor = $inpPersona.value
    let valor = capturarValor()
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
