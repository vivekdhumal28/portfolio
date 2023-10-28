import React, { useState, useEffect, useCallback } from "react";
import { images } from "../importImages";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "./Carousel.css";

function CarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = images.length;

  const visibleImageCount = calculateVisibleImageCount();
  function calculateVisibleImageCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1025) {
      return 7;
    } else if (screenWidth >= 769) {
      return 5;
    } else if (screenWidth >= 481) {
      return 3;
    } else {
      return 1;
    }
  }

  const nextSlide = useCallback(() => {
    if (currentIndex < totalImages - visibleImageCount) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }, [currentIndex, totalImages, visibleImageCount]);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalImages - visibleImageCount);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  const visibleImages = images.slice(
    currentIndex,
    currentIndex + visibleImageCount
  );

  return (
    <div className="containerC">
      <h1>Frontend Skills</h1>
      <div className="image-sliderC">
        <button className="btn" onClick={prevSlide}>
          {<BiChevronLeft />}
        </button>
        <div className="slider-contentC">
          {visibleImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image1 ${index + 1}`}
              className={`carousel-image ${index === 0 ? "active" : ""}`}
            ></img>
          ))}
        </div>
        <button className="btn" onClick={nextSlide}>
          {<BiChevronRight />}
        </button>
      </div>
    </div>
  );
}

export default CarouselComponent;
