const formulario = document.getElementById("formularioContacto");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");

// Espacios que podrian contener los errores
const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorMensaje = document.getElementById("errorMensaje");


const confirmacion = document.getElementById("confirmacion");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();
    confirmacion.style.display = "none";

    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorMensaje.textContent = "";
    confirmacion.textContent = "";

    let valido = true;

    // Validaciones
    if (nombre.value.trim() === "") {
        errorNombre.textContent = "Debe ingresar su nombre.";
        valido = false;
    }

     if (correo.value.trim() === "") {
        errorCorreo.textContent = "Debe ingresar su correo.";
        valido = false;
    }
     else if (!correo.value.includes("@") || !correo.value.includes(".")) {
        errorCorreo.textContent = "Debe ingresar un correo válido.";
        valido = false;
    }

       if (mensaje.value.trim() === "") {
        errorMensaje.textContent = "Debe ingresar un mensaje.";
        valido = false;
    }

    // Si todo está correcto
    if (valido === true) {

        confirmacion.style.display = "block";
        confirmacion.textContent =
        "¡Gracias por contactarnos! Nos pondremos en contacto contigo :D.";

        formulario.reset();
    }

});