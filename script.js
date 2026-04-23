async function cargarVideojuegos() {
    const response = await fetch("videojuegos.json");
    const datos = await response.json();

    const contenedor = document.getElementById("contenedor");
    datos.videojuegos.forEach(videojuego => {
        contenedor.innerHTML += `
        <div>
            <h2></h2>
        </div>
        
        `
    })
}

cargarVideojuegos();