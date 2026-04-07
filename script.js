/*Vamos a añadir validación de forma exclusiva con Javasscript a un formulario (más adelante aprenderemos a combinar validación html + JS).
Toma el html y CSS aportados para añadir el código JS requerido para hacer lo siguiente:

1) Se debe comprobar, mientras el usuario introduce caracteres, que el email introducido en el segundo campo es igual al introducido en el primer campo. Si no lo es, aprovecha el span inferior para añadir un mensaje de error. Si lo es, el mensaje de error desaparece.
2) Se debe comprobar, mientras el usuario introduce caracteres, que la contraseña introducida en el segundo campo es igual la introducida en el primer campo. Si no lo es, aprovecha el span inferior para añadir un mensaje de error. Si lo es, el mensaje de error desaparece.
3) Se debe comprobar, al enviar el formulario, las siguientes validaciones. Cualquiera que no la pase, se debe añadir como un texto en el span final, errorValidacionFinal:
El email contiene una arroba.
La contraseña tiene al menos seis caracteres.
La edad es mayor que 18.
El dni es válido. Usa el regex:  ^\d{8}[A-HJ-NP-TV-Z]$ 
El teléfono tiene exactamente 9 caracteres.
Se ha escogido una opción del select.
Se ha marcado el check. Usa la propiedad .checked
4) Cualquier campo de input que no pase la validación final del submit debe recibir un borde rojo. Las que sí la pasen deben recibir un borde verde. Aprovecha las clases existentes en el CSS.*/


let primerEmail = document.getElementById("email1");

let segundoEmail = document.getElementById("email2");

let errorEmail = document.getElementById("errorMail");

segundoEmail.addEventListener("input", function(){

    if( primerEmail.value != segundoEmail.value){
        errorEmail.textContent = "El primer email no coincide con el segundo"
    }
    else{
         errorEmail.textContent = ""
    }
});

let primeraContrasena = document.getElementById("pass1");

let segundaContrasena = document.getElementById("pass2");

let errorContrasena = document.getElementById("errorPass");

segundaContrasena.addEventListener("input", function(){

    if( primeraContrasena.value != segundaContrasena.value){
        errorContrasena.textContent = "El campo de repetir contraseña no coincide con la contraseña original"
    }
    else{
         errorContrasena.textContent = ""
    }
});

let formulario = document.getElementById("formulario");

let error = document.getElementById("errorValidacionFinal");

let edad = document.getElementById("edad");

let dni = document.getElementById("dni");

let telefono = document.getElementById("telefono");

let regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

let regexDNI = /^\d{8}[A-HJ-NP-TV-Z]$/;

let select = document.getElementById("opciones");

let checkbox = document.getElementById("condiciones");


formulario.addEventListener("submit", function(event){
    event.preventDefault();
    if(! regexEmail.test(primerEmail.value)){
        error.textContent = "El email no tiene la estructura adecuada, prueba a poner un @";
        primerEmail.classList.add("error");
    }
    else{
        error.textContent = "";
        primerEmail.classList.remove("error");
        primerEmail.classList.add("ok");
    }
    if(primeraContrasena.value.length < 6){
        error.textContent = "La contraseña debe tener al menos 6 caracteres";
        primeraContrasena.classList.add("error");
    }
    else{
        error.textContent = "";
        primeraContrasena.classList.remove("error");
        primeraContrasena.classList.add("ok");
    }
    if(edad.value < 18){
        error.textContent = "Tienes que tener al menos 18 años";
        edad.classList.add("error");
    }
    else{
        error.textContent = "";
        edad.classList.remove("error");
        edad.classList.add("ok");
    }
    if(! regexDNI.test(dni.value)){
        error.textContent = "Formato de DNI no válido";
        dni.classList.add("error");
    }
    else{
        error.textContent = "";
        dni.classList.remove("error");
        dni.classList.add("ok");
    }
    if(telefono.value.length != 9){
        error.textContent = "Número de caracteres no válido";
        telefono.classList.add("error");
    }
    else{
        error.textContent = "";
        telefono.classList.remove("error");
        telefono.classList.add("ok");
    }
    if(select.value == ""){
        error.textContent = "Debes pinchar una opción en el select";
        select.classList.add("error");
    }
    else{
        error.textContent = "";
        select.classList.remove("error");
        select.classList.add("ok");
    }
    if(checkbox.checked == false){
        error.textContent = "Debes marcar una casilla en el checkbox";
        checkbox.classList.add("error");
    }
    else{
        error.textContent = "";
        checkbox.classList.remove("error");
        checkbox.classList.add("ok");
    }


});