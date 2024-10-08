import { useState } from "react";
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
                        <h1 className="x-text-content-text-primary">
                            उपलब्धी
                        </h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <Carousel
                            activeIndex={index}
                            onSelect={handleSelect}
                            indicators={false}
                            interval={3000} // Set interval to 3 seconds (3000 milliseconds)
                            className="carousel"
                        >
                            {props.data
                                ? props.data.map((d, i) => (
                                    <Carousel.Item key={`${d.title}-${i}`}>
                                        <div className='text-center'>
                                            <h2>{d.title}</h2>
                                            <br></br>
                                            <div className="row">
                                                {index % 2 === 0 ? (
                                                    <>
                                                        <div className="col-md-6">
                                                            <img src={d.image} alt={d.title} className="img-fluid" style={{ maxHeight: '300px' }} />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>{d.text}</p>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="col-md-6 order-2 order-md-1">
                                                            <p>{d.text}</p>
                                                        </div>
                                                        <div className="col-md-6 order-1 order-md-2">
                                                            <img src={d.image} alt={d.title} className="img-fluid" style={{ maxHeight: '300px' }} />
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                ))
                                : 'Loading...'}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}
