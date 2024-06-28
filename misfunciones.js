/**
 * Pregunta al usuario si desea saltar la adivinanza y redirige a una nueva página si confirma.
 * Si el usuario decide no saltar, muestra un mensaje de ánimo.
 * @function saltarAdivinanza
 * @returns {void}
 */
const saltarAdivinanza = () => {
    if (confirm("¿Estás seguro de que deseas saltar la adivinanza?")) {
        const paginaactual = window.location.pathname;
        if (paginaactual.endsWith("Jugar.html")) {
            window.location.href = "jugar2.html";
        } else {
            window.location.href = "Jugar.html";
        }
    } else {
        alert("¡Se que tu puedes!");
    }
}

/**
 * Brinda una pista al ususario
 * @method ayuda
 * @return {void}
 */
const ayuda = () => {
    const paginaactual = window.location.pathname;
    if (paginaactual.endsWith("Jugar.html")) {
        alert("Es 1 palabra, muy conocida en Hawai.");
    } else {
        alert("Clase de ejercicios aeróbicos que involucra baile y música.");
    }
}

/**
 * A partir de los valores ingresados decide si puedes avanzar o no.
 * @method seguir
 * @return {void}
 */
const seguir = () => {
    // La respuesta correcta
    const respuestaCorrecta = ["aloha", "zumba"];
    // Obtener el valor ingresado por el usuario
    const respuestaUsuario = document.getElementById("respuesta").value.trim().toLowerCase();
    // Elemento donde se mostrará el resultado
    const resultado = document.getElementById("resultado");

    if (respuestaCorrecta.includes(respuestaUsuario)) { // Verificar si la respuesta es correcta
        const paginaactual = window.location.pathname;
        if (paginaactual.endsWith("Jugar.html")) {
            window.location.href = "jugar2.html";
        } else {
            window.location.href = "Jugar.html";
        }
    } else {
        resultado.textContent = "Incorrecto, intenta de nuevo.";
        resultado.style.color = "red";
    }
}

//matematica
/**
 * Calculadora: perimte sumar dos elementos.
 * @method calcularsuma
 * @return {void}
 */
const calcularsuma = () => {
    var num1, num2;
    num1 = document.getElementsByName("sum_num1")[0].value;
    num2 = document.getElementsByName("sum_num2")[0].value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Se ingresó un valor inválido.");
        document.getElementsByName("sum_num1")[0].value = "";
        document.getElementsByName("sum_num2")[0].value = "";
    } else {
        document.getElementsByName("sum_total")[0].innerHTML = Number(num1) + Number(num2);
    }
}

/**
 * Calculadora: perimte restar dos elementos.
 * @method calcularresta
 * @return {void}
 */
const calcularresta = () => {
    var num1, num2;
    num1 = document.getElementsByName("res_num1")[0].value;
    num2 = document.getElementsByName("res_num2")[0].value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Se ingresó un valor inválido.");
        document.getElementsByName("res_num1")[0].value = "";
        document.getElementsByName("res_num2")[0].value = "";
    } else {
        document.getElementsByName("res_total")[0].innerHTML = Number(num1) - Number(num2);
    }
}

/**
 * Realiza una multiplicación utilizando los valores ingresados en dos campos y muestra el resultado.
 * Si alguno de los valores ingresados no es numérico, muestra una alerta y limpia los campos.
 * @function calcularmul
 * @returns {void}
 */
const calcularmul = () => {
    var num1, num2;
    num1 = document.getElementsByName("mul_num1")[0].value;
    num2 = document.getElementsByName("mul_num2")[0].value;
    if (isNaN(num1) || isNaN(num2)) {
        alert("Se ingresó un valor inválido.");
        document.getElementsByName("mul_num1")[0].value = "";
        document.getElementsByName("mul_num2")[0].value = "";
    } else {
        document.getElementsByName("mul_total")[0].innerHTML = Number(num1) * Number(num2);
    }
}

/**
 * Realiza una división utilizando los valores ingresados en dos campos y muestra el resultado.
 * Si alguno de los valores ingresados no es numérico, muestra una alerta y limpia los campos.
 * @function calculardiv
 * @returns {void}
 */
const calculardiv = () => {
    var num1, num2;
    num1 = document.getElementsByName("div_num1")[0].value;
    num2 = document.getElementsByName("div_num2")[0].value;
    if (isNaN(num1) || isNaN(num2)) {
        alert("Se ingresó un valor inválido.");
        document.getElementsByName("div_num1")[0].value = "";
        document.getElementsByName("div_num2")[0].value = "";
    } else {
        document.getElementsByName("div_total")[0].innerHTML = Number(num1) / Number(num2);
    }
}

//canva
/**
 * Mini-Paint: Permite realizar un dibujo en un lienzo interactivo.
 * @function dibujar
 * @param {MouseEvent} event - El evento de mouse que desencadenó la función.
 * @returns {void}
 */
var bandera;

const dibujar = (event) => {
    var canvas = document.getElementById("canvasadibujar");
    var ctx = canvas.getContext("2d");

    var rect = canvas.getBoundingClientRect();
    var posx = event.clientX - rect.left;
    var posy = event.clientY - rect.top;
    console.log(posx, posy);

    canvas.onmousedown = function(){bandera = true};
    canvas.onmouseup = function(){bandera = false};
    if(bandera) {
        ctx.fillRect(posx, posy, 5, 5);
        ctx.fill;
    }
}

/**
 * Limpia el lienzo del Mini-Paint, elimina todos los trazos realizados.
 * @function limpiarcanvas
 * @returns {void}
 */
const limpiarcanvas = () => {
    var canvas = document.getElementById("canvasadibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

/**
 * Cambia el idioma a partir de la seleccion del usuario a traves de un radio button
 * @function idioma
 * @returns {void}
 */
const idioma = () => {
    let data = document.getElementById("idioma1");
    if (data.checked) {
        location.href = "Jugar.html";
    } else {
        location.href = "jugar2.html";
    }
}

x=0;
dx=2;
function animarAuto(){
    var canvas = document.getElementById("myCanvas2");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img = new Image();
    img.src = "imagenes/pensar.png";

    img.onload = function(){
        ctx.drawImage(img, 100, x);
    }

    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}