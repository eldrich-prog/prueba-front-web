import { useEffect, useState } from 'react';

const ImageProducts = () => {

    const array_url_imagenes = [
        './img/publicidad1.png',
        './img/publicidad2.png',
        './img/publicidad3.png',
        './img/publicidad4.png'
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    // useEffect para cambiar de imagen cada 3 segundos
    useEffect(() => {

        const intervalo = setInterval(() => {
            setIndice((prevIndice) => (prevIndice + 1) % array_url_imagenes.length);
        }, 3000); // 3000 ms = 3 segundos

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalo);
    }, [array_url_imagenes.length]); // Dependencia para recalcular cuando las imágenes cambian


    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % array_url_imagenes.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? array_url_imagenes.length - 1 : prevIndex - 1);
    };

    return (
        <div className="relative w-full max-w-[1200px] mx-auto my-2 overflow-hidden items-left">
            <div className="overflow-hidden mx-auto">
                <img
                    src={array_url_imagenes[currentIndex]}
                    alt={`Imagen ${currentIndex + 1}`}
                    className="w-[900px] h-[375px] sm:w-[1200px] mx-auto object-cover object-center"
                />
            </div>
            <div className="absolute top-0 left-10 right-10 bottom-12 flex items-center justify-between mx-6">
                <button
                    onClick={prevImage}
                    className="bg-white text-black rounded-full p-2 shadow-lg opacity-80 hover:opacity-100 transition"
                >
                    &lt;
                </button>
                <button
                    onClick={nextImage}
                    className="bg-white text-black rounded-full p-2 shadow-lg opacity-80 hover:opacity-100 transition"
                >
                    &gt;
                </button>
            </div>
        </div>
    );

}

export default ImageProducts;