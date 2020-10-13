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




const URL = "http://localhost:3000/products/"

document.addEventListener("DOMContentLoaded", () => {
    fetching();
    formListener();
})

function fetching(url=URL) {
    fetch(url)
        .then(res => res.json())
        .then(data => data.forEach(element => createProduct(element)))
}

function createProduct(params) {
    let row = document.createElement("tr");
    //row.id = `id${params.id}`

    //table data 
    let name = document.createElement("td");
    let price = document.createElement("td");
    let quantity = document.createElement("td");
    let deletebutton = document.createElement("td")

    //adding data to the respective tr's
    name.innerText = params.name
    price.innerText = params.price
    quantity.innerText = params.quantity
    deletebutton.innerText = "X"

    //find the table body 
    let table = document.querySelector(".table")
    body = table.children[1];

    //appending 
    row.appendChild(name);
    row.appendChild(price);
    row.appendChild(quantity);
    row.appendChild(deletebutton)

    body.appendChild(row);

    //listener 
    deletebutton.addEventListener("click", () => {
        row.remove()
        removeFromDB(params)
    })

}

function removeFromDB(params) {
    let showUrl = `${URL}/${params.id}`
    meta = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }
    fetch(showUrl, meta)
        .then(res => {console.log("success")})
        .catch(failure => {console.log(failure)})
}

function formListener() {
    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        postNewProd(e)
    })

}

function postNewProd(e) {
    
    let newProduct = {
        name: e.target[0].value,
        price: e.target[1].value,
        quantity: e.target[2].value
    }

    let meta = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newProduct)
    }

    fetch(URL, meta)
        .then(res => res.json())
        .then(createProduct(newProduct))
        .catch(error => console.log(error))

        
}