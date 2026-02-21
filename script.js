// Check if user is logged in
const currentUser = localStorage.getItem('currentUser');
if (currentUser) {
    // Update UI to show user is logged in
    const userData = JSON.parse(currentUser);
    const userIcon = document.querySelector('a[href="login.html"]');
    if (userIcon) {
        userIcon.setAttribute('title', 'Hola, ' + userData.name);
        userIcon.querySelector('span')?.remove();
    }
}

// Update cart count on page load
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartBadges = document.querySelectorAll('#cart-count');
    cartBadges.forEach(badge => {
        badge.textContent = count;
        if (count > 0) {
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    });
    
    // Show checkout button in cart if items exist
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        if (count > 0) {
            checkoutBtn.classList.remove('hidden');
        } else {
            checkoutBtn.classList.add('hidden');
        }
    }
}

// Call on load
document.addEventListener('DOMContentLoaded', updateCartCount);