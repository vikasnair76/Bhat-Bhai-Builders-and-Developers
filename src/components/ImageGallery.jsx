import React, { useState } from "react";
import "./ImageGallery.css";

const ImageGallery = ({ data, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data.imageUrl.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data.imageUrl.length - 1 : prevIndex - 1
    );
  };

  const handleClose = () => {
    onClose(); // Invoke the onClose callback provided by the parent component
  };

  return (
    <div className="image-gallery-overlay" onClick={handleClose}>
      <div className="image-gallery" onClick={(e) => e.stopPropagation()}>
        <div className="image-container">
          <img src={data.imageUrl[currentImageIndex]} alt="" />
          <div className="image-text">
            <div className="image-title">{data.title}</div>
            <div className="image-info">
              <span>Location</span> : {data.location}
            </div>
            <div className="image-info">
              <span>Project Type</span> : {data.info}
            </div>
          </div>
        </div>
        <button className="prev" onClick={handlePrevious}>
          &#10094;
        </button>
        <button className="next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
