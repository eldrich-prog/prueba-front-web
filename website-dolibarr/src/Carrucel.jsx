import { useState } from 'react';

const ImageCarousel = () => {
  const images = [
    'https://via.placeholder.com/600x300/FF5733/fff?text=Imagen+1',
    'https://via.placeholder.com/600x300/33FF57/fff?text=Imagen+10',
    'https://via.placeholder.com/600x300/3357FF/fff?text=Imagen+3',
    'https://via.placeholder.com/600x300/FF33A1/fff?text=Imagen+4',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative mx-8 my-3">
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-4">
        <button
          onClick={prevImage}
          className="bg-white text-black rounded-full p-2 shadow-lg opacity-75 hover:opacity-100 transition"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="bg-white text-black rounded-full p-2 shadow-lg opacity-75 hover:opacity-100 transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
