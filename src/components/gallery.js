import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = (props) => {
    // Use require.context to dynamically import image files from a local folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../public/home/gallery', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="container">
        <br></br>
        <br></br>
      <h1 className="text-center mt-5 mb-4">
        प्रतिमा गॅलरी
    </h1>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <img
                src={image}
                alt={`gallery ${index + 1}`}
                className="card-img-top gallery-image"
                style={{ height: '200px', objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
