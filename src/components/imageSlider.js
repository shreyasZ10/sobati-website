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
    <div className="container">
      <div className="row">
        <div className="col">
          <Slider {...sliderSettings}>
            <div>
              <img src="/home/slider/intro-bg1.jpeg" alt="slider_1" className="img-fluid"  style={{ width: '300%', height: '50%' }}/>
            </div>
            <div>
              <img src="/home/slider/intro-bg2.jpg" alt="slider_1" className="img-fluid"  style={{ width: '300%', height: '50%' }}/>
            </div>
            <div>
              <img src="/home/slider/intro-bg3.jpg" alt="slider_1" className="img-fluid"  style={{ width: '300%', height: '50%' }}/>
            </div>
            <div>
              <img src="/home/slider/intro-bg4.jpg" alt="slider_1" className="img-fluid"  style={{ width: '300%', height: '50%' }}/>
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
