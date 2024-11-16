// Define la URL de la API y la clave
const API_URL = 'http://localhost/dolibarr/api/index.php/products';
const API_KEY = 'b0823c2f251ab8d5c946a35da54c909ab49600c2';

// Función para realizar la solicitud
async function fetchData() {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'DOLAPIKEY': API_KEY, // Autorización con Bearer Token (si la API lo requiere
        'Content-Type': 'application/json' // Tipo de contenido
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data; // Procesa la respuesta
  } catch (error) {
    console.error('Error al consumir la API:', error);
  }
}

// Llama a la función
fetchData();
