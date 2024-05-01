import React, { useState, useEffect } from 'react';

const images = [
  '/c3.jpg',
  '/c5.jpg',
  '/c6.jpg',
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full mx-auto md:h-[490px] h-[300px] overflow-hidden shadow-lg">
      <div className="relative w-full md:h-[490px] h-[300px] overflow-hidden flex items-center justify-center">
        <div className="max-w-full md:h-[490px] h-[300px] min-w-full">
          <img
            className="w-full md:h-[490px] h-[300px] transition-opacity duration-1000"
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
          />
        </div>
      </div>
      <div className="absolute top-0 bottom-0 flex items-center justify-between w-full">
        <button
          onClick={prevImage}
          className="absolute top-0 bottom-0 left-0 flex items-center justify-center w-16 text-white font-semibold text-2xl shadow-lg"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-16 text-white font-semibold text-2xl shadow-lg"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
