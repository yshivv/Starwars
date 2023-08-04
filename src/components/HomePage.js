import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/films/');
                if (!response.ok) {
                    throw new Error('Error fetching films.');
                }
                const data = await response.json();
                setFilms(data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching films:', error);
                setLoading(false);
            }
        };

        fetchFilms();
    }, []);

    const handleFilmsClick = () => {
        navigate('/films');
    };

    return (
        <div className="home-page">
            <div className="welcome-box">
                <img src="https://picsum.photos/400" alt="Welcome Image" className="welcome-image" />
                <h2 className="welcome-title">Welcome to the Star Wars Dashboard!</h2>
                <p className="welcome-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod tincidunt dapibus.
                    Donec euismod rhoncus mauris, eget sagittis eros venenatis ut. Cras pharetra, felis ac
                    mattis semper, arcu elit fermentum justo, id rutrum dolor justo ut arcu. Nullam vel justo
                    malesuada, hendrerit purus et, consequat lectus.
                </p>
                <button className="get-started-button" onClick={handleFilmsClick}>
                    Get Started
                </button>
            </div>
            {loading && <div className="loading-spinner">Loading...</div>}
        </div>
    );
};

export default HomePage;
