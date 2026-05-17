let iniciarSesion = document.getElementById("btn-acceso");

let modal = document.getElementById("modal-overlay");

let cerrar = document.getElementById("cerrar-modal");

let errorEmail = document.querySelector(".msg-error-email");

let email = document.getElementById("modal-email");

let errorContrasena = document.querySelector(".msg-error-password");

let contrasena = document.getElementById("modal-pass");

let form = document.getElementById("form-login");

let errorGeneral = document.getElementById("modal-error-general");

let regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;



async function formulario(){ //si vas a hcaer fetch la funcion tiene que ser async
    
    const responseUsuarios = await fetch("data/usuarios.json");
    const datosUsuarios = await responseUsuarios.json();

    iniciarSesion.addEventListener("click", function() {
        modal.classList.remove("oculto"); //quitas una clase
    });

    cerrar.addEventListener("click", function() {
        modal.classList.add("oculto"); //añades una clase
    });

    form.addEventListener("submit", function(e){ // se lo aplicamos al id del formulario

        e.preventDefault();

        errorContrasena.textContent = "";

        errorEmail.textContent = "";

        errorGeneral.textContent = "";

        let matchEmail = false;

        let matchContrasena = false;
        
        if (regex.test(email.value)){
            for (let i = 0; i < datosUsuarios.usuarios.length; i++) {

            if (datosUsuarios.usuarios[i].email == email.value && datosUsuarios.usuarios[i].password == contrasena.value){

                matchEmail = true;
                matchContrasena = true;
            }
        }
        };

        if (contrasena.value === ""){ // para saber lo que escribe el usuario es muy importante que pongas .value sino no lo detecta

            errorContrasena.textContent = "Debes rellenar el campo contraseña";

        }if (email.value === ""){ 

            errorEmail.textContent = "Debes rellenar el campo email";

        }else if (!regex.test(email.value)){ 

            errorEmail.textContent = "Formato email no válido";

        }else if (matchEmail && matchContrasena){

            modal.classList.add("oculto");

        }else{

            if (email.value !== "" && contrasena.value !== "") {

                errorGeneral.textContent = "Usuario y contraseña no coinciden";
            }
        };

    });
}

async function cargarCatalogo(){
    const response = await fetch("data/catalogo.json"); //fijate bien en la ruta de carpetas del json
    const datos = await response.json();// nunca olvides poner el prentesis en el json

    const listaProductos = document.getElementById("lista-productos");

    datos.productos.forEach(p =>{

        listaProductos.innerHTML += `
            <div class = "card">
             <img src = ${p.imagen} alt = ${p.nombre}>
             <div class = "card-body">
                <h3>${p.nombre}</h3>
                <p class = "precio"> ${p.precio} €</p>
                <p class = "extra">${p.categoria}</p>
             </div>
            </div>
        `;
    });

}

cargarCatalogo();//recuerda llamar siempre la función sino no va a funcionar 

formulario();

function clickNav(){

    let enlaces = document.querySelectorAll(".nav-enlace");//recuerda siempre poner el . cuando es una clase
    let mensaje = document.getElementById("nav-contexto");

    for( let i = 0; i < enlaces.length; i++) {

        enlaces[i].addEventListener("click", function() {

            for (let j = 0; j < enlaces.length; j++){

                enlaces[j].classList.remove("subrayado");

            }
            this.classList.add("subrayado");
            mensaje.textContent = "Has hecho click en " + this.textContent;
        });
    }

}

clickNav();

