/*A partir de este proyecto anterior, añade Javascript (de la forma más adecuada, como se ha explicado en clase) para incluir estas interacciones:
Al hacer click en cualquier elemento enlace del header, cambia el estilo de dicho elemento para mostrarse subrayado el texto.
En el topbar, al lado del título (cubix) debe añadirse un texto personalizado cada vez que hagas click en un enlace. Por ejemplo: "Has hecho click en Imágenes". Intenta hacer esto de la forma más óptima y modular posible. 
Al hacer click en cualquiera de las card que conforman en flexbox inferior (el de los distintos productos) se debe cambiar la imagen de fondo que hay en la section inicio por una cualquiera de tu elección.*/

let enlaceActive = document.querySelector(".navbar .active");

enlaceActive.style.textDecoration = "none";

enlaceActive.style.borderBottom = "0";

let enlaces = document.querySelectorAll(".navbar a");

let textoCubix = document.querySelector(".topbar")

let mensaje = document.createElement("span");

textoCubix.appendChild(mensaje)

for (let i=0; i < enlaces.length; i++) {
    enlaces[i].addEventListener("click", function() {
       for (var j=0; j < enlaces.length; j++){
        enlaces[j].style.textDecoration = "none";
       }
        this.style.textDecoration = "underline";
        mensaje.textContent= "Has hecho click en " + this.textContent;   
    });
};

let tarjeta = document.querySelectorAll(".card");
let portada = document.querySelector(".inicio img");

let imagenes = ["img/ratonV2.jpg", "img/pantallaV2.jpg", "img/hddV2.png", "img/portatilV3.jpg"]; 

for (let i=0; i < tarjeta.length; i++){
    tarjeta[i].addEventListener("click", function(){
        portada.src = imagenes[i];
    });
};

portada.style.maxHeight= "20rem";