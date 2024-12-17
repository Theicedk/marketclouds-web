document.getElementById('sell-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtener los datos del formulario
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productDescription = document.getElementById('product-description').value;
    const productCondition = document.getElementById('product-condition').value;
    const productImage = document.getElementById('product-image').files[0];
  
    // Validación
    if (!productName || !productPrice || !productDescription || !productCondition || !productImage) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    const reader = new FileReader();
    reader.onload = function(event) {
      const newProduct = {
        name: productName,
        price: `€${productPrice}`,
        description: productDescription,
        condition: productCondition,
        image: event.target.result, // URL de la imagen en base64
      };
  
      // Guardar el nuevo producto en el almacenamiento local
      let products = JSON.parse(localStorage.getItem('products')) || [];
      products.push(newProduct);
      localStorage.setItem('products', JSON.stringify(products));
  
      // Mostrar mensaje de éxito
      document.getElementById('success-message').style.display = 'block';
      
      // Redirigir al inicio después de 2 segundos
      setTimeout(function() {
        window.location.href = 'main.html'; // Redirigir al inicio
      }, 2000);
    };
  
    reader.readAsDataURL(productImage); // Convertir la imagen a base64
  });
  