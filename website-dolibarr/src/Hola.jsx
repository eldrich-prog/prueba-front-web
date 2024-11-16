import React from "react";

import Navbar from "./Navbar";
import NarrowCarousel from "./NarrowCarousel";
import App from "./App";
import BuyCar from "./BuyCar";
import InfoCard from "./InfoCar";


export default function Index() {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-300">
                <NarrowCarousel />
                <App />
                <BuyCar />
            </div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <InfoCard
                title="Producto X"
                description="Este es un producto de alta calidad con múltiples características y beneficios."
                />
            </div>
        </div>
    );
}