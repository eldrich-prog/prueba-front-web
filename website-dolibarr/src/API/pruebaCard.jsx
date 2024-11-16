import React, { useState, useEffect } from "react";
const API_URL = "http://localhost/dolibarr/api/index.php/products";
const API_KEY = "b0823c2f251ab8d5c946a35da54c909ab49600c2";

function DatosApi() {
  const [data, setData] = useState([]); // Estado para almacenar los datos
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            DOLAPIKEY: API_KEY,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        const result = await response.json();
        setData(result);

      } catch (error) {
        console.error("Error al obtener los datos:", error);

      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Datos de la API</h1>
      {loading ? (
        <p className="text-center text-gray-500">Cargando...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{item.label}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DatosApi;
