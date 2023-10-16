// components/Carousel.js
import React, { useRef, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import images from "../importImages";
import "./Carousel.css"; // Import a CSS file for styling

const CarouselComponent = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 160; // Adjust the scroll distance as needed
        if (
          carouselRef.current.scrollLeft ===
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 3000); // Auto-scroll every 3 seconds, adjust as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Image1 ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
