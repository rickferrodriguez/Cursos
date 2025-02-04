let firstName: string = 'Richard'
// prueba

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

avengers.forEach((avenger) => {
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

// type HeroId = `${string}-${string}-${string}-${string}-${string}`

// type Hero = {
//   readonly id?: HeroId
//   name: string
//   age: number
//   isActive?: boolean // al agregar `?` le indicamos que es un valor opcional, si se encuentra está bien, si no, no hay problema
// }

// let hero: Hero = {
//   name : 'Thor',
//   age : 20
// }

// function createHero (hero: Hero): Hero {
//   const { name, age } = hero
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//   }
// }

// const thor = createHero({name: 'Thor', age: 22}) // si se revisa este valor, por defecto vendra el `isActive` con el valor de true

// thor.id?.toString() // al ser un valor opcional cuando lo queremos usar, typescript por defecto coloca el `?` porque puede darse el caso de que el valor no llegue

// // Templeta union type

// type HexadecimalColor = `#${string}`

// // const color: HexadecimalColor = '000BFF' // en este caso este tipo le falta `#` por eso da error
// const color2: HexadecimalColor = '#000BFF' // hexadecimales ✅

// Union types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' // este `|' sirve para unir diferentes tipos de datos en un solo

// type Hero = {
//   readonly id?: HeroId
//   name: string
//   age: number
//   isActive?: boolean // al agregar `?` le indicamos que es un valor opcional, si se encuentra está bien, si no, no hay problema
//   powerScale?: HeroPowerScale
// }

// let hero: Hero = {
//   name : 'Thor',
//   age : 20
// }

// function createHero (hero: Hero): Hero {
//   const { name, age } = hero
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//   }
// }

// const thor = createHero({name: 'Thor', age: 22}) // si se revisa este valor, por defecto vendra el `isActive` con el valor de true

// thor.id?.toString() // al ser un valor opcional cuando lo queremos usar, typescript por defecto coloca el `?` porque puede darse el caso de que el valor no llegue

// Templeta union type

// type HexadecimalColor = `#${string}`

// const color: HexadecimalColor = '000BFF' // en este caso este tipo le falta `#` por eso da error
// const color2: HexadecimalColor = '#000BFF' // hexadecimales ✅
// thor.powerScale = 'galactic'

// intersection types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' // este `|' sirve para unir diferentes tipos de datos en un solo

// type HeroBasicInfo = {
//   name: string,
//   age: number
// }

// type HeroProperties = {
//   readonly id?: HeroId
//   isActive?: boolean // al agregar `?` le indicamos que es un valor opcional, si se encuentra está bien, si no, no hay problema
//   powerScale?: HeroPowerScale
// }

// type Hero = HeroBasicInfo & HeroProperties

// let hero: Hero = {
//   name : 'Thor',
//   age : 20
// }

// function createHero (basic: HeroBasicInfo): Hero {
//   const { name, age } = basic
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//   }
// }

// const thor = createHero({name: 'Thor', age: 22}) // si se revisa este valor, por defecto vendra el `isActive` con el valor de true

// thor.id?.toString() // al ser un valor opcional cuando lo queremos usar, typescript por defecto coloca el `?` porque puede darse el caso de que el valor no llegue

// Template union type

// type HexadecimalColor = `#${string}`

// const color: HexadecimalColor = '000BFF' // en este caso este tipo le falta `#` por eso da error
// const color2: HexadecimalColor = '#000BFF' // hexadecimales ✅
// thor.powerScale = 'galactic'

// Type indexing

// type HeroProperties = {
//   isActive: boolean,
//   address: {
//     planet: string,
//     city: string,
//   }
// }

// const addressHero : HeroProperties['address'] = {
//   planet: 'Earth',
//   city: 'Madrid'
// }

// Type Off

// const address = {
//   planet: 'Earth',
//   city: 'Madrid'
// }

// type Address = typeof address

// const address2: Address = {
//   planet: 'Mars',
//   city: 'Pasto'
// }

// Type from function return

// function createAddress() {
//   return {
//     planet: 'Earth',
//     city: 'Barcelona',
//   }
// }

// type Address = ReturnType<typeof createAddress>

// Arrays

const languages: (string | number)[] = [] // cuando se necesiten mas de un tipo en un array

languages.push('Spanish')
languages.push('Spanish')
languages.push(2)

// Arrays y Matrices

type CellValue = 'X' | 'O' | ''
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
] // array de filas y columnas específicas con valores predefinidos

const gameBoard: GameBoard = [
  ['O', 'X', 'O'],
  ['O', 'X', 'O'],
  ['O', 'X', 'O'],
]
