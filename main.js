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
      price: "€2000",
      taxInfo: "Incluye IVA (19%)",
      img: "https://via.placeholder.com/300x400?text=Producto+1"
    },
    {
      id: 2,
      title: "Nike T-Shirt",
      category: "hombre", // Categoría de producto
      brand: "Nike - M",
      user: "conchigmzz",
      description: "Camiseta deportiva Nike...",
      price: "€5000",
      taxInfo: "Incluye IVA (19%)",
      img: "https://via.placeholder.com/300x400?text=Producto+2"
    },
    {
      id: 3,
      title: "Blue Sweater",
      category: "moda-diseno", // Categoría de producto
      brand: "Pull & Bear - M",
      user: "paulafemenia58",
      description: "Suéter azul perfecto para el clima frío...",
      price: "€4000",
      taxInfo: "Incluye IVA (19%)",
      img: "https://via.placeholder.com/300x400?text=Producto+3"
    }
    // Otros productos...
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


  
  