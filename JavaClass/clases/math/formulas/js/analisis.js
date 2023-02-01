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
console.log(arrayPar())
