// ============================================
// URL de la API de Gravity Falls
// Esta API devuelve un arreglo con personajes
// ============================================

const API_URL = "https://gravityfallsapi.vercel.app/api/characters";


// ============================================
// Funcion principal asincrona
// Aqui hacemos la peticion a la API
// ============================================

async function obtenerPersonajes() {

    try {

        // Hacemos la peticion usando fetch
        const respuesta = await fetch(API_URL);

        // Convertimos la respuesta a formato JSON
        const datos = await respuesta.json();

        // Mostramos el JSON en consola
        // Esto es importante para la captura del profesor
        console.log(datos);

        // Tomamos solo los primeros 20 personajes
        const primeros20 = datos.slice(0, 20);

        // Recorremos el arreglo
        primeros20.forEach(personaje => {
            mostrarPersonaje(personaje);
        });

    } catch (error) {

        // Si ocurre un error lo mostramos en consola
        console.error("Error al obtener personajes:", error);
    }
}


// ============================================
// Funcion para crear tarjetas dinamicamente
// Aqui manipulamos el DOM
// ============================================

function mostrarPersonaje(personaje) {

    // Seleccionamos el contenedor principal
    const contenedor = document.getElementById("character-container");

    // Creamos un div para la tarjeta
    const card = document.createElement("div");

    // Agregamos la clase CSS
    card.classList.add("card");

    // Insertamos contenido dinamico usando template literals
    card.innerHTML = `
        <img src="${personaje.image}" alt="${personaje.name}">
        <h2>${personaje.name}</h2>
        <p><strong>Genero:</strong> ${personaje.gender || "Desconocido"}</p>
        <p><strong>Especie:</strong> ${personaje.species || "Desconocida"}</p>
        <p><strong>Ocupacion:</strong> ${personaje.occupation || "No disponible"}</p>
        <p class="descripcion">
            ${personaje.description || "Sin descripcion disponible."}
        </p>
    `;

    // Agregamos la tarjeta al contenedor principal
    contenedor.appendChild(card);
}


// ============================================
// Ejecutamos la funcion cuando carga la pagina
// ============================================

obtenerPersonajes();
