function verificarRespuesta() {
    // La respuesta correcta
    const respuestaCorrecta =["alohas", "zumba"];
    // Obtener el valor ingresado por el usuario
    const respuestaUsuario = document.getElementById("respuesta").value.trim().toLowerCase();
    // Elemento donde se mostrará el resultado
    const resultado = document.getElementById("resultado");

    // Verificar si la respuesta es correcta
    if (respuestaCorrecta.includes(respuestaUsuario)) {
        resultado.textContent = "¡Correcto! ¡Bien hecho!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Incorrecto, intenta de nuevo.";
        resultado.style.color = "red";
    }
}
function saltarAdivinanza() {
    if (confirm("¿Estás seguro de que deseas saltar la adivinanza? PERDERAS 10 PUNTOS")) {
        window.location.href="index.html";
    } else {
        alert("¡Se que tu puedes!");
    }
}
function ayuda() {
    alert("Es 1 palabra, muy conocida en Hawai");
}
function seguir() {
    const respuestascorrectas = ["alohas", "zumba"];
    const respuesta = document.getElementById("respuesta").value.trim().toLowerCase(); // Obtener la respuesta ingresada por el usuario
        if (respuestascorrectas.includes(respuesta)) { // Verificar si la respuesta es correcta
            const paginaactual = window.location.pathname;
            if (paginaactual.endsWith("jugar.html")){
                window.location.href = "jugar2.html";
            }else {
                window.location.href = "jugar.html";
            }
        } else {
            alert("Debes completar primero esta adivinanza antes de avanzar.");
        }
}