document.addEventListener("DOMContentLoaded", function() {
    // Mock data for cupcakes
    const cupcakes = [
        { id: 1, title: "", price: "", image: "" },
        { id: 2, title: "", price: "", image: "" },
        { id: 3, title: "", price: "", image: "" },
        { id: 4, title: "", price: "", image: "" },
        { id: 5, title: "", price: "", image: "" },
        { id: 6, title: "", price: "", image: "" },
        { id: 7, title: "", price: "", image: "" },
        { id: 8, title: "", price: "", image: "" },
    ];

    // Mock data for wedding cakes
    const weddingCakes = [
        { id: 1, title: "", price: "", image: "" },
        { id: 2, title: "", price: "", image: "" },
        { id: 3, title: "", price: "", image: "" },
        { id: 4, title: "", price: "", image: "" },
        { id: 5, title: "", price: "", image: "" },
        { id: 6, title: "", price: "", image: "" },
        { id: 7, title: "", price: "", image: "" },
        { id: 8, title: "", price: "", image: "" },
        // Add more wedding cakes here
    ];

    // Display cupcakes
    const cupcakeContainer = document.getElementById("cupcake-container");
    cupcakes.forEach(cupcake => {
        const cupcakeElement = createProductElement(cupcake);
        cupcakeContainer.appendChild(cupcakeElement);
    });

    // Display wedding cakes
    const weddingCakeContainer = document.getElementById("wedding-cake-container");
    weddingCakes.forEach(cake => {
        const cakeElement = createProductElement(cake);
        weddingCakeContainer.appendChild(cakeElement);
    });

    // Function to create product element
    function createProductElement(product) {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="images/${product.image}" alt="${product.title}">
            <h4>${product.title}</h4>
            <p>${product.price}</p>
            <button class="details-button" data-id="${product.id}">View Details</button>
        `;
        productElement.querySelector('.details-button').addEventListener('click', function() {
            // Redirect to detailed.html with the product ID as a query parameter
            window.location.href = `detailed.html?id=${product.id}`;
        });
        return productElement;
    }

    // If detailed page
    if (window.location.pathname.includes("detailed.html")) {
        // Extract product ID from query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        // Find product details based on ID
        let productDetails;
        if (cupcakes.some(cupcake => cupcake.id === productId)) {
            productDetails = cupcakes.find(cupcake => cupcake.id === productId);
        } else if (weddingCakes.some(cake => cake.id === productId)) {
            productDetails = weddingCakes.find(cake => cake.id === productId);
        }
        // Display product details
        if (productDetails) {
            displayProductDetails(productDetails);
        } else {
            // Product not found, redirect to homepage
            window.location.href = "index.html";
        }
    }
});

// Function to display product details on detailed.html
function displayProductDetails(product) {
    const productDetailsContainer = document.getElementById("product-details");
    const productDetailsElement = document.createElement("div");
    productDetailsElement.classList.add("product-details");
    productDetailsElement.innerHTML = `
        <img src="images/${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.price}</p>
    `;
    productDetailsContainer.appendChild(productDetailsElement);
}
