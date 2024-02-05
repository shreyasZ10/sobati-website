import { useState } from "react";
import Slider from "react-slick";
import { Carousel } from 'react-bootstrap';

export const Achievements = (props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="container-xxl">
      <div id='achievements' className='container-fluid text-center p-4'>
        <div className="row justify-content-md-center mb-4">
          <div className="col-md-auto">
            <h2 className="x-text-content-text-primary">
              Achievements
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <Carousel 
              activeIndex={index} 
              onSelect={handleSelect}
              indicators={false}
            >
              {props.data
                ? props.data.map((d, i) => (
                  <Carousel.Item key={`${d.title}-${i}`}>
                    <div className='text-center'>
                      <h3>{d.title}</h3>
                      <p>{d.text}</p>
                    </div>
                  </Carousel.Item>
                ))
                : 'Loading...'}
            </Carousel>
            <style jsx>{`
              .carousel-control-prev-icon,
              .carousel-control-next-icon {
                background-color: black;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
              }

              .carousel-control-prev-icon::before,
              .carousel-control-next-icon::before {
                color: black;
              }

              .carousel-control-prev {
                left: 0;
              }

              .carousel-control-next {
                right: 0;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
    )
}
