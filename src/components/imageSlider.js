// src/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderSettings}>
      <div>
        <img src="/home/intro-bg1.jpg" alt="slider_1"
         style={{ width: '100%', height: '30%' }} />
      </div>
      <div>
        <img src="/home/intro-bg2.jpg" alt="slider_2"
         style={{ width: '100%', height: '30%' }} />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default ImageSlider;
