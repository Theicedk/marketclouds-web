document.addEventListener('DOMContentLoaded', function () {
  const cartContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  let total = 0;

  if (cart.length > 0) {
    cart.forEach(product => {
      const cartItem = document.createElement('div');
      cartItem.innerHTML = `
        <p>${product.title} - ${product.price}</p>
      `;
      cartContainer.appendChild(cartItem);

      total += parseFloat(product.price.replace('€', ''));
    });

    totalPriceElement.textContent = `€${total.toFixed(2)}`;
  } else {
    cartContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
  }

  document.getElementById('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault();

    alert("Compra realizada con éxito.");
    localStorage.removeItem('cart');
    window.location.href = 'main.html';
  });
});
