import React, { useEffect, useState } from 'react';
import './Planets.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Planets = ({ planets, onPlanetSelect }) => {
    const [planetImages, setPlanetImages] = useState({});
    const [view, setView] = useState('table');

    useEffect(() => {
        // Fetch random images for each planet
        fetchImagesForPlanets();
    }, [planets]);

    const fetchImagesForPlanets = () => {
        const imagePromises = planets.map((planet) => fetchRandomImage());
        Promise.all(imagePromises).then((images) => {
            const planetImageMap = {};
            planets.forEach((planet, index) => {
                planetImageMap[planet.name] = images[index];
            });
            setPlanetImages(planetImageMap);
        });
    };

    const fetchRandomImage = () => {
        return fetch('https://picsum.photos/200/200') // Replace with desired image size
            .then((response) => response.url)
            .catch((error) => console.error('Error fetching image:', error));
    };

    const handleViewChange = (newView) => {
        setView(newView);
    };

    return (
        <div class="type-wrapper">
            <header>
                <h2 class="type-header">Planets</h2>
                <div className="view-icons">
                    <button className={`view-icon ${view === 'grid' ? 'active' : ''}`} onClick={() => handleViewChange('grid')}>
                        Grid
                    </button>
                    <button className={`view-icon ${view === 'table' ? 'active' : ''}`} onClick={() => handleViewChange('table')}>
                        Table
                    </button>
                </div>
            </header>
            {view === 'grid' ? (
                <section className="grid-view">
                    {planets.map((planet) => (
                        <div className="box-container planet-box" key={planet.name} onClick={() => onPlanetSelect(planet)}>
                            <img src={planetImages[planet.name] || 'placeholder_image_url'} alt={planet.name} />

                            <h3>{planet.name}</h3>


                            {/* Add other details here */}
                        </div>

                    ))}
                </section>
            ) : (
                <section className="table-view">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Population</th>
                                <th>Climate</th>
                                <th>Gravity</th>
                                {/* Add other table headers as needed */}
                            </tr>
                        </thead>
                        <tbody>
                            {planets.map((planet) => (
                                <tr key={planet.name} onClick={() => onPlanetSelect(planet)}>
                                    <td>{planet.name}</td>
                                    <td>{planet.population}</td>
                                    <td>{planet.climate}</td>
                                    <td>{planet.gravity}</td>
                                    {/* Add other table data as needed */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            )}
        </div>
    );
};

export default Planets;
