const $inpPersona = document.querySelector('#inp-persona')
const $mostrar = document.querySelector('#mostrar')
const $ulSalary = document.querySelector('#ul-salary')
const $ulPorc = document.querySelector('#ul-porc')
const $porcCre = document.querySelector('#porc-cre')
const $newSala = document.querySelector('#new-sala')
const $personaSel = document.querySelector('#persona-sel')
const $btnNext = document.querySelector('#btn-next')
const $btnBefore = document.querySelector('#btn-before')
const $mostrarEmp = document.querySelector('#mostrar-emp')
const $impEmpresa = document.querySelector('#imp-empresa')
const $impYear = document.querySelector('#imp-year')
const $ulEmpresa = document.querySelector('#ul-empresa')
const $empresaSel = document.querySelector('#empresa-sel')
const $mediaEmpre = document.querySelector('#media-empre')


let laPersona = salarios.find(sal => sal.name === salarios[0].name)
let laEmpresa = 
$btnNext.addEventListener('click', () => {
    recoUnoporUno(salarios, $personaSel, $btnNext.value)
    mostrarGeneral()
})
$btnBefore.addEventListener('click', () =>{
    recoUnoporUno(salarios, $personaSel, $btnBefore.value)
    mostrarGeneral()
})

let count = 0

const recoUnoporUno = (arr, contenido, valor) => {
    if( valor === 'next' && count < (arr.length- 1)){
        count ++
        text = `${arr[count].name}`
        contenido.textContent = text
        laPersona = arr.find(sal => sal.name === text)
    } else if(valor === 'before' && count > 0){
        count --
        text = `${arr[count].name}`
        contenido.textContent = text
        laPersona = arr.find(sal => sal.name === text)
    }
    contenido.textContent = text
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
// TODO: usar el entries para tambien traer a la persona
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

const arrEmpresasDos = () => {
    let empresas = {}
    for (let persona of salarios){
        let elTrabajo = persona.trabajos
        for( let trabajo of elTrabajo){
            if( !empresas[trabajo.empresa]){
                empresas[trabajo.empresa] = {}
            }

            if( !empresas[trabajo.empresa][trabajo.year]){
                empresas[trabajo.empresa][trabajo.year] = []
            }

            empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
        }
    }
    return empresas
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
    return text
}

const entriesEmpresas = Object.entries(arrEmpresasDos())
const mediaEmpYear = (empresa, year ) => {
    const forArray =entriesEmpresas.forEach(entry => {
        // const clave = entry[0]
        // const valor = entry[1]
        const [clave, valor] = entry
        if(clave === empresa){
            const sinOrden = valor[year]
            // forArray.push(valor[year])
            const esPar = !(sinOrden.length % 2)
            const enOrden = sinOrden.sort((a, b) => a-b)
            console.log(enOrden)
            $mediaEmpre.textContent =`La media de salarios de ${clave} del año ${year} es: ${calcularMediana(enOrden, esPar)}`
            mostrarSalarios(enOrden, $ulEmpresa)
            return enOrden
        }
    })
    console.log(forArray)
    return forArray
}


$mostrarEmp.addEventListener('click', () => {
    let emp = $impEmpresa.value
    let year = $impYear.value
    mediaEmpYear(emp, year)
})



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

const mostrarSalarios = (arr, contenido) => {
    let texto = ``
    arr.forEach(a => {
        texto += `<li>${a}</li>`
    })
    contenido.innerHTML = texto
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


const mostrarDefault = () => {
    let text = `${salarios[0].name}`
    $personaSel.textContent = text
    let arrayOrden = []
    let valor = capturarValor()
    arrayOrden = arrOrder(arraySalarios(valor))    
    mostrarSalarios(arrayOrden, $ulSalary)
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

const mostrarGeneral = () => {
    let arrayOrden = []
    // let valor = $inpPersona.value
    let valor = capturarValor()
    arrayOrden = arrOrder(arraySalarios(valor))    
    mostrarSalarios(arrayOrden, $ulSalary)
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
