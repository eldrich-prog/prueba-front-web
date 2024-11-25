// App.jsx
import { button } from "@material-tailwind/react";
import React, { useState } from "react";
import Footer from "./footer";
import { getProductsCar } from "./App";

const products = getProductsCar();

const BuyCar = () => {
  console.log(products);

  const [cart, setCart] = useState(products);
  const addToCart = (product) => {
    let count_products = cart.filter((item) => item.id === product.id).length;
    console.log(count_products);
    if (count_products < product.stock_reel) {
      setCart([...cart, product]);
    } else {
      alert("Stock fuera de existencia");
    }
  };
  const delete_product = (id) => {
    console.log("eliminado");
    let p = setCart((prevItems) => prevItems.filter((cart) => cart.id !== id));
    console.log(p);
  };

  const filtrados = Object.values(
    cart.reduce((acumulador, actual) => {
      acumulador[actual.id] = actual; // Sobrescribe el valor existente
      return acumulador;
    }, {})
  );
  console.log(filtrados)

  return (
    <div>
      <div className="min-h-screen bg-gray-200 p-4">
        {/* productos */}
        <div className="flex gap-12">
          {/* Lista de productos */}
          <div className="w-3/4 bg-white">
            <h1 className="text-3xl font-bold text-center py-2">
              Carrito de compras
            </h1>
            <h2 className="text-2xl font-semibold mb-4 px-6">
              Tus Productos Favoritos
            </h2>
            <div className="space-y-2 bg-gray-200">
              {filtrados.map((product) => (
                <div
                  key={product.id}
                  className="p-4 bg-white flex justify-between items-center"
                >
                  <img
                    src={product.url}
                    alt={product.label}
                    className=" h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{product.label}</h3>
                    <p className="text-gray-500">
                      ${parseFloat(product.price).toFixed(2)}
                    </p>
                    <span className="text-gray-500">  {String(product.note_public).charAt(0).toUpperCase() + String(product.note_public).slice(1,35)}...</span>
                    <br />
                    <span className="text-gray-400">
                      Stock: {product.stock_reel}
                    </span>
                  </div>
                  <button
                    onClick={() => delete_product(product.id)}
                    className="hover:underline text-blue-500 font-normal text-md"
                  >
                    Eliminar
                  </button>
                  <div className="flex justify-between border-4 rounded-xl bg-yellow-200 text-lg px-auto">
                    <div>
                      <button className="px-4 hover:bg-yellow-500 rounded-lg ">
                        -
                      </button>
                    </div>
                    <div className="px-7 bg-white rounded-md flex-shrink-0">
                      <label htmlFor="">
                        {cart.filter((item) => item.id === product.id).length}
                      </label>
                    </div>
                    <div>
                      <button
                        onClick={() => addToCart(product)}
                        className="px-4 hover:bg-yellow-500 rounded-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-yellow-300 text-black px-5 py-1 rounded-2xl hover:bg-yellow-500 border-2"
                  >
                    Agregar al carrito
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Carrito */}
          <div className="w-auto h-40 bg-white rounded-md p-4">
            <h2 className="font-base h-auto text-xs sm:text-sm md:text-md xl:text-xl  text-black m-2">
              Subtotal ({cart.length} productos):
            </h2>
            <span className="font-semibold h-auto text-xs sm:text-sm md:text-md xl:text-xl  text-black m-2">
              ${cart.reduce((total, item) => total + parseFloat(item.price), 0)}
            </span>
            <div className="h-80">
              {cart.length === 0 ? (
                <p className="font-semibold text-xs sm:text-xs md:text-md xl:text-2xl text-black mx-6">
                  El carrito está vacío
                </p>
              ) : (
                <div className="text-center">
                  <button className="font-normal hover:bg-yellow-400 text-xs sm:text-xs md:text-md xl:text-base md:m-5 text-black bg-yellow-300 rounded-2xl py-1 px-12 text-center border-2 ">
                    Proceder al pago
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 pt-5">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default BuyCar;
