console.log(salarios)

const encontrarPersona = (persona) => {
    return salarios.find(sal => sal.name === persona)
}

const medianPorPersona = (nombrePersona) => {
    const laPersona = encontrarPersona(nombrePersona)
    const mappedPeople = Object.entries(laPersona).map(entry => {
        const [key, value] = entry
        return {key, value}
    })
    const trabajo = mappedPeople.forEach( map => {
        if(map.key == 'trabajos'){
            console.log(map.value)
        }
    })
}

medianPorPersona('Juanita')
