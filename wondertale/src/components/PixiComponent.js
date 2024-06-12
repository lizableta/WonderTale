import React, { useRef, useEffect, useState } from 'react';

const PixiComponent = ({ image }) => {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const img = new Image();
        img.src = image;

        img.onload = () => {
          setLoaded(true);
          containerRef.current.style.backgroundImage = `url(${image})`;
        };
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImage();
  }, [image]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {!loaded && <div>Loading...</div>}
    </div>
  );
};

export default PixiComponent;
