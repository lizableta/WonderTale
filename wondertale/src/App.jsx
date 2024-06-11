import React from 'react';
import './app.scss';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import Slider from './components/carousel/Slider';
import Sidebar from './components/sidebar/Sidebar';
import Flipbook from './components/flipbook/Flipbook';
import Books from './components/books/Books';
import Contact from './components/contact/Contact';

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
      <section>
        <Slider images={images} />
      </section>
      <section>
        <Flipbook />
      </section>
      <section>
        <Books />
      </section>
     
    </div>
  );
};

export default App;
