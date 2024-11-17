// src/App.js
import React, { useState, useEffect } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

// Define la URL de la API y la clave
const API_URL = "http://192.168.50.246/dolibarr/api/index.php/products";
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
    <div className="p-6 bg-gray-300 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">PRODUCTOS</h1>
      {loading ? (
        <p className="text-center text-gray-500">Cargando productos...</p>
      ) : (
        <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-4">
          {data.map((item) => (
            <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105" key={item.id}>
              <img
                src={item.url}
                alt={item.label}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
              />

              <div className="m-3 flex items-center justify-between">
                <Typography
                  color="blue-gray"
                  className="text-base sm:text-base md:text-lg font-medium text-gray-800"
                >
                  {item.label}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="text-base sm:text-base md:text-lg font-medium text-gray-700"
                >
                  ${parseInt(item.price, 10).toFixed(2)}
                </Typography>
              </div>
              <div className="m-4">
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal opacity-75"
                >
                  {item.description}
                </Typography>
                <button
                  className="w-full bg-yellow-400 text-black rounded-lg py-2 mt-4 hover:bg-yellow-700htji">
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DatosApi;
