const notes = [
    {
        course: "Math",
        note: 10,
        credits: 2
    },
    {
        course: "Programming",
        note: 8,
        credits: 5
    },
    {
        course: "Science",
        note: 7,
        credits: 5
    }
]

const multi = notes.map( no => {
    let res = no.note * no.credits
    return res
})

console.log(multi)

const suma = () =>{
    let resSuma = 0
    multi.forEach( mu => {
        resSuma += mu
    })
    return resSuma
}

console.log(suma())

const sumCredit = () =>{
    let sum = 0
    notes.forEach(mu => {
        sum += mu.credits
    })
    return sum
}
console.log(sumCredit())

const promedioPonderado = () =>{
    let res = 0
    res = suma() / sumCredit()
    return res
}

console.log(promedioPonderado())

const sumNotas = () => {
    let res = 0
    notes.forEach(no => {
        res += no.note
    })
    return res 
}
const mediaArit = sumNotas() / notes.length
console.log(mediaArit)

