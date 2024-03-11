import React, { useEffect, useState } from 'react';
import '../App.css';
import NavBar from '../components/navBar';
import { Contact } from '../components/contact';
import JsonData from '../data/data.json';
import Articles from '../components/articles';

const ArticlePage = () => {
    const [landingPageData, setLandingPageData] = useState({});
  
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);

  return (
    <div>
        <NavBar />
        <Articles />
        <div id="contact">
            <Contact data={landingPageData.Contact}/>
        </div>
    </div>
  );
};

export default ArticlePage;
