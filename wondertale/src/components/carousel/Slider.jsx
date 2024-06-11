import React, { useState, useEffect } from 'react';
import './slider.scss';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <button className="prev" onClick={goToPrevious}>
          &#10094;
        </button>
        <div className="slider-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <button className="next" onClick={goToNext}>
          &#10095;
        </button>
      </div>
      <div className="slider-info">
        <h2 className="slider-title">Introduction to the Collection</h2>
        <p className="slider-description">
          Welcome to our magical world of stories! Dive into a delightful collection of books that ignite young imaginations and foster a love for reading. Each book is carefully selected to bring joy and learning to every child's day.
        </p>
        <div className="slider-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
