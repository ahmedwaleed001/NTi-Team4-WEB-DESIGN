document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    fetch("../js/products.json")
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id == productId);
            if (product) {
                document.getElementById("product-image-area").innerHTML = `
                                    <img src="${product.image}" alt="${product.name}" />
                                `;
                document.getElementById("product-info-area").innerHTML = `
                                    <h2>${product.name}</h2>
                                    <p>${product.description}</p>
                                    <p><strong>price:</strong> ${product.price} $</p>
                                `;
            } else {
                document.getElementById("product-details").innerHTML = "no product here";
            }
        })
        .catch(() => {
            document.getElementById("product-details").innerHTML = "error loading product details.";
        });
});
