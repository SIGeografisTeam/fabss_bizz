// app.js
async function fetchProducts() {
    const response = await fetch("http://localhost:8081/products");
    const products = await response.json();
    displayProducts(products);
}

function displayProducts(products) {
    const productContainer = document.querySelector("#product-list");
    productContainer.innerHTML = ''; // Bersihkan konten lama

    products.forEach(product => {
        productContainer.innerHTML += `
            <div class="product" id="product-${product.id}">
                <h2 class="name">${product.name}</h2>
                <p class="price">${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>`;
    });
}

fetchProducts();
