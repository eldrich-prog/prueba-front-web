// src/App.js
import {useEffect, useState} from 'react';
import Navbar from "./Navbar";
import NarrowCarousel from "./NarrowCarousel";
import ImageProducts from "./Products";
import Footer from "./footer";
import AlertProduct from "./Alerta";

import {
  Typography,
} from "@material-tailwind/react";



// Define la URL de la API y la clave
const API_URL = "http://ThinkCentre/dolibarr/api/index.php/products";
const API_KEY = "b0823c2f251ab8d5c946a35da54c909ab49600c2";

const listProductsCar = [];

// eslint-disable-next-line react-refresh/only-export-components
export const getProductsCar = () => {
  return listProductsCar;
};

function DatosApi() {

  const [data, setData] = useState([]); // Estado para almacenar los datos
  const [loading, setLoading] = useState(true); // Estado de carga
  const [cart, setProduct] = useState(0);
  const [alertaVisible, setAlertaVisible] = useState(false);
  const [alerProducto, setAlertProduct] = useState(null);

  const addProduct = (product) => {
    listProductsCar.push(product);
  }

  const agregarAlCarrito = (item) => {
    setProduct(cart + 1);
    setAlertProduct(item);
    setAlertaVisible(true);
    addProduct(item);
    setTimeout(() => {
      setAlertaVisible(false);
    }, 2500);


  };

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
        let result = await response.json();
        result = result.filter(item => item.url !== null);
        result = result.filter(item => item.status !== "0");
        console.log(result);
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
    <div className="bg-gray-50">
      <Navbar cart={cart} data={data}></Navbar>
      <div className="pt-16">
        <ImageProducts />
      </div>

      <div className="px-10 py-2">
        <NarrowCarousel />
      </div>
      <div className="p-6  min-h-screen">
        <h1 className="text-2xl font-bold mx-12">PRODUCTOS</h1>
        {loading ? (
          <p className="text-center text-gray-500">Cargando productos...</p>
        ) : (
          <div className="p-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-4">
            {data.map((item) => (
              <div
                className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                key={item.id}
              >
                <img
                  src={item.url}
                  alt={item.label}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                />
                <div className="m-3  ">
                  <Typography
                    color="blue-gray"
                    className="text-base sm:text-base md:text-lg font-medium text-gray-800"
                  >
                    {String(item.label).charAt(0).toUpperCase() +
                      String(item.label).slice(1)}
                  </Typography>
                  <div className="flex justify-end">
                    <Typography
                      color="red"
                      className="text-base sm:text-base md:text-lg font-medium text-red-700"
                    >
                      ${parseInt(item.price, 10).toFixed(2)}
                    </Typography>
                  </div>
                </div>
                <div className="m-4">
                  <Typography
                    maxL
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                  >
                    {String(item.note_public).charAt(0).toUpperCase() + String(item.note_public).slice(1, 35)}...
                  </Typography>
                  <button
                    onClick={() => agregarAlCarrito(item)}
                    className="w-full bg-yellow-400 text-black rounded-lg py-2 mt-4 hover:bg-yellow-700htji"
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer></Footer>
      {alertaVisible && <AlertProduct product={alerProducto} />}
    </div>
  );
}

export default DatosApi;
