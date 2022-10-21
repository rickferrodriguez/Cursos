// Tipos de Arreglos en Javascript

//let champions = new Array("Vayne", "Zed", "Sett", "Nami", "Sejuani");  Esta es una forma antigua, ya no se recomienda hacerlo de esta forma.

const champions = ["Vayne", "Zed", "Sett", "Nami", "Sejuani"];
const counters = ["Draven", "Malzahar", "Renekton", "Blitzcrank", "Viego"];
console.log(champions);

console.log(champions[0]);

for (let i = 0; i < champions.length; i++){
    if (champions[i] == "Nami"){
        console.log(i +" este campeon es nami");
        break;
    }
}

// Remplazar un valor de un Array

let campeones = '';
for (let i = 0; i < champions.length; i++){
    campeones =champions[i];
        if (campeones == "Sejuani"){
            console.log("Los counters de " + campeones + " son: "+ counters[4] + " y " +counters[2]);
        }
}


// Agregar un elemento dentro de un "Array"

counters.push('Sylas');
console.log("The new champion to the counter list is: " + counters)

let contador = 0;
while (contador < champions.length){
    contador++;
    campeones =champions[contador];
    if (campeones == "Nami"){
        console.log("Los counters de " + campeones + " son: "+ counters[0] + " y " +counters[3]);
        break;
    }
}

let i = 0;
const sits = ["Ocupado", "", "", "", ""];
const persona = "Richard";
while (i < sits.length){
    i++;
    disponibles = sits[i];
    if (disponibles == ""){
        sits[i]=persona;
        console.log(contador);
        console.log(sits);
    }
    else {
        sits.push('');
        console.log(sits);
        break;
    }
}

const seasons = ['spring','summer','fall','winter'];
const actual = 2;


