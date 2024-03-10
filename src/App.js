import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navBar';
import ImageSlider from './components/imageSlider';
import { AboutUs } from './components/aboutUs';
import JsonData from './data/data.json';
import { Achievements } from './components/achievements';
import { Contact } from './components/contact';
import { Donate } from './components/donate';

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])
  return (
    <div>
      <NavBar />

      {/* Home section with the image slider */}
      <div id="home" className="section">
        <ImageSlider />
      </div>

      {/* Other sections */}
      <div id="about" className="section">
        <AboutUs data={landingPageData.About} />
      </div>

      <div id="achievements" className="section">
        <Achievements data={landingPageData.Achievements}/>
      </div>

      <div id="donate" className="section">
        <Donate data={landingPageData.Donate}/>
      </div>

      <div id="contact" className="section">
        <Contact data={landingPageData.Contact}/>
      </div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default App;
