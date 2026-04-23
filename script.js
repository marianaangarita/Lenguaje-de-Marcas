async function cargarDatos() {
    const response = await fetch("videojuegos.json");
    const datos = await response.json();

    const contenedor = document.getElementById("contenedor");
    datos.videojuegos.froEach(videojuego => {
        contenedor.innerHTML += `
        <div>
            <h2>${videojuego.titulo}</h2>
            <p>Precio: ${videojuego.precio} €</p>
        </div>
        `;
    });
}

cargarDatos();