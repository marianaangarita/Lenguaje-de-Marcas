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

        let tituloFormulario = document.getElementById("titulo-formulario");
        tituloFormulario.textContent = datos.login.titulo;

        let tituloLabelemail = document.getElementById("label-email");
        tituloLabelemail = datos.login.labelEmail;

        let tituloLabelpass = document.getElementById("label-pass");
        tituloLabelpass = datos.login.labelPassword;

    } catch (error){
        console.error("Hubo un error cargando el JSON:", error);
    }
    
}

cargarCanciones();