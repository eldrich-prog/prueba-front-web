import React, { useEffect, useState } from 'react';

const Product = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const API_URL = "http://192.168.50.246/dolibarr/api/index.php/products";
    const API_KEY = "b0823c2f251ab8d5c946a35da54c909ab49600c2";

    useEffect(() => {

        const optenerDatos = async () => {
            try {
                const params = new URLSearchParams({
                    limit: 5,
                    properties: 'url',
                });

                const response = await fetch(`${API_URL}?${params}`, {
                    method: "GET",
                    headers: {
                        DOLAPIKEY: API_KEY,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error('hubo un error en la solucitud');
                }
                const result = await response.json();
                setData(result)
            } catch (err) {
                setError(err.message);
            }
        };
        optenerDatos();

    }, []);

    const array_url_imagenes = []

    const mapear_images = () => {
        data.map((imagen, index) => (
            array_url_imagenes.push(imagen.url)
        ));
    }

    mapear_images();

    
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1);
    };

    return (
        <div className="mx-8 my-3 overflow-hidden shadow-xl bg-red-400 rounded-md">
            <div className="overflow-hidden mx-auto">
                <img
                    src={array_url_imagenes[currentIndex]}
                    alt={`Imagen ${currentIndex + 1}`}
                    className="w-[600px] h-[375px] sm:w-[900px] mx-auto object-cover object-center"
                />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-12 flex items-center justify-between mx-12">
                <button
                    onClick={prevImage}
                    className="bg-white text-black rounded-full p-2 shadow-lg opacity-50 hover:opacity-100 transition"
                >
                    &lt;
                </button>
                <button
                    onClick={nextImage}
                    className="bg-white text-black rounded-full p-2 shadow-lg opacity-50 hover:opacity-100 transition"
                >
                    &gt;
                </button>
            </div>
        </div>
    );

}

export default Product;