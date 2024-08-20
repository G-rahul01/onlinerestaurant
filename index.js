let shoppingCart = [];
let total = 0;

function addToCart(product, price) {
    // Retrieve existing cart items from local storage
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // Add the new item to the cart
    shoppingCart.push({ product, price });

    // Save the updated cart back to local storage
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));

    // Show a message using SweetAlert2
    Swal.fire({
        title: 'Success!',
        text: `Your item "${product}" was added to the cart.`,
        icon: 'success',
        confirmButtonText: 'OK'
    })
}

function updateCart() {
    // Save cart data in local storage for persistence
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    displayCart();
}

function displayCart() {
    const cartItemsElement = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');

    // Retrieve cart data from local storage
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);

        // Display cart items and calculate total
        let total = 0;
        cartItemsElement.innerHTML = "";
        shoppingCart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.product} - ₹${item.price}`;
            cartItemsElement.appendChild(listItem);
            total += item.price;
        });

        // Display total
        cartTotalElement.textContent = total.toFixed(2);
        return total;
    }
}

function checkout() {
    var total = displayCart();
    alert(`Total: ₹${total.toFixed(2)}\nThank you for shopping with us!`);
    shoppingCart = [];
    total = 0;
    updateCart();
    location.reload();
}

// Display the cart contents on page load
displayCart();


