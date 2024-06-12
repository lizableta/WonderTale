import React, { useRef, useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';

const PixiComponent = ({ images }) => {
  const containerRef = useRef(null);
  const [app, setApp] = useState(null);

  useEffect(() => {
    // Initialize PIXI application
    const app = new PIXI.Application({ width: 800, height: 600, transparent: true });
    containerRef.current.appendChild(app.view);
    setApp(app);

    // Load images
    const loader = new PIXI.Loader();
    images.forEach((image, index) => {
      loader.add(`image-${index}`, image);
    });
    loader.load((loader, resources) => {
      // Create sprites for each image
      images.forEach((_, index) => {
        const sprite = new PIXI.Sprite(resources[`image-${index}`].texture);
        sprite.visible = index === 0; // Show the first image, hide others
        app.stage.addChild(sprite);
      });
    });

    // Slide functionality
    let currentIndex = 0;
    const goToNextSlide = () => {
      app.stage.children[currentIndex].visible = false;
      currentIndex = (currentIndex + 1) % images.length;
      app.stage.children[currentIndex].visible = true;
    };

    const interval = setInterval(goToNextSlide, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return <div ref={containerRef}></div>;
};

export default PixiComponent;
