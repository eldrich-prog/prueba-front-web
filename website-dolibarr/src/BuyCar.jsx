// App.jsx
import { button } from "@material-tailwind/react";
import React, { useState } from "react";

const products = [
  { id: 1, name: "Producto A", price: 100 },
  { id: 2, name: "Producto B", price: 150 },
  { id: 3, name: "Producto C", price: 200 },
];

const BuyCar = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-4">
      {/* productos */}
      <h1 className="text-3xl font-bold mb-8 text-start">Carrito</h1>
      <div className="flex gap-12">
        {/* Lista de productos */}
        <div className="w-3/4">
          <h2 className="text-xl font-semibold mb-4">
            Tus Productos Favoritos
          </h2>
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-4 bg-white shadow rounded flex justify-between items-center"
              >
                <div>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-gray-500">${product.price}</p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Carrito */}
        <div className="w-1/4 bg-white rounded-md p-2">
          <h2 className="font-semibold text-xs sm:text-sm md:text-md xl:text-2xl  text-black m-2">
            Subtotal ({cart.length} productos): $
            {cart.reduce((total, item) => total + item.price, 0)}
          </h2>
          <div className="space-y-6">
            {cart.length === 0 ? (
              <p className="font-semibold text-xs sm:text-xs md:text-md xl:text-2xl  text-black m-4">
                El carrito está vacío
              </p>
            ) : (
              <div className="font-semibold text-xs sm:text-xs md:text-md xl:text-2xl md:m-5 text-black my-5 mx-2 bg-yellow-400 rounded-md py-1 text-center">
                <button className="font-medium">Proceder al pago</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCar;
