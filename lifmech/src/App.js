// import React, { useEffect } from 'react';
import ComingSoon from './pages/ComingSoon';
import './App.css';
/*
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import Navbar from './components/Navbar';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
*/

const App = () => {
  return (
    /*
    <Router>
      <ScrollToTop />
      <Navbar /> {/* Adds Navbar here }
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/*" element={<HomePage />} /> {/* The Catch-all route }
      </Routes>
    </Router>
    */
   <ComingSoon/>
  );
};

export default App;
