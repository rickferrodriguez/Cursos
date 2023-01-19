// const $btn_cal = document.querySelector("#btn-calcular")
const $result = document.querySelector("#result")
// se agrega un id al formulario para escuchar su evento
const $form = document.querySelector("#form")
const $cal1 = document.querySelector("#calculo1")
const $cal2 = document.querySelector("#calculo2")


// el evento de submit llama al último botón del formulario
// el evento se agrega de forma automática debido a que es un formulario
$form.addEventListener('submit', (event) =>{
    // esta función evita que se recarge la página
    event.preventDefault()
    let suma = parseInt($cal1.value) + parseInt($cal2.value)
    $result.innerHTML = suma
})

$result.addEventListener('onclick', () => {
    $result.classList.toggle('red-hover')
})
// $btn_cal.addEventListener("click", () => {
//     const $cal1 = parseInt(document.querySelector("#calculo1").value)
//     const $cal2 = parseInt(document.querySelector("#calculo2").value)
//     let suma = $cal1 + $cal2
//     $result.innerHTML = suma
// });
