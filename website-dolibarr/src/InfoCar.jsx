// InfoCard.jsx
import React from "react";

const InfoCard = ({ title, description }) => {
  return (
    <div className="max-w-xs mx-auto bg-gray-200 shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>

      <div className="flex justify-end mt-5">
        <button className="text-red-500 hover:text-red-700 font-semibold underline">
          Ver mi carrito...
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
