let firstName: string = 'Richard'

// firstName = 2 no es posible realizar esta transformación porque es de tipo string y queremos asingnar un número

// cuando se crean objetos sencillos typescript es capaz de leer los datos que contiene y hacer inferencia de su tipo
const persona = {
  name: 'Pepe', //infiere que es de tipo string
  age: 30, // infiere que es de tipo number
}

persona.age // typescript es capaz de traerme autocompletado para los objetos, agiliza el desarrollo

// tambien infiere el tipo en variables sencillas, en este caso es de tipo number
const number = 1
let n: number = 2

let a = 'hola'
let b: string = 'hola 2'

a.toLocaleLowerCase()

// a = 2 cadena de texto y no funciona ⛔

let myAny // por defecto typescript infiere que una variable que no sabe lo que tiene es de tipo any => que ignora cualquier tipo

let myUnknown: unknown = 'hola' // este tipo de

// funciones

// function saludar (name: string) {
//   console.log(`Hola ${name}`)
// }

// saludar('pepe')
// saludar(2) no funciona porque es de tipo number
//

// funciones con objetos
// function saludor( {name: string, age: number} )  esto esta mal ⛔ por la sintaxis de javascript
// function saludar ({ name, age}: { name: string; age: number}) {
//   console.log(`Hola ${name} tienes ${age}`)
// }

// retornos en funciones

function saludar({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name} tienes ${age}`)
  return age
}

// let username: string
// username = saludar({name: 'pepe', age: 3000}) no es posible por que ha inferido que su valor de retorno es un number del age

const sayHiFromFunction = (fn: (name: string) => void) => {
  // void es cuando una funcion no retorna nada
  fn('Miguel')
}

const sayHi = (name: string) => {
  console.log(`Hi ${name}`) // en este caso la funcion no retorna nada
}

sayHiFromFunction(sayHi)

// tipar arrow functions

const suma = ({ a, b }: { a: number; b: number }): number => {
  return a + b
}

// never, tipo de dato cuando una funcion nunca va a retornar nada

function throwError(message: string): never {
  throw new Error(message)
}

//Importante: void es cuando sabes que una funcion puede retornar algo pero no importa su tipo y valor, y never es cuando nunca vas a
// devolver algo

// inferencias de tipos en las funciones anónimas según el contexto

const avengers = ['spiderman', 'hulk', 'thor']

avengers.forEach(avenger => {
  console.log(avenger.toUpperCase())
})

// Objetos

// let hero = {
//   name: 'spiderman',
//   age: 20
// }

// function createHero(name: string, age: number) {
//   return {name,age,}
// }

// const thor = createHero('Thor', 2010) en este caso no estamos seguros de que esta variable sea igual al tipo de la variable hero

// type alias

// type Hero = {
//   name: string, age: number
// }

// let hero: Hero = {
//   name : 'Thor',
//   age : 20
// }

// function createHero (hero: Hero): Hero {
//   const { name, age } = hero
//   return { name, age}
// }

// const thor = createHero({name: 'Thor', age: 220})

// Optional properties

type Hero = {
  readonly id?: string
  name: string
  age: number
  isActive?: boolean // al agregar `?` le indicamos que es un valor opcional, si se encuentra está bien, si no, no hay problema
}

let hero: Hero = {
  name : 'Thor',
  age : 20
}

function createHero (hero: Hero): Hero {
  const { name, age } = hero
  return {id: crypto.randomUUID(), name, age, isActive: true}
}

const thor = createHero({name: 'Thor', age: 22}) // si se revisa este valor, por defecto vendra el `isActive` con el valor de true

thor.id?.toString() // al ser un valor opcional cuando lo queremos usar, typescript por defecto coloca el `?` porque puede darse el caso de que el valor no llegue