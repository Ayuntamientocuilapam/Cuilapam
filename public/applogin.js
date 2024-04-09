
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Importa el módulo de autenticación

const firebaseConfig = {

    apiKey: "AIzaSyBcSsoTmA5L02OLAYtW3X5qAR7tecl3zOM",
  
    authDomain: "municuilapam.firebaseapp.com",
  
    projectId: "municuilapam",
  
    storageBucket: "municuilapam.appspot.com",
  
    messagingSenderId: "79606120769",
  
    appId: "1:79606120769:web:7e3005aaa373ca8977e1c0",
  
    measurementId: "G-39VWLEMM21"
  
  };
  


// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Función para iniciar sesión
function iniciarSesion(email, password) {
  const auth = getAuth(); // Obtiene el objeto de autenticación
  signInWithEmailAndPassword(auth, email, password) // Utiliza signInWithEmailAndPassword del objeto auth
    .then((userCredential) => {
      // El usuario ha iniciado sesión correctamente
      const user = userCredential.user;
      // Redirige al usuario a la página de citas
      window.location.href = "citas.html";
    })
    .catch((error) => {
      // Ha ocurrido un error durante el inicio de sesión
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const btnIniciarSesion = document.getElementById('btnIniciarSesion');
    btnIniciarSesion.addEventListener('click', function() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        iniciarSesion(email, password);
    });
});

