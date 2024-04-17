
   // Mock data for cupcakes
const cupcakes = [
    { id: 1, title: "Caja 12 cupcakes", price: "$20.00", image: "cupcakes1.jpg" },
    { id: 2, title: "Caja 12 cupcakes Dia de la Madre", price: "$20.00", image: "cupcakes2.jpg" },
    { id: 3, title: "Caja 4 cupcakes", price: "$12.00", image: "cupcakes3.jpg" },
    { id: 4, title: "Caja 6 cupcakes", price: "$15.00", image: "cupcakes4.jpg" },
    { id: 5, title: "Caja 1 Cupcake Dia de la Madre", price: "$2.50", image: "cupcakes5.jpg" },
    { id: 6,title: "Caja 12 cupcakes", price: "$20.00", image: "cupcakes5.jpg"},
    { id: 7, title: "Caja 12 cupcakes", price: "$20.00", image: "cupcakes5.jpg"},
    { id: 8, title: "Caja 12 cupcakes", price: "$20.00", image: "cupcakes1.jpg" },
];

// Mock data for wedding cakes
const weddingCakes = [
    { id: 1, title: "Cookie Monster Cake", price: "$35.00", image: "weddingcakes1.png" },
    { id: 2, title: "Erica", price: "$30.00", image: "weddingcakes2.jpg" },
    { id: 3, title: "Torta Belén", price: "$25.00", image: "weddingcakes3.jpg" },
    { id: 4, title: "Torta Gabriela", price: "$35.00", image: "weddingcakes4.png" },
    { id: 5, title: "Torta Jack", price: "$35.00", image: "weddingcakes5.png" },
    { id: 6,title: "Torta Flork San Valentín", price: "$20.00", image: "weddingcakes6.png"},
    { id: 7, title: "Torta Kitty Cat", price: "$35.00", image: "weddingcakes7.png"},
    { id: 8, title: "Verónica", price: "$35.00", image: "weddingcakes8.png" },
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
        <img src="../images/${product.image}" alt="${product.title}">
        <h4>${product.title}</h4>
        <p>${product.price}</p>
        <button class="details-button" data-id="${product.id}">Köp nu</button>
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

// Function to display product details on detailed.html
function displayProductDetails(product) {
    const productDetailsContainer = document.getElementById("product-details");
    const productDetailsElement = document.createElement("div");
    productDetailsElement.classList.add("product-details");
    productDetailsElement.innerHTML = `
        <img src="../images/${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.price}</p>
    `;
    productDetailsContainer.appendChild(productDetailsElement);
}
