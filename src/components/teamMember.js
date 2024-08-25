import React from 'react';

const TeamMember = ({ name, position, contactNumber, photo }) => {
  return (
    <div className="card team-member">
      <div className="row no-gutters align-items-center justify-content-center">
        <div className="col-md-4 text-center">
          <img
            src={photo}
            className="card-img"
            alt={name}
            style={{ maxWidth: '60%', height: 'auto' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">नाव: {name}</h5> {/* Name */}
            {position && <p className="card-text">पद: {position}</p>}
            {contactNumber && <p className="card-text">संपर्क क्र.: {contactNumber}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
