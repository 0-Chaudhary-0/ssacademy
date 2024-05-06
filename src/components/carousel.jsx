import React, { useState, useEffect, useRef } from 'react';

const images = [
  '/c3.jpg',
  '/c5.jpg',
  '/c6.jpg',
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3500); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isDragging]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDistance(0);
  };

  const handleDragMove = (e) => {
    if (isDragging) {
      const distance = e.clientX - dragStartX;
      setDragDistance(distance);
      const threshold = containerRef.current.clientWidth / 4;
      if (distance > threshold) {
        prevImage();
        setIsDragging(false);
      } else if (distance < -threshold) {
        nextImage();
        setIsDragging(false);
      }
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full mx-auto md:h-[490px] h-[300px] overflow-hidden shadow-lg"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      <div className="relative w-full md:h-[490px] h-[300px] overflow-hidden flex items-center justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            className="absolute w-full md:h-[490px] h-[300px] transition-opacity duration-1000"
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              transform: `translateX(${index === currentImageIndex ? dragDistance : 0}px)`,
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
  