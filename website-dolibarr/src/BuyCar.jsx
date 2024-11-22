// App.jsx
import { button } from "@material-tailwind/react";
import React, { useState } from "react";
import Footer from "./footer";

const products = [
  { id: 2, name: "Producto B", price: 150, note_public: "Es un producto bonito.", URL: "https://m.media-amazon.com/images/I/61sgXDWDjVL._AC_AA180_.jpg", stock: 5 },
  { id: 3, name: "Producto C", price: 200, note_public: "Es un producto bonito.", URL: "https://m.media-amazon.com/images/I/61sgXDWDjVL._AC_AA180_.jpg", stock: 10 },
  { id: 1, name: "Producto A", price: 100, note_public: "Es un producto bonito.", URL: "https://m.media-amazon.com/images/I/61sgXDWDjVL._AC_AA180_.jpg", stock: 10 },
];


const BuyCar = () => {



  const [cart, setCart] = useState([]);



  const addToCart = (product) => {
    let count_products = cart.filter(item => item.id === product.id).length;
    console.log(count_products);
    if (count_products < product.stock) {
      setCart([...cart, product]);
    } else {
      alert("Stock fuera de existencia");
    }
  };
  const delete_product = (id) => {
    console.log("eliminado");
    let p = setCart(prevItems => prevItems.filter(cart => cart.id !== id));
    console.log(p);
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-200 p-4">
        {/* productos */}
        <div className="flex gap-12">
          {/* Lista de productos */}
          <div className="w-3/4 bg-white">
            <h1 className="text-3xl font-bold text-center py-2">Carrito de compras</h1>
            <h2 className="text-2xl font-semibold mb-4 px-6">
              Tus Productos Favoritos
            </h2>
            <div className="space-y-2 bg-gray-200">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="p-4 bg-white flex justify-between items-center"
                >
                  <img src={product.URL} alt={product.name} />
                  <div>
                    <h3 className="font-bold">{product.name}</h3>
                    <p className="text-gray-500">${product.price}</p>
                    <span className="text-gray-500">{product.note_public}</span><br />
                    <span className="text-gray-400">Stock: {product.stock}</span>
                  </div>
                  <button
                    onClick={() => delete_product(product.id)}
                    className="hover:underline text-blue-500 font-normal text-md">
                    Eliminar
                  </button>
                  <div class="flex justify-between border-4 rounded-xl bg-yellow-200 text-lg px-auto">
                    <div ><button className="px-4 hover:bg-yellow-500 rounded-lg ">-</button></div>
                    <div className="px-7 bg-white rounded-md flex-shrink-0"><label htmlFor="">{cart.filter(item => item.id === product.id).length}</label></div>
                    <div ><button
                      onClick={() => addToCart(product)}
                      className="px-4 hover:bg-yellow-500 rounded-lg">
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
              ${cart.reduce((total, item) => total + item.price, 0)}
            </span>
            <div className="h-80">
              {cart.length === 0 ? (
                <p className="font-semibold text-xs sm:text-xs md:text-md xl:text-2xl text-black mx-6">
                  El carrito está vacío
                </p>
              ) : (
                <div className="text-center">
                  <button className="font-normal hover:bg-yellow-400 text-xs sm:text-xs md:text-md xl:text-base md:m-5 text-black bg-yellow-300 rounded-2xl py-1 px-12 text-center border-2 ">Proceder al pago</button>
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
