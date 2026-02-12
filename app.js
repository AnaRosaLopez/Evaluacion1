// ============================================
// URL de la API publica de Digimon
// Devuelve un arreglo con todos los Digimon
// ============================================

const API_URL = "https://digimon-api.vercel.app/api/digimon";


// ============================================
// Funcion principal asincrona
// ============================================

async function obtenerDigimon() {

    try {

        // Peticion a la API
        const respuesta = await fetch(API_URL);

        // Convertimos a JSON
        const datos = await respuesta.json();

        // Mostramos el JSON en consola
        console.log(datos);

        // Recorremos TODOS los Digimon sin limitar
        datos.forEach(digimon => {
            mostrarDigimon(digimon);
        });

    } catch (error) {

        console.error("Error al obtener Digimon:", error);
    }
}


// ============================================
// Funcion para crear tarjetas dinamicamente
// ============================================

function mostrarDigimon(digimon) {

    const contenedor = document.getElementById("digimon-container");

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${digimon.img}" alt="${digimon.name}">
        <h2>${digimon.name}</h2>
        <p class="nivel">Nivel: ${digimon.level}</p>
    `;

    contenedor.appendChild(card);
}


// ============================================
// Ejecutamos la funcion
// ============================================

obtenerDigimon();
