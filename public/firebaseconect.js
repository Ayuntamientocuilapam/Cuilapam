import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";


  const firebaseConfig = {
    apiKey:"AIzaSyBcSsoTmA5L02OLAYtW3X5qAR7tecl3zOM",
    authDomain:"municuilapam.firebaseapp.com",
    projectId:"municuilapam",
    storageBucket:"municuilapam.appspot.com",
    messagingSenderId:"79606120769",
    appId:"1:79606120769:web:7e3005aaa373ca8977e1c0",
    measurementId:"G-39VWLEMM21"
  };
   
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  
  export class ManageAccount {
    register(email, password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((_) => {
          window.location.href = "citas.html";
          // Mostrar alerta de registro exitoso
          alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
        })
        .catch((error) => {
          console.error(error.message);
              // Mostrar alerta de error de registro
              alert("Error al registrar: " + error.message);
        });
    }
  
    authenticate(email, password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((_) => {
          window.location.href = "citas.html";
          // Mostrar alerta de inicio de sesión exitoso
          alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
        })
        .catch((error) => {
          console.error(error.message);
                  // Mostrar alerta de error de inicio de sesión
                  alert("Error al iniciar sesión: " + error.message);
        });
    }
  
    signOut() {
      signOut(auth)
        .then((_) => {
          window.location.href = "index.html";
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }
  