fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(response => {
        console.log(response[0])
        console.log(response[0].title)
        console.log(response[0].category.name)
    })
