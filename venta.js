document.getElementById('sell-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los datos del formulario
  const productName = document.getElementById('product-name').value;
  const productPrice = document.getElementById('product-price').value;
  const productDescription = document.getElementById('product-description').value;
  const productCondition = document.getElementById('product-condition').value;
  const productCategory = document.getElementById('product-category').value;
  const productImage = document.getElementById('product-image').files[0];

  // Validación de campos vacíos
  if (!productName || !productPrice || !productDescription || !productCondition || !productImage) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Leer el archivo de imagen
  const reader = new FileReader();
  reader.onload = function(event) {
    const newProduct = {
      id: Date.now(), // Generar un ID único basado en el tiempo
      name: productName,
      price: `€${productPrice}`,
      description: productDescription,
      condition: productCondition,
      category: productCategory,
      image: event.target.result // Base64 de la imagen
    };

    // Guardar en localStorage
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    // Mostrar mensaje de éxito
    document.getElementById('success-message').style.display = 'block';

    // Redirigir a "main.html" después de 2 segundos
    setTimeout(function() {
      window.location.href = 'main.html';
    }, 2000);
  };

  reader.readAsDataURL(productImage); // Convertir la imagen a Base64
});
