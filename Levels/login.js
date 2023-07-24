function redirectToGame() {
    // Obtener los valores del usuario y contraseña ingresados
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Aquí debes agregar la lógica de autenticación real
    // Por ejemplo, podrías comparar los valores con una lista de usuarios válidos
    // En una aplicación real, esto debe hacerse en el servidor, no en el cliente
  
    // Ejemplo simple de autenticación con usuario y contraseña estáticos
    const validUsername = "usuario";
    const validPassword = "contrasena";
  
    if (username === validUsername && password === validPassword) {
      // Redirigir al juego de nivel 1 (index.html) si el inicio de sesión es exitoso
      window.location.href = "index.html";
    } else {
      // Mostrar un mensaje de error si las credenciales son incorrectas
      alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
  }
  
  document.getElementById("loginBtn").addEventListener("click", redirectToGame);
  