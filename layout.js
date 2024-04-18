// Load and display header.html content
// Load and display footer.html content
// Load and display about.html content
// Load and display contact.html content
window.addEventListener('DOMContentLoaded', function() {
    // Array of components to load
    const components = [
        { id: 'header', path: '../components/header.html' },
        { id: 'footer', path: '../components/footer.html' },
        { id: 'about-layout', path: '../about/about.html' },
        { id: 'contact-layout', path: '../contact/contact.html' },
        {id: 'products-layout', path: '../product/product.html'}
    ];

    // Fetch and display each component
    components.forEach(component => {
        fetch(component.path)
            .then(response => response.text())
            .then(data => {
                document.getElementById(component.id).innerHTML = data;
            })
            .catch(error => console.error(`Error loading ${component.path}:`, error));
    });
});

