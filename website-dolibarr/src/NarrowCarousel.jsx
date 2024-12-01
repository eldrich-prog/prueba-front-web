// src/components/NarrowCarousel.js
import React, { useState, useEffect } from 'react';

const NarrowCarousel = () => {
  const messages = [
    "¡Envío gratis en todas las compras superiores a $50!",
    "Descuento del 20% en productos seleccionados hasta el fin de semana.",
    "¡Ofertas exclusivas para miembros hoy!",
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // Cambia el mensaje cada 3 segundos
    return () => clearInterval(interval);
  }, [messages.length]);

  return (

    <div className="bg-blue-500 text-white overflow-hidden from-blue-50 to-blue-100 border-1 border-blue-500 rounded-lg shadow-lg transition duration-300">
      <div className="flex justify-center items-center h-10 text-sm sm:text-base md:text-lg transition-transform transform">
        <span key={currentIndex} className="whitespace-nowrap">
          {messages[currentIndex]}
        </span>
      </div>
    </div>
  );
};

export default NarrowCarousel;
