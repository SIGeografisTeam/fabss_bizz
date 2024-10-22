// cart.js
let cart = [];

function addToCart(productId) {
    const product = {
        id: productId,
        name: document.querySelector(`#product-${productId} .name`).innerText,
        price: document.querySelector(`#product-${productId} .price`).innerText,
        quantity: 1
    };

    // Cek apakah produk sudah ada di keranjang
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
        cart[index].quantity++;
    } else {
        cart.push(product);
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.querySelector("#cart-items");
    cartItems.innerHTML = ''; // Bersihkan daftar keranjang
    cart.forEach(item => {
        cartItems.innerHTML += `<li>${item.name} - ${item.quantity} x ${item.price}</li>`;
    });
}
