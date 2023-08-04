import React, { useEffect, useState } from 'react';
import './People.css';

const People = ({ people, onPersonSelect }) => {
    const [personImages, setPersonImages] = useState({});
    const [view, setView] = useState('table'); // Add the 'view' state

    useEffect(() => {
        // Fetch random images for each person
        fetchImagesForPeople();
    }, [people]);

    const fetchImagesForPeople = () => {
        const imagePromises = people.map((person) => fetchRandomImage());
        Promise.all(imagePromises).then((images) => {
            const personImageMap = {};
            people.forEach((person, index) => {
                personImageMap[person.name] = images[index];
            });
            setPersonImages(personImageMap);
        });
    };

    const fetchRandomImage = () => {
        return fetch('https://picsum.photos/200/200') // Replace with desired image size
            .then((response) => response.url)
            .catch((error) => console.error('Error fetching image:', error));
    };

    // Function to toggle between grid and table views
    const toggleView = () => {
        setView((prevView) => (prevView === 'grid' ? 'table' : 'grid'));
    };

    return (
        <div class="type-wrapper">
            <header>
                <h2 class="type-header">People</h2>
                <div className="view-icons">
                    <button
                        className={`view-icon${view === 'grid' ? ' active' : ''}`}
                        onClick={() => setView('grid')}
                    >
                        Grid
                    </button>
                    <button
                        className={`view-icon${view === 'table' ? ' active' : ''}`}
                        onClick={() => setView('table')}
                    >
                        Table
                    </button>
                </div>
            </header>
            {view === 'grid' ? (
                <section className="grid-view">
                    {people.map((person) => (
                        <div className="box-container" key={person.name} onClick={() => onPersonSelect(person)}>
                            <img src={personImages[person.name] || 'placeholder_image_url'} alt={person.name} />
                            <h3>{person.name}</h3>
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
                                <th>Birth Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {people.map((person) => (
                                <tr key={person.name} onClick={() => onPersonSelect(person)}>
                                    <td>{person.name}</td>
                                    <td>{person.birth_year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            )}
        </div>
    );
};

export default People;
