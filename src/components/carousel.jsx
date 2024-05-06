import React, { useState, useEffect, useRef } from 'react';

const images = [
  '/c3.jpg',
  '/c5.jpg',
  '/c6.jpg',
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragDistance, setDragDistance] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDragStart = (e) => {
    setDragStartX(e.touches[0].clientX);
    setDragDistance(0);
  };

  const handleDragMove = (e) => {
    if (dragStartX === null) return;
    const distance = e.touches[0].clientX - dragStartX;
    setDragDistance(distance);
  };

  const handleDragEnd = () => {
    if (dragStartX === null) return;
    const threshold = containerRef.current.clientWidth / 4;
    if (dragDistance > threshold) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else if (dragDistance < -threshold) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
    setDragStartX(null);
    setDragDistance(0);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full mx-auto md:h-[490px] h-[300px] overflow-hidden shadow-lg"
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      onTouchCancel={handleDragEnd}
    >
      <div className="relative w-full md:h-[490px] h-[300px] overflow-hidden flex items-center justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            className="absolute w-full md:h-[490px] h-[300px] transition-transform duration-1000"
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              transform: `translateX(calc(${index - currentImageIndex} * 100% + ${dragDistance}px))`,
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentImageIndex ? 'bg-black' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
      <div className="absolute top-0 bottom-0 flex items-center justify-between w-full">
        <button
          onClick={() =>
            setCurrentImageIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
          }
          className="absolute top-0 bottom-0 left-0 flex items-center justify-center w-16 text-white font-semibold text-2xl shadow-lg"
        >
          &lt;
        </button>
        <button
          onClick={() =>
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
          className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-16 text-white font-semibold text-2xl shadow-lg"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
