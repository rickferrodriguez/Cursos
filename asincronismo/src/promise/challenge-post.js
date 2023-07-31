const urlApi = 'https://api.escuelajs.co/api/v1'

function postData(url, data) {
    const response = fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response
}

const data = {
  "title": "New Product Course",
  "price": 999,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

postData(`${urlApi}/products`, data)
    .then(response => response.json()) 
    .then(data => console.log(data))
