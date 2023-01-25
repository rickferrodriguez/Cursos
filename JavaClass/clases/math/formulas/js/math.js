const $result_tri = document.querySelector('#result-tri')
const $alt_result = document.querySelector('#alt-result')


$result_tri.addEventListener('click', () =>{
    const $lado =parseInt( document.querySelector('#lado').value) 
    const $base =parseInt (document.querySelector('#base').value)
    let lado1 = Math.pow($lado, 2)
    let base1 = Math.pow($base, 2)
    let division = (base1 / 4)
    let resta = lado1 - division
    let altura = Math.sqrt(resta)
    if ($lado == $base) {
        console.warn('este no es un triángulo isosceles')
        $alt_result.innerText = 'este no es un triángulo isosceles'
    } else

    $alt_result.innerText = altura
})
