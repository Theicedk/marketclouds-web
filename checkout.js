document.addEventListener('DOMContentLoaded', function () {
  const cartContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  try {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    if (cart.length > 0) {
      cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('item');
        cartItem.innerHTML = `
          <span>${product.title}</span>
          <span class="price">€${product.price}</span>
          <button class="remove-btn" data-id="${product.id}">Eliminar</button>
        `;
        cartContainer.appendChild(cartItem);

        total += parseFloat(product.price.replace(/[^0-9.]/g, ''));
      });

      totalPriceElement.textContent = `€${total.toFixed(2)}`;

      // Asociar eventos a los botones "Eliminar"
      const removeButtons = document.querySelectorAll('.remove-btn');
      removeButtons.forEach(button => {
        button.addEventListener('click', () => {
          const productId = parseInt(button.dataset.id, 10); // Convertir a número
          removeItemFromCart(productId);
        });
      });
    } else {
      cartContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
    }
  } catch (error) {
    console.error("Error al obtener el carrito del localStorage:", error);
    cartContainer.innerHTML = '<p>Error al cargar el carrito.</p>';
  }

  document.getElementById('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Compra realizada con éxito.");
    localStorage.removeItem('cart');
    window.location.href = 'main.html';
  });
});

function removeItemFromCart(productId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const updatedCart = cart.filter(product => product.id !== productId); // Filtrar por ID
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  updateCartView();
}

function updateCartView() {
  const cartContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartContainer.innerHTML = '';

  if (cart.length > 0) {
    let total = 0;

    cart.forEach(product => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('item');
      cartItem.innerHTML = `
        <span>${product.title}</span>
        <span class="price">€${product.price}</span>
        <button class="remove-btn" data-id="${product.id}">Eliminar</button>
      `;
      cartContainer.appendChild(cartItem);

      total += parseFloat(product.price.replace(/[^0-9.]/g, ''));
    });

    totalPriceElement.textContent = `€${total.toFixed(2)}`;
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productId = parseInt(button.dataset.id, 10);
        removeItemFromCart(productId);
      });
    });
  } else {
    cartContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
    totalPriceElement.textContent = '€0.00';
  }
}

