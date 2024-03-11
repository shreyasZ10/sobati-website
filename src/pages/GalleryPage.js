import Gallery from '../components/gallery';
import React, { useEffect, useState } from 'react';
import '../App.css';
import NavBar from '../components/navBar';
import { Contact } from '../components/contact';
import JsonData from '../data/data.json';

const GalleryPage = () => {
    const [landingPageData, setLandingPageData] = useState({});
  
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);

  return (
    <div>
        <NavBar />
        <Gallery />
        <div id="contact">
            <Contact data={landingPageData.Contact}/>
        </div>
    </div>
  );
};

export default GalleryPage;
