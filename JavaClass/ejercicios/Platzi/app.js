const $titulo = document.querySelector('h1')
const $button = document.querySelector('button')

$button.addEventListener('click', () =>{
    let texto = 'cambio de titulo on click'
    // el toggle parece que permite cambiar entre un valor u otro
    $titulo.innerText = texto
})

const img = document.createElement('img')
img.setAttribute('src', 'https://static.platzi.com/media/platzi-isotipo@2x.png')
$titulo.appendChild(img)
