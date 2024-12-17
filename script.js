function saveCredentials() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email && password) {
      // Guardar en el almacenamiento local del navegador
      localStorage.setItem("username", email);
      localStorage.setItem("password", password);
      alert("Credentials saved successfully!");
    } else {
      alert("Please fill in both email and password.");
    }
  }
  // Simulación de credenciales almacenadas (puedes reemplazarlas por tu lógica de backend)
const validUsername = "usuario";
const validPassword = "123456";

// Función para validar las credenciales y redirigir al marketplace
function validateLogin() {
  // Obtener valores ingresados por el usuario
  const usernameInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  // Validar credenciales
  if (usernameInput === validUsername && passwordInput === validPassword) {
    alert("¡Inicio de sesión exitoso! Redirigiendo...");
    // Redirigir a main.html
    window.location.href = "main.html";
  } else {
    // Mostrar mensaje de error
    alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
  }
}

// Variables globales para los carruseles
const carousels = {
    1: { index: 0, container: document.querySelector("#carousel1 .carousel-images") },
    2: { index: 0, container: document.querySelector("#carousel2 .carousel-images") }
  };
  
  // Función para avanzar al siguiente slide
  function nextSlide(carouselId) {
    const carousel = carousels[carouselId];
    const images = carousel.container.children;
    const totalSlides = images.length;
  
    carousel.index = (carousel.index + 1) % totalSlides;
    carousel.container.style.transform = `translateX(-${carousel.index * 310}px)`;
  }
  
  // Función para retroceder al slide anterior
  function prevSlide(carouselId) {
    const carousel = carousels[carouselId];
    const images = carousel.container.children;
    const totalSlides = images.length;
  
    carousel.index = (carousel.index - 1 + totalSlides) % totalSlides;
    carousel.container.style.transform = `translateX(-${carousel.index * 310}px)`;
  }  