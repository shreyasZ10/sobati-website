import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import ArticlePage from './pages/ArticlesPage';
import OurTeamPage from './pages/OurTeamPage';
import OurStudentsPage from './pages/ourStudentsPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/gallery" element={<GalleryPage />} /> {/* Define route for GalleryPage */}
      <Route path="/articles" element={<ArticlePage />} />
      <Route path="/ourteam" element={<OurTeamPage />} />
      <Route path="/ourStudents" element={<OurStudentsPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
