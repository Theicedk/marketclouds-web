document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  const productos = {
    1: {
      id: 1, // Añadimos el id explícito al objeto
      title: "Pink Floyd T-Shirt",
      brand: "Pull & Bear - S",
      price: "$30.000 CLP",
      img: "img/pinkfloyd-tshirt.jpg",
    },
    2: {
      id: 2,
      title: "Nike T-Shirt",
      brand: "Nike - M",
      price: "$25.000 CLP",
      img: "img/nike-tshirt.webp",
    },
    3: {
      id: 3,
      title: "Blue Sweater",
      brand: "Pull and Bear - M",
      price: "$40.000 CLP",
      img: "img/blue-sweater.avif",
    },
  };
  

  const product = productos[productId];

  if (product) {
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-brand').textContent = product.brand;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('product-img').src = product.img;

    document.getElementById('add-to-cart').addEventListener('click', function () {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product); // Agregamos el producto con el id
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${product.title} añadido al carrito`);
    });

    document.getElementById('buy-now').addEventListener('click', function () {
      const cart = [product];
      localStorage.setItem('cart', JSON.stringify(cart));
      window.location.href = 'checkout.html';
    });
  } else {
    document.body.innerHTML = "<h1>Producto no encontrado</h1>";
  }
});
