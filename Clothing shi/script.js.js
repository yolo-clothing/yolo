JavaScript


// Show the selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Add items to the cart
function addToCart(product) {
    const cartItems = document.getElementById('cart-items');
    if (cartItems.innerHTML.includes('No items in the cart.')) {
        cartItems.innerHTML = '';
    }
    const listItem = document.createElement('li');
    listItem.textContent = product;
    cartItems.appendChild(listItem);
}