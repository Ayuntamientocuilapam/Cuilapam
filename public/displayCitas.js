const firebaseConfig = {

    apiKey: "AIzaSyBcSsoTmA5L02OLAYtW3X5qAR7tecl3zOM",
    authDomain: "municuilapam.firebaseapp.com",
    databaseURL: "https://municuilapam-default-rtdb.firebaseio.com",
    projectId: "municuilapam",
    storageBucket: "municuilapam.appspot.com",
    messagingSenderId: "79606120769",
    appId: "1:79606120769:web:7e3005aaa373ca8977e1c0",
    measurementId: "G-39VWLEMM21"
  
  };
  
  firebase.initializeApp(firebaseConfig);


  var citasFormDB = firebase.database().ref("citasFormDB");
// Función para visualizar las citas
const displayCitas = () => {
    var citasTableBody = document.getElementById('citasTableBody');
    citasTableBody.innerHTML = ''; // Limpiar el cuerpo de la tabla antes de cargar las citas

    citasFormDB.once('value', (snapshot) => {
        let count = 1;
        snapshot.forEach((childSnapshot) => {
            var childData = childSnapshot.val();

            var row = document.createElement('tr');

            row.innerHTML = `
                <th scope="row">${count++}</th>
                <td>${childData.nombre}</td>
                <td>${childData.correo}</td>
                <td>${childData.numero}</td>
                <td>${childData.fecha}</td>
                <td>${childData.hora}</td>
                <td>${childData.departamento}</td>
                <td>${childData.tramite}</td>
            `;

            citasTableBody.appendChild(row);
        });
    });
};

// Llamar a displayCitas cuando se cargue la página
window.onload = displayCitas;
