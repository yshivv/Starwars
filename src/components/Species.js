import React, { useEffect, useState } from 'react';
import './Species.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Species = ({ species, onSpeciesSelect }) => {
    const [speciesImages, setSpeciesImages] = useState({});
    const [view, setView] = useState('table');

    useEffect(() => {
        fetchImagesForSpecies();
    }, [species]);

    const fetchImagesForSpecies = () => {
        const imagePromises = species.map((specie) => fetchRandomImage());
        Promise.all(imagePromises).then((images) => {
            const speciesImageMap = {};
            species.forEach((specie, index) => {
                speciesImageMap[specie.name] = images[index];
            });
            setSpeciesImages(speciesImageMap);
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
                <h2 class="type-header">Species</h2>
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
                    {species.map((specie) => (
                        <div className="box-container species-box" key={specie.name} onClick={() => onSpeciesSelect(specie)}>
                            <img src={speciesImages[specie.name] || 'placeholder_image_url'} alt={specie.name} />

                            <h3>{specie.name}</h3>


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
                                <th>Classification</th>
                                <th>Designation</th>
                                <th>Average Lifespan</th>
                                {/* Add other table headers as needed */}
                            </tr>
                        </thead>
                        <tbody>
                            {species.map((specie) => (
                                <tr key={specie.name} onClick={() => onSpeciesSelect(specie)}>
                                    <td>{specie.name}</td>
                                    <td>{specie.classification}</td>
                                    <td>{specie.designation}</td>
                                    <td>{specie.average_lifespan}</td>
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

export default Species;
