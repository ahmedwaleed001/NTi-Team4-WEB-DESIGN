//get datas from products.json


let products = null;
if (localStorage.getItem('products')) {
    products = JSON.parse(localStorage.getItem('products'));
    showProducts('donuts');
} else {
    fetch('./js/products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            showProducts('donuts');
        });
}

function showProducts(category = 'all') {
    const listProduct = document.querySelector('.listProduct');
    if (!listProduct || !products) return;
    listProduct.innerHTML = '';
    let filtered = (category === 'all')
        ? products
        : products.filter(p => p.category === category);

    let rowDiv = null;
    filtered.forEach((product, idx) => {
        if (idx % 4 === 0) {
            rowDiv = document.createElement('div');
            rowDiv.className = 'product-row';
            listProduct.appendChild(rowDiv);
        }
        const productDiv = document.createElement('div');
        productDiv.className = 'product-card product-item';
        productDiv.setAttribute('data-category', product.category);
        productDiv.innerHTML = `
            <div class="card-img-wrap product-link" style="cursor:pointer;" data-id="${product.id}">
                <img src="${product.image}" alt="${product.name}" class="product-img" />
            </div>
            <h3 class="product-title product-link" style="cursor:pointer;" data-id="${product.id}">${product.name}</h3>
            <span class="product-price">${product.price} $</span>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <span class="cart-icon">🛒</span> Add to Cart
            </button>
        `;
        productDiv.querySelectorAll('.product-link').forEach(el => {
            el.addEventListener('click', function () {
                window.location.href = `./pages/details.html?id=${product.id}`;
            });
        });
        rowDiv.appendChild(productDiv);
    });
}

function filterMenu(category) {
    showProducts(category);
}
