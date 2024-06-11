import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './flipbook.scss';

const Flipbook = () => {
  const pages = [
    '/page1.png',
    '/page2.png',
    '/page3.png',
    '/page4.png',
    '/page5.png',
    '/page6.png',
    '/page7.png',
    '/page8.png',
    '/page9.png',
    '/page11.png',
    '/page10.png',
    '/page12.png',
    '/page13.png',
  ];

  return (
    <div className="flipbook-container">
      <div className="flipbook-overlay">
        <h2 className="flipbook-title">SUNNY MEADOWS WOODLAND SCHOOL</h2>
        <p className="flipbook-description">The sun shines brightly as Class 1 of Sunny Meadows Woodland School embarks on their first trip to the Shadow Woods. Everyone is excited, except for Hank, the hedgehog who struggles to make friends. When a hungry snake threatens the class, Hank finds courage to save the day, proving that true friendship and bravery come in all shapes and sizes.</p>
      </div>
      <HTMLFlipBook width={250} height={350} drawShadow={true}>
        {pages.map((page, index) => (
          <div key={index} className="page">
            <img src={page} alt={`Page ${index + 1}`} />
          </div>
        ))}
      </HTMLFlipBook>
      <div className="audiobook-container">
        <audio controls>
          <source src="/audiobookp3.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default Flipbook;
