import React, { useEffect, useState } from 'react';
import './Vehicles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Vehicles = ({ vehicles, onVehicleSelect }) => {
    const [vehicleImages, setVehicleImages] = useState({});
    const [view, setView] = useState('table');

    useEffect(() => {
        fetchImagesForVehicles();
    }, [vehicles]);

    const fetchImagesForVehicles = () => {
        const imagePromises = vehicles.map((vehicle) => fetchRandomImage());
        Promise.all(imagePromises).then((images) => {
            const vehicleImageMap = {};
            vehicles.forEach((vehicle, index) => {
                vehicleImageMap[vehicle.name] = images[index];
            });
            setVehicleImages(vehicleImageMap);
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
                <h2 class="type-header">Vehicles</h2>
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
                    {vehicles.map((vehicle) => (
                        <div className="box-container vehicle-box" key={vehicle.name} onClick={() => onVehicleSelect(vehicle)}>
                            <img src={vehicleImages[vehicle.name] || 'placeholder_image_url'} alt={vehicle.name} />

                            <h3>{vehicle.name}</h3>


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
                            {vehicles.map((vehicle) => (
                                <tr key={vehicle.name} onClick={() => onVehicleSelect(vehicle)}>
                                    <td>{vehicle.name}</td>
                                    <td>{vehicle.model}</td>
                                    <td>{vehicle.manufacturer}</td>
                                    <td>{vehicle.cost_in_credits}</td>
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

export default Vehicles;
