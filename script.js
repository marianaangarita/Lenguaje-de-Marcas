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

