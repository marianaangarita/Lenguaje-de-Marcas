let canciones = [];

function cancionesTendencia(lista){
    const canciones = document.getElementById("contenedor-canciones");

    lista.forEach(cancion =>{
        if (Array.isArray(cancion.nombreArtista)){

            canciones.innerHTML += `
        
        <div class="brilloGris">
                <img class="flechaVerde" src="svg/flechaVerde.svg" alt="flechaVerde">
                <img src= ${cancion.src} alt="portada de música">
                <h3 class="textDecoration"> ${cancion.nombreCancion}</h3>
                <div class="E">
                <div class="explicit">E</div>
                <p class="textDecoration">${cancion.nombreArtista[0]},</p>
                </div>
                <p class="textDecoration">${cancion.nombreArtista.slice(1).join(", ")}</p>
        </div>
        
        `
        }else{
            canciones.innerHTML += `
            
            <div class="brilloGris">
                <img class="flechaVerde" src="svg/flechaVerde.svg" alt="flechaVerde">
                <img src=${cancion.src} alt="portada de música">
                <h3 class="textDecoration">${cancion.nombreCancion}</h3>
                <div class="E">
                    <div class="explicit">E</div>
                        <p class="textDecoration">${cancion.nombreArtista}</p>
                    </div>

            </div>
            `
        }
        
    });
}

function artistasPopulares(lista){
    const artistas = document.getElementById("contenedor-artistas");

    lista.forEach(artista => {

        artistas.innerHTML += `
            <div class="brilloGris">
                <img class="flechaVerde" src="svg/flechaVerde.svg" alt="flechaVerde">
                <img src=${artista.srcPopular} alt="portada de música">
                <h3 class="textDecoration">${artista.nombreArtistaPopular}</h3>
                <p>Artista</p>
            </div>
        `
    });

}

function albumesPopulares(lista){
    const albumnes = document.getElementById("contenedor-albumnes");

    lista.forEach(album => {
        if (Array.isArray(album.nombreArtista)){

            albumnes.innerHTML += `
                <div class="brilloGris">
                    <img class="flechaVerde" src="svg/flechaVerde.svg" alt="flechaVerde">
                    <img src=${album.srcAlbum} alt="portada de música">
                    <h3 class="textDecoration">${album.titulo}</h3>
                    <p class="textDecoration">${album.nombreArtista.join(", ")}</p>
                </div>
            `
        }else{
            albumnes.innerHTML += `
                <div class="brilloGris">
                    <img class="flechaVerde" src="svg/flechaVerde.svg" alt="flechaVerde">
                    <img src=${album.srcAlbum} alt="portada de música">
                    <h3 class="textDecoration">${album.titulo}</h3>
                    <p class="textDecoration">${album.nombreArtista}</p>
                </div>
            `
        }
    });
}
function emisorasPopulares(lista){
    const emisoras = document.getElementById("emisoras-populares");

    lista.forEach(emisora => {

        emisoras.innerHTML += `
            <div class="brilloGris">
                <img class="flechaVerde" src="svg/flechaVerde.svg" alt="flechaVerde">
                <img src=${emisora.scrEmisoras} alt="portada de música">
                    <div>
                        ${emisora.artistas.map(artista => `<p>${artista}</p>`).join("")}
                    </div>
            </div>
        
        `
    });
}
function listasSeleccionadas(lista){
    const listasSeleccionadas = document.getElementById("listas-seleccionadas");

    lista.forEach(lisSelec => {

        listasSeleccionadas.innerHTML += `
           <div class="brilloGris">
                <img class="flechaVerde" src="svg/flechaVerde.svg" alt="flechaVerde">
                <img src=${lisSelec.srcListas} alt="portada de música">
                    <div>
                        ${lisSelec.titulo.map(titulo => `<p>${titulo}</p>`).join("")}
                    </div>

            </div> 
        `
    });
}

function formulario(datos){
    let tituloFormulario = document.getElementById("titulo-formulario");
    tituloFormulario.textContent = datos.login.titulo;

    let tituloLabelemail = document.getElementById("label-email");
    tituloLabelemail.textContent = datos.login.labelEmail;

    let tituloLabelpass = document.getElementById("label-pass");
    tituloLabelpass.textContent = datos.login.labelPassword;

    let tituloBotonFormulario = document.getElementById("boton-formulario");
    tituloBotonFormulario.textContent = datos.login.boton;

    let formulario = document.getElementById("div-formulario");

    let BotonInicio = document.getElementById("JSBotonInicioSesion");

    BotonInicio.addEventListener("click", (e) => {
        e.stopPropagation();
        formulario.style.display ="flex";
    });

    BotonCrearLista = document.getElementById("JSCrearLista");

    BotonCrearLista.addEventListener("click", (e) => {
        e.stopPropagation();
        formulario.style.display ="flex";
    });

    let BotonFlechaVerde = document.querySelectorAll(".flechaVerde");

    for (let i=0; i < BotonFlechaVerde.length; i++){
        BotonFlechaVerde[i].addEventListener("click", (e) => {
            e.stopPropagation();
            formulario.style.display ="flex";
        });
    };

    document.addEventListener("click", function(e) {
    if (!e.target.closest("#div-formulario")) {
        formulario.style.display = "none";
    }
    });

    let emailInput = document.querySelector("#email1");
    let contrasenaInput = document.querySelector("#pass1");

    let listaUsuarios = datos.registro;

    function validarUsuario(listaUsuarios, emailInput, contrasenaInput) {
    const usuarioEncontrado = listaUsuarios.find(usuario => 
        usuario.correo === emailInput && usuario.contrasena === contrasenaInput
    );

    return usuarioEncontrado; 
    
    }

    formulario.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    let form = document.getElementById("Rellenar-formulario");

    let emailError = document.getElementById("emailSpan");

    let passError = document.getElementById("passwordSpan");
    
    let errorGeneral = document.getElementById("ErrorGeneral");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (validarUsuario(listaUsuarios, emailInput.value, contrasenaInput.value)){

            BotonInicio.textContent = "Cerrar Sesión";

            formulario.style.display = "none";

        }else {
            if (emailInput.value === ""){
                emailError.textContent = "Email Incorrecto";
                emailError.style.color = "red";
                emailError.style.fontWeight = "bold";
            }
            if (contrasenaInput.value === ""){
                passError.textContent = "Contraseña Incorrecta";
                passError.style.color = "red";
                passError.style.fontWeight = "bold";
            }
            if (emailInput.value !== "" && contrasenaInput.value !== ""){
                errorGeneral.textContent = "Usuario y contraseña no coinciden";
                errorGeneral.style.color = "red";
                errorGeneral.style.fontWeight = "bold";
            }
        }
    });

}


async function cargarCanciones() {
    try{
        const response = await fetch("canciones.json");
        const datos = await response.json();

        cancionesDatos = datos.cancionesTendencia;
        cancionesTendencia(cancionesDatos);

        artistasPopularesDatos = datos.artistasPopulares;
        artistasPopulares(artistasPopularesDatos);

        albumesPopularesDatos = datos.albumesPopulares;
        albumesPopulares(albumesPopularesDatos);

        emisorasPopularesDatos = datos.emisorasPopulares;
        emisorasPopulares(emisorasPopularesDatos);

        listasSeleccionadasDatos = datos.listasSeleccionadas;
        listasSeleccionadas(listasSeleccionadasDatos);

        formulario(datos);

    } catch (error){
        console.error("Hubo un error cargando el JSON:", error);
    }
    
}

cargarCanciones();