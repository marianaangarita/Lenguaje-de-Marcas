function formulario(){
    let iniciarSesion = document.getElementById("btn-acceso");
    let modal = document.getElementById("modal-overlay");
    let cerrar = document.getElementById("cerrar-modal");

    iniciarSesion.addEventListener("click", function() {
        modal.classList.remove("oculto");
    });

    cerrar.addEventListener("click", function() {
        modal.classList.add("oculto");
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

