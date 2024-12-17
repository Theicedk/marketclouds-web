document.addEventListener('DOMContentLoaded', function () {
  // Datos de productos (incluyendo categoría)
  const productos = [
    {
      id: 1,
      title: "Pink Floyd T-Shirt",
      category: "mujer", // Categoría de producto
      brand: "Pull & Bear - S",
      user: "jackiebo04",
      description: "Camiseta vintage de Pink Floyd...",
      price: "$30.000 CLP",
      taxInfo: "Incluye IVA (19%)",
      img: "img/pinkfloyd-tshirt.jpg"
    },
    {
      id: 2,
      title: "Nike T-Shirt",
      category: "hombre", // Categoría de producto
      brand: "Nike - M",
      user: "conchigmzz",
      description: "Camiseta deportiva Nike...",
      price: "$25.000 CLP",
      taxInfo: "Incluye IVA (19%)",
      img: "img/nike-tshirt.webp"
    },
    {
      id: 3,
      title: "Blue Sweater",
      category: "moda-diseno", // Categoría de producto
      brand: "Pull & Bear - M",
      user: "paulafemenia58",
      description: "Suéter azul perfecto para el clima frío...",
      price: "$40.000 CLP",
      taxInfo: "Incluye IVA (19%)",
      img: "img/blue-sweater.avif"
    }
  ];

  // Generar productos por categoría
  productos.forEach(producto => {
    const productCard = document.createElement('article');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <a href="producto.html?id=${producto.id}">
        <img src="${producto.img}" alt="${producto.title}">
        <div class="product-info">
          <h3>${producto.title}</h3>
          <p class="brand">${producto.brand}</p>
          <p class="user">Publicado por: <strong>${producto.user}</strong></p>
          <span class="price">${producto.price}</span>
          <span class="tax-info">${producto.taxInfo}</span>
        </div>
      </a>
      <button class="like-btn">♥</button>
    `;

    // Seleccionar la sección correspondiente
    const categorySection = document.querySelector(`#${producto.category} .product-list`);
    categorySection.appendChild(productCard);
  });

  // Funcionalidad de agregar al carrito
  document.querySelectorAll('.like-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const producto = productos[index];
      const carrito = JSON.parse(localStorage.getItem('cart')) || [];
      carrito.push(producto);
      localStorage.setItem('cart', JSON.stringify(carrito));
      alert(`Producto ${producto.title} añadido al carrito.`);
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const searchButton = document.getElementById('search-btn');
  const searchBar = document.getElementById('search-bar');

  searchButton.addEventListener('click', () => {
    const query = searchBar.value.toLowerCase();
    if (query) {
      alert(`Buscando: ${query}`);
      // Puedes implementar una búsqueda real en tus productos aquí
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {

  // Función para generar la vista de un producto
  function generarVistaProducto(producto) {
    const productCard = document.createElement('article');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <a href="producto.html?id=${producto.id}"> 
        <img src="${producto.img}" alt="${producto.title}">
        <div class="product-info">
          <h3>${producto.title}</h3>
          <p class="brand">${producto.brand}</p>
          <p class="user">Publicado por: <strong>${producto.user}</strong></p>
          <span class="price">${producto.price}</span>
          <span class="tax-info">${producto.taxInfo}</span>
        </div>
      </a>
      <button class="like-btn" data-id="${producto.id}">♥</button> 
    `;
    return productCard;
  }

  // Obtener los productos del localStorage
  let productos = JSON.parse(localStorage.getItem('products')) || [];

  // Generar productos por categoría
  productos.forEach(producto => {
    const categorySection = document.querySelector(`#${producto.category} .product-list`);
    const productCard = generarVistaProducto(producto);
    categorySection.appendChild(productCard);
  });

  // Funcionalidad de agregar al carrito (delegación de eventos)
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('like-btn')) {
      const productId = event.target.dataset.id;
      const producto = productos.find(p => p.id == productId); 
      const carrito = JSON.parse(localStorage.getItem('cart')) || [];
      carrito.push(producto);
      localStorage.setItem('cart', JSON.stringify(carrito));
      alert(`Producto ${producto.title} añadido al carrito.`);
    }
  });

  // ... código de búsqueda ...
});

document.addEventListener('DOMContentLoaded', function () {
  // Obtener los productos del localStorage
  const productos = JSON.parse(localStorage.getItem('products')) || [];

  // Generar productos por categoría
  productos.forEach(producto => {
    const categorySection = document.querySelector(`#${producto.category} .product-list`);
    
    // Crear la tarjeta de producto
    const productCard = document.createElement('article');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <a href="producto.html?id=${producto.id}">
        <img src="${producto.image}" alt="${producto.name}">
        <div class="product-info">
          <h3>${producto.name}</h3>
          <p>${producto.description}</p>
          <span class="price">${producto.price}</span>
          <span class="condition">${producto.condition}</span>
        </div>
      </a>
    `;

    // Agregar la tarjeta a la sección correspondiente
    if (categorySection) {
      categorySection.appendChild(productCard);
    }
  });
});
  
  