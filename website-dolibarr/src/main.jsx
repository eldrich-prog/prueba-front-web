import * as React from "react";
import * as ReactDOM from "react-dom/client";


import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import "./index.css";
import Index from "./Hola";
import BuyCar from "./BuyCar";
import Navbar from "./Navbar";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Index></Index></div>,
  },
  {
    path: "/carrito",
    element: <div className="bg-gray-400"><Navbar/><BuyCar/></div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);