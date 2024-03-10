import React, { useState } from 'react';

export const AboutUs = (props) => {
    const [showFullData, setShowFullData] = useState(false);
    const [nWords] = useState(50); // Initial number of words to display

    const toggleShowFullData = () => {
        setShowFullData(!showFullData);
    };

    const truncatedText = props.data ? props.data.paragraph.split(' ').slice(0, nWords).join(' ') : '';
    const displayText = showFullData ? props.data.paragraph : truncatedText + '...';
    const buttonLabel = showFullData ? 'Read Less' : 'Read More';

    return (
        <div className="container-sm">
            <div className="row justify-content-md-center">
                <div className="col-md-12 text-center mb-4">
                    <h2 className="x-text-content-text-primary">
                        {props.data ? props.data.title : 'loading...'}
                    </h2>
                </div>
                <div className="col-md-8">
                    <p>{displayText}</p>
                    {props.data && props.data.paragraph.split(' ').length > nWords && (
                        <button className="btn btn-primary" onClick={toggleShowFullData}>{buttonLabel}</button>
                    )}
                </div>
                <div className="col-md-4">
                    <img src={props.data ? '/home/aboutUs/'+props.data.photo : ''} alt="About Us" style={{ width: '100%' }} />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-8">
                    {/* Data for the first column */}
                </div>
                <div className="col-md-4">
                    {/* Data for the second column */}
                </div>
            </div>
        </div>
    );
};
