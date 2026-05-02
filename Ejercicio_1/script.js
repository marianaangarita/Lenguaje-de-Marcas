async function cargarVideojuegos() {
    const response = await fetch("videojuegos.json");
    const datos = await response.json();

    const contenedor = document.getElementById("contenedor");
    datos.videojuegos.forEach(videojuego => {
       
        contenedor.innerHTML += `
        <div class="tarjeta">
            <h2>${videojuego.titulo}</h2>
            <p><b>Género</b>: ${videojuego.genero} </p>
            <p><b>Precio</b>: ${videojuego.precio} €</p>
            <p><b>Modo</b>: ${videojuego.multijugador ? "Multijugador": "Individual"}</p>

        </div>
        `;
    });
}

cargarVideojuegos();