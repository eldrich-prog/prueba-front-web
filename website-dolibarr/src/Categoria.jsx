import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import axios from "axios";
import { Typography } from "@material-tailwind/react";

// Datos de ejemplo para las categorías
const categories = [
  {
    id: 1,
    name: "Papeleria",
    image: "https://via.placeholder.com/150x150?text=Electrónica",
  },
  {
    id: 2,
    name: "Oficina",
    image: "https://via.placeholder.com/150x150?text=Ropa",
  },
  {
    id: 3,
    name: "Escolar",
    image: "https://via.placeholder.com/150x150?text=Hogar",
  },
  {
    id: 4,
    name: "Computo",
    image: "https://via.placeholder.com/150x150?text=Deportes",
  },
  {
    id: 5,
    name: "Arte y Diseño",
    image: "https://via.placeholder.com/150x150?text=Juguetes",
  },
];

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

function QueryCategoryApi({ id_category }) {
  const [products, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            DOLAPIKEY: API_KEY,
          },
        });
        let result = response.data;
        result = result.filter((item) => item.url !== null);
        result = result.filter((item) => item.status !== "0");
        result = result.filter((item) => item.stock_reel >= 1);
        setData(result);
        console.log(result);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!products) return <p>Cargando...</p>;

  return (
    <div>
      <div className="min-h-screen">
        <div className="my-6">
          <h1 className="text-2xl font-semibold text-center">PRODUCTOS</h1>
        </div>
        {loading ? (
          <span className="text-center text-gray-500">
            Cargando productos...
          </span>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 grid-flow-row gap-x-4 gap-y-6 mx-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 items-center "
              >
                <div className="border-2 rounded-md p-2">
                  <img
                    src={product.url}
                    alt={product.label}
                    className="w-30 h-40 sm:h-40 md:h-45 lg:h-52 mx-auto "
                  />
                </div>
                <div className="m-3">
                  <Typography
                    color="blue-gray"
                    className="text-base sm:text-base md:text-lg font-medium text-gray-800"
                  >
                    {String(product.label).charAt(0).toUpperCase() +
                      String(product.label).slice(1)}
                  </Typography>
                  <div className="flex justify-between">
                    <div className="text-left">
                      <Typography
                        className="font-normal opacity-55"
                      >
                        Stock: {parseInt(product.stock_reel)}
                      </Typography>
                    </div>
                    <div className="text-right">
                      <Typography
                        color="red"
                        className="text-base sm:text-base md:text-lg font-medium text-red-700"
                      >
                        ${parseInt(product.price, 10).toFixed(2)}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="m-4">
                  <Typography
                    maxL
                    variant="small"
                    color="gray"
                    className="font-normal opacity-55"
                  >
                    {String(product.note_public).charAt(0).toUpperCase() +
                      String(product.note_public).slice(1, 30)}
                    ...
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
    </div>
  );
}

const CategoryList = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-12 flex">
        <div className="container my-10 mx-2 p-4 w-1/4 bg-gray-50 border-2">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Categorías de Productos
          </h2>
          <div className="flex flex-col w-full space-y-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex justify-center rounded-md "
              >
                <button className=" bg-gray-200 shadow-lg min-w-full py-4 rounded-md">
                  <h1 className="font-semibold">{category.name}</h1>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="container my-10 mx-2 pt-4 w-3/4 border-2">
          <QueryCategoryApi id_category={1}></QueryCategoryApi>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CategoryList;
