import React from 'react';
import './app.scss';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Flipbook from './components/flipbook/Flipbook';
import Books from './components/books/Books';
import Contact from './components/contact/Contact';
import PixiSlider from './components/carousel/PixiSlider';


const images = [
  '/slider3.jpg',
  '/slider1.jpg',
  '/slider2.jpg',
];

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Homepage />
        <Sidebar />
      </section>
      <section id="Homepage" style={{ paddingTop: '50px' }}>
        <PixiSlider images={images} style={{ display: 'flex', justifyContent: 'center' }} />
      </section>
      <section>
        <Flipbook />
      </section>
      <section>
        <Books />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default App;
