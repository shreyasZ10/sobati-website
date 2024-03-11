import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import ArticlePage from './pages/ArticlesPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/gallery" element={<GalleryPage />} /> {/* Define route for GalleryPage */}
      <Route path="/articles" element={<ArticlePage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
