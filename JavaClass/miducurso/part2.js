// the conditional code only works when the code above its import { connect } from 'react-redux'

const edad = 18

if (edad > 18) {
  console.log('Es mayor de edad')
} else {
  //this code only works when the above is false
  console.log('Es menor de edad')
}

// while bucle , continue and break

let count = 10

while (count >= 0) {
  count = count - 1
  console.log(count + 'segundos')
}

// break

while (count >= 0) {
  count = count - 1
  if (count === 5) {
    break // break stops the cicle or the while bucle
  }

  console.log(count + 'segundos')
}

// continue

while (count >= 0) {
  count = count - 1
  if (count % 2 == 0) {
    continue // allows to continue or aboid the code below and print the things there are not in the condition
  }

  console.log(count + 'segundos')
}

// while anidados

const NUMERO_REVISIONES = 3
let cuentaAtras = 10

while (cuentaAtras > 0) {
  console.log(cuentaAtras)

  let revisionesRealizadas = 0

  while (revisionesRealizadas < NUMERO_REVISIONES) {
    revisionesRealizadas = revisionesRealizadas + 1
    console.log(revisionesRealizadas + 'revisiones Realizadas')
  }
  cuentaAtras = cuentaAtras - 1
}
