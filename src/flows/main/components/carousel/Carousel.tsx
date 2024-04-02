import React from "react";
import "./carousel.css";
import useCarousel from "./hooks/useCarousel";

const Carousel = ({ images }) => {
  const { currentImageIndex, goToPreviousImage, goToNextImage, goToImage } =
    useCarousel({ images });

  return (
    <div className="carousel">
      <div className="image-container">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>
      <div className="controls">
        <button onClick={goToPreviousImage}>&#10094;</button>
        <button onClick={goToNextImage}>&#10095;</button>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentImageIndex ? "dot active" : "dot"}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
