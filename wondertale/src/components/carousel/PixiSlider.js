import React, { useState, useEffect } from 'react';
import './PixiSlider.css'; // Import CSS for styling

const PixiSlider = ({ images }) => {
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

  const imageStyles = {
    display: 'block',
    margin: '0 auto', // Center horizontally
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', textAlign: 'center' }}>
      <div className="slider-container" style={{ overflow: 'hidden' }}>
        <div className="slider">
          <div className="slider-content">
            {images.map((image, index) => (
              <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`} style={{ display: index === currentIndex ? 'block' : 'none', width: '600px', height: '300px' }}>
                <img src={image} alt={`Slide ${index}`} style={imageStyles} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="arrows-container"> {/* Container for the arrows */}
        <button className="prev" onClick={goToPrevious}>
          <i className="fas fa-chevron-left"></i> {/* Icon for previous */}
        </button>
        <button className="next" onClick={goToNext}>
          <i className="fas fa-chevron-right"></i> {/* Icon for next */}
        </button>
      </div>
      <div className="slider-info" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="slider-title">Introduction to the Collection</h2>
        <p className="slider-description">
          Welcome to our magical world of stories! Dive into a delightful collection of books that ignite young imaginations and foster a love for reading. Each book is carefully selected to bring joy and learning to every child's day.
        </p>
        <div className="slider-dots">
          {images.map((_, index) => (
            <span key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => goToSlide(index)}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PixiSlider;
