function cambiaridioma() {
    // Obtener el valor del idioma seleccionado
    var idiomaSeleccionado = document.querySelector('input[name="idioma"]:checked').value;

    console.log("Idioma seleccionado:", idiomaSeleccionado);

    // Redirigir a la página correspondiente
    if (idiomaSeleccionado === "Ingles") {
        window.location.href = "Jugar.html"; // Reemplaza 'pagina_en_ingles.html' con la URL de la página en inglés
    } else if (idiomaSeleccionado === "español") {
        window.location.href = "jugar2.html"; // Reemplaza 'pagina_en_espanol.html' con la URL de la página en español
    }
}

function saltarAdivinanza() {
    if (confirm("¿Estás seguro de que deseas saltar la adivinanza? PERDERAS 10 PUNTOS")) {
        const paginaactual = window.location.pathname;
        if (paginaactual.endsWith("Jugar.html")){
            window.location.href = "jugar2.html";
        }else {
            window.location.href = "Jugar.html";
        }
    } else {
        alert("¡Se que tu puedes!");
    }
}
function ayuda() {
    const paginaactual = window.location.pathname;
    if (paginaactual.endsWith("Jugar.html")){
        alert("Es 1 palabra, muy conocida en Hawai");
    }else {
        alert("Clase de ejercicios aeróbicos que involucra baile y música.");
    }
}
function seguir() {
    // La respuesta correcta
    const respuestaCorrecta =["aloha", "zumba"];
    // Obtener el valor ingresado por el usuario
    const respuestaUsuario = document.getElementById("respuesta").value.trim().toLowerCase();
    // Elemento donde se mostrará el resultado
    const resultado = document.getElementById("resultado");

        if (respuestaCorrecta.includes(respuestaUsuario)) { // Verificar si la respuesta es correcta
            const paginaactual = window.location.pathname;
            if (paginaactual.endsWith("Jugar.html")){
                window.location.href = "jugar2.html";
            }else {
                window.location.href = "Jugar.html";
            }
        } else {
            resultado.textContent = "Incorrecto, intenta de nuevo.";
            resultado.style.color = "red";
        }
}
