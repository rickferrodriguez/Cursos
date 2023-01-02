const cartas = [
    { numero: 1, imagen: "url/image1.jpg"},
    { numero: 2, imagen: "url/image2.jpg"},
    { numero: 3, imagen: "url/image3.jpg"},
    { numero: 4, imagen: "url/image4.jpg"},
    { numero: 5, imagen: "url/image5.jpg"},
    { numero: 6, imagen: "url/image6.jpg"},
    { numero: 7, imagen: "url/image7.jpg"},
];

let index1 = Math.floor(Math.random() * cartas.length);

console.log(index1);
console.log(cartas[index1])
console.log(`de un numero random sale : ${cartas[index1].numero}`)

