let alumnos = [];

async function cargarAlumnos() {
    const response = await fetch("alumnos.json");
    const datos = await response.json();

    alumnos = datos.alumnos;
    mostrarAlumnos(alumnos);
}

function mostrarAlumnos(lista) {
    let contenedor = document.getElementById("tabla-alumnos");

    contenedor.textContent = "";

    lista.forEach(unAlumno => {
        contenedor.innerHTML += `
        <tr>
            <td>
                <b>Nombre: </b> ${unAlumno.nombre}
            </td>
            <td>
                <b>Edad: </b> ${unAlumno.edad}
            </td>
            <td>
                <b>Curso: </b> ${unAlumno.curso}
            </td>
            <td>
                <b>Nota Media: </b> ${unAlumno.notaMedia}
            </td>
        </tr>
        `
    });
}

document.getElementById("btnTodos").addEventListener("click", () => {

});

document.getElementById("btnAprobados").addEventListener("click", () => {

});

cargarAlumnos();