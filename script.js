document.querySelector("#form").addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = event.target.name.value;
    const userLastNames = event.target.lastnames.value;
    const userEmail = event.target.email.value;
    const userPhoneNumber = event.target.number.value;
    const userContactReason = event.target.reason.value;

    let errorMessage = "";

    // Validación del nombre

    if(userName == "") {
        errorMessage += "Introduce tu nombre para continuar\n";
    } else {
        if(userName.length < 5) {
            errorMessage += "Tu nombre debe contener al menos 5 letras\n";
        }
    }

    // Validación de los apellidos

    if(userLastNames == "") {
        errorMessage += "Introduce tus apellidos para continuar\n";
    } else {
        if(userLastNames.length < 6) {
            errorMessage += "Tus apellidos deben contener al menos 6 letras\n";
        }
    }

    // Validación del mail

    if(userEmail == "") {
        errorMessage += "Introduce tu correo electrónico para continuar\n";
    } else {
        if(!userEmail.endsWith(".com")) {
            errorMessage += "Tu correo electrónico debe finalizar en .com\n";
        }
    }

    // Validación del número de teléfono

    if(userPhoneNumber == "") {
        errorMessage += "Introduce tu número de teléfono para continuar\n";
    }
    document.querySelector("#hidden-message").innerHTML = errorMessage;
    document.querySelector("#hidden-message").classList.toggle("shown-message");

    console.log(errorMessage)
});