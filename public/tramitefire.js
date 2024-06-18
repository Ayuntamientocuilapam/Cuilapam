
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

    function submitForm(e){ 
        e.preventDefault();
         // Obtener los valores del formulario
         var name = getElementVal("name");
         var correo = getElementVal('email');
         var numero = getElementVal('number');
         var fecha = getElementVal('date');
         var hora = getElementVal('time');
         var departamento = getElementVal('selectDepartamento');
         var tramite = getElementVal('selectTramite');

         saveMessages(name, correo, numero, fecha, hora, departamento, tramite);


         document.querySelector(".alert").style.display ="block";
         
         setTimeout(() =>{
            document.querySelector(".alert").style.display ="none";
         }, 3000);

         document.getElementById("citasFormDB").reset();
         }

    const saveMessages = (name, email, number, date, time, selectDepartamento, selectTramite) =>{
        var newCitasForm = citasFormDB.push();

        newCitasForm.set({
            nombre: name,
            correo: email,
            numero: number,
            fecha: date,
            hora: time,
            departamento: selectDepartamento,
            tramite: selectTramite,
        })
    };
    
    const getElementVal =(id) =>{
        return document.getElementById(id).value;
    };
       