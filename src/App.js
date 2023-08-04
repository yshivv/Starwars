import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AsideBar from './components/AsideBar';
import Container from './components/Container';
import HomePage from './components/HomePage';
import './styles.css';

const App = () => {
  // Define the filmsData array and handleFilmSelect function
  const [filmsData, setFilmsData] = useState([]); // You can set the initial state here

  const handleFilmSelect = (film) => {
    // Handle film selection logic here
  };

  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <AsideBar films={filmsData} onFilmSelect={handleFilmSelect} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/films" element={<Container />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
