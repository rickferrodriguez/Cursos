let firstName : string = 'Richard'

// firstName = 2 no es posible realizar esta transformación porque es de tipo string y queremos asingnar un número

// cuando se crean objetos sencillos typescript es capaz de leer los datos que contiene y hacer inferencia de su tipo
const persona = {
  name: 'Pepe', //infiere que es de tipo string
  age: 30 // infiere que es de tipo number
}

persona.age // typescript es capaz de traerme autocompletado para los objetos, agiliza el desarrollo

// tambien infiere el tipo en variables sencillas
const number = 1
let n: number = 2

let a = 'hola'
let b: string = 'hola 2'

let myAny // por defecto typescript infiere que una variable que no sabe lo que tiene es de tipo any => que ignora cualquier tipo

let myUnknown: unknown = 'hola' // este tipo de


function suma ( a: number, b: number) {
  return a + b
}