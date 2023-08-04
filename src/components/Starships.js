import React, { useEffect, useState } from 'react';
import './Starships.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Starships = ({ starships, onStarshipSelect }) => {
    const [starshipImages, setStarshipImages] = useState({});
    const [view, setView] = useState('table');

    useEffect(() => {
        fetchImagesForStarships();
    }, [starships]);

    const fetchImagesForStarships = () => {
        const imagePromises = starships.map((starship) => fetchRandomImage());
        Promise.all(imagePromises).then((images) => {
            const starshipImageMap = {};
            starships.forEach((starship, index) => {
                starshipImageMap[starship.name] = images[index];
            });
            setStarshipImages(starshipImageMap);
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
                <h2 class="type-header">Starships</h2>
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
                    {starships.map((starship) => (
                        <div className="box-container starship-box" key={starship.name} onClick={() => onStarshipSelect(starship)}>
                            <img src={starshipImages[starship.name] || 'placeholder_image_url'} alt={starship.name} />

                            <h3>{starship.name}</h3>


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
                                <th>Model</th>
                                <th>Manufacturer</th>
                                <th>Cost (in credits)</th>
                                {/* Add other table headers as needed */}
                            </tr>
                        </thead>
                        <tbody>
                            {starships.map((starship) => (
                                <tr key={starship.name} onClick={() => onStarshipSelect(starship)}>
                                    <td>{starship.name}</td>
                                    <td>{starship.model}</td>
                                    <td>{starship.manufacturer}</td>
                                    <td>{starship.cost_in_credits}</td>
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

export default Starships;
