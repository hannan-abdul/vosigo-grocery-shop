import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import './SimpleSlider.css';


const SimpleSlider = () => {
  return (
    <div className="App">
      <Carousel>
        <Card />
        <Card />
        <Card />
      </Carousel>
    </div>
  );
};

export default SimpleSlider;