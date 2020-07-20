function validar () {
    var fullname, lastname, telephone, email, password, validarEmail;
        fullname = document.getElementById("fullname");
        lastname = document.getElementById("lastname");
        telephone = document.getElementById("telephone");
        email    = document.getElementById("email");
        password = document.getElementById("password");

        //  con una expresion regular podemos validar un correo asignandole un valor
        // validarEmail =  /\w+@\w+\.+[a-z]/;

        if (fullname.value === "") {
            alert("Fill in the name field");
            // return false;
            event.preventDefault;
        }

        if (lastname.value === "") {
            alert("Fill in the surname field");
            // return false;
            

        }

        if (telephone.value === "") {
           alert("Complete the phone field");
        //    return false;
        event.preventDefault;
        }

        else if (isNaN(telephone.value)) {
            alert("el telefono ingresado no es un numero");
            event.preventDefault;
        }
        

        else if(telephone.value.length > 16) {
            alert("tu telefono no puede ser mayor a 10 caracteres");
            return false;
        }

        if (email.value === "") {
            alert("Complete the email field");
            // return false;
            event.preventDefault;
        }
        // else if (validarEmail.test(email.value)){
        //     alert("el correo no es valido");    // /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/
        //     event.preventDefault;
        // }
        email = document.getElementById("email");
        if ( !(/\w+@\w+\.+[a-z]/.test(email.value)) ) {
            alert("el correo no es valido");
            event.preventDefault;
        }

        if (password.value === "") {
            alert("Fill in the password field");
            // return false;
            event.preventDefault;
        }




        return true;
}

