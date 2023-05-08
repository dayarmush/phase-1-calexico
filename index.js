// Write your code here...
fetch('http://localhost:3000/menu')
.then(resp => resp.json())
.then(data => {
    data.forEach(renderMenu)
    display(data[0])
});



function renderMenu(menu) {
    const span = document.createElement('span');
    span.innerText = menu.name
    span.setAttribute('class', 'menuNames')
    document.querySelector('#menu-items').appendChild(span)
    span.addEventListener('click', e => {
        display(menu)
    })
}

function display(itemDisplay) {
    const img = document.querySelector('#dish-image')
    img.src = itemDisplay.image
    
    const description = document.querySelector('#dish-description');
    description.innerText = itemDisplay.description

    const price = document.querySelector('#dish-price');
    price.innerText = `$${itemDisplay.price}`

    const name = document.querySelector('#dish-name');
    name.innerText = itemDisplay.name
}

const cartFunction = function() {
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
    const cart = document.querySelector('#number-in-cart')
    const cartAmount = document.querySelector('#cart-amount')
    cart.innerText = Number(cartAmount.value) + Number(cart.innerText)
    document.querySelector('form').reset()
    })
}

cartFunction()
