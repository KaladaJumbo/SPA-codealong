// const URL = 'http://localhost:3000/products'

// document.addEventListener('DOMContentLoaded', () => {
//     fetch(URL)
//         .then(response => response.json())
//         .then(products => {
//             products.forEach(product => {
//                 renderProduct(product)
//             });
//         })

//     document.querySelector('form').addEventListener('submit', submitHandler)
// })

// const renderProduct = (product) => {
//     let productTable = document.querySelector('tbody')
//     let newRow = document.createElement('tr')
//     newRow.id = `product-${product.id}`
//     let pName = document.createElement('td')
//     let pPrice = document.createElement('td')
//     let pQty = document.createElement('td')
//     let deleteBtn = document.createElement('td')
//     pName.innerText = product.name
//     pPrice.innerText = product.price
//     pQty.innerText = product.quantity
//     deleteBtn.innerText = 'X'
//     newRow.addEventListener('click', deleteProduct)
//     newRow.append(pName, pPrice, pQty, deleteBtn)
//     productTable.appendChild(newRow)
// }

// const submitHandler = (event) => {
//     event.preventDefault()
//     let newProduct = {}
//     newProduct.name = event.target[0].value
//     newProduct.price = event.target[1].value
//     newProduct.quantity = event.target[2].value
    
//     fetch(URL, {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(newProduct)
//     }).then(res => res.json())
//     .then(newProduct => renderProduct(newProduct))
    
// }

// const deleteProduct = (event) => {
//     let id = event.currentTarget.id.split("-")[1]
//   fetch(`${URL}/${id}`, {
//     method: "DELETE"
//   }).then(res => res.json())
//   .then(() => {
//     document.getElementById(`product-${id}`).remove()
//   })


// }