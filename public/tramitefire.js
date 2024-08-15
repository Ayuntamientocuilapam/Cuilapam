
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
      // Manejar el envío del formulario
      document.getElementById("citasFormDB").addEventListener("submit", submitForm);
    // Evita que el formulario se envíe normalmente

    function submitForm(e) { 
        e.preventDefault();
    
        // Obtener los valores del formulario
        var name = getElementVal("name");
        var correo = getElementVal("email");
        var numero = getElementVal("number");
        var fecha = getElementVal("date");
        var hora = getElementVal("time");
    
        // Obtener el texto del departamento y trámite seleccionados
        var departamentoSelect = document.getElementById("selectDepartamento");
        var departamento = departamentoSelect.options[departamentoSelect.selectedIndex].text;
    
        var tramiteSelect = document.getElementById("selectTramite");
        var tramite = tramiteSelect.options[tramiteSelect.selectedIndex].text;
    
        saveMessages(name, correo, numero, fecha, hora, departamento, tramite);
    
        // Mostrar alerta de éxito
        document.querySelector(".alert").style.display = "block";
        
        // Ocultar la alerta después de 3 segundos
        setTimeout(() => {
            document.querySelector(".alert").style.display = "none";
        }, 3000);
    
        // Reiniciar el formulario
        document.getElementById("citasFormDB").reset();
    }
    
    const saveMessages = (name, email, number, date, time, departamento, tramite) => {
        var newCitasForm = citasFormDB.push();
    
        newCitasForm.set({
            nombre: name,
            correo: email,
            numero: number,
            fecha: date,
            hora: time,
            departamento: departamento,
            tramite: tramite,
        });
    };
    
    const getElementVal = (id) => {
        return document.getElementById(id).value;
    };
    
       