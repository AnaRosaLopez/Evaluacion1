// ============================================
// URL de la API publica de Digimon
// Devuelve un arreglo con muchos Digimon
// ============================================

const API_URL = "https://digimon-api.vercel.app/api/digimon";


// ============================================
// Funcion principal asincrona
// Aqui hacemos la peticion a la API
// ============================================

async function obtenerDigimon() {

    try {

        // Hacemos la peticion usando fetch
        const respuesta = await fetch(API_URL);

        // Convertimos la respuesta a JSON
        const datos = await respuesta.json();

        // Mostramos el JSON en consola
        // Esto sirve para la captura que pide el profesor
        console.log(datos);

        // Tomamos solo los primeros 20 Digimon
        const primeros20 = datos.slice(0, 20);

        // Recorremos el arreglo
        primeros20.forEach(digimon => {
            mostrarDigimon(digimon);
        });

    } catch (error) {

        // Si ocurre un error lo mostramos en consola
        console.error("Error al obtener Digimon:", error);
    }
}


// ============================================
// Funcion para crear tarjetas dinamicamente
// Aqui manipulamos el DOM
// ============================================

function mostrarDigimon(digimon) {

    // Seleccionamos el contenedor principal
    const contenedor = document.getElementById("digimon-container");

    // Creamos un div para la tarjeta
    const card = document.createElement("div");

    // Agregamos la clase CSS
    card.classList.add("card");

    // Insertamos contenido dinamico
    card.innerHTML = `
        <img src="${digimon.img}" alt="${digimon.name}">
        <h2>${digimon.name}</h2>
        <p class="nivel">Nivel: ${digimon.level}</p>
    `;

    // Agregamos la tarjeta al contenedor
    contenedor.appendChild(card);
}


// ============================================
// Ejecutamos la funcion cuando carga la pagina
// ============================================

obtenerDigimon();
