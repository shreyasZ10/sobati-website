import React from 'react';

const Student = ({ name, photo }) => {
  return (
    <div className="card team-member">
      <div className="row no-gutters align-items-center justify-content-center">
        <div className="col-md-4 text-center">
          <img
            src={photo}
            className="card-img"
            alt={name}
            style={{ maxWidth: '80%', height: 'auto' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">नाव: {name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
