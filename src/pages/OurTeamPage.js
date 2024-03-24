import React, { useEffect, useState } from 'react';
import NavBar from '../components/navBar';
import { Contact } from '../components/contact';
import '../App.css';
import JsonData from '../data/data.json';
import TeamMember from '../components/teamMember';

const OurTeamPage = () => {
    const [landingPageData, setLandingPageData] = useState({});

    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

  return (
    <div>
      <NavBar />
      <div className="container pt-5">
        <div className="text-center">
          <h3>आमचं टीम</h3>
        </div>
        <div className="row justify-content-center">
          {landingPageData?.Team?.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <TeamMember
                name={member.name}
                position={member.position}
                contactNumber={member.contact}
                photo={member.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div id="contact">
        <Contact data={landingPageData.Contact}/>
      </div>
    </div>
  );
};

export default OurTeamPage;
