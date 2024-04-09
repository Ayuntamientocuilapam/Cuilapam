// Importa las funciones necesarias de Firebase Authentication
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";

// Verifica la autenticación al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene una instancia del objeto de autenticación de Firebase
    const auth = getAuth();

    // Observa el estado de la autenticación
    onAuthStateChanged(auth, (user) => {
        // Si hay un usuario autenticado, user será el objeto de usuario; de lo contrario, será null
        if (user) {
            // El usuario está autenticado, puedes permitir el acceso a la página
            console.log("Usuario autenticado:", user);
        } else {
            // El usuario no está autenticado, redirige a la página de inicio de sesión
            console.log("Usuario no autenticado. Redireccionando a la página de inicio de sesión...");
            window.location.href = "login.html";
        }
    });
});
