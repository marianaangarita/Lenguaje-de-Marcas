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

    let colorFondo;

    lista.forEach(unAlumno => {

        if(unAlumno.notaMedia >= 5){
            colorFondo = "lightgreen";
        }else{
            colorFondo = "lightcoral";
        }

        contenedor.innerHTML += `
        <tr style="background-color: ${colorFondo}">
            <td>
                ${unAlumno.nombre}
            </td>
            <td>
                ${unAlumno.edad}
            </td>
            <td>
                ${unAlumno.curso}
            </td>
            <td>
                ${unAlumno.notaMedia}
            </td>
        </tr>
        `
    });
}

document.getElementById("btnTodos").addEventListener("click", () => {
    mostrarAlumnos(alumnos);
});

document.getElementById("btnAprobados").addEventListener("click", () => {
    let aprobados = alumnos.filter(unAlumno => unAlumno.notaMedia >= 5);

    mostrarAlumnos(aprobados);
});

cargarAlumnos();