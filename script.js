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


async function cargarCanciones() {
    try{
        const response = await fetch("canciones.json");
        const datos = await response.json();

        cancionesDatos = datos.cancionesTendencia;
        cancionesTendencia(cancionesDatos);

    } catch (error){
        console.error("Hubo un error cargando el JSON:", error);
    }
    
}

cargarCanciones();