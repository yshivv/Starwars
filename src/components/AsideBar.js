import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown,
    faGlobe,
    faSpaceShuttle,
    faCarSide,
    faUser,
    faFilm,
    faDna,
    faFolder,
} from '@fortawesome/free-solid-svg-icons';
import './AsideBar.css';

const AsideBar = ({ films, onFilmSelect }) => {
    const [planetsData, setPlanetsData] = useState([]);
    const [spaceshipsData, setSpaceshipsData] = useState([]);
    const [vehiclesData, setVehiclesData] = useState([]);
    const [peopleData, setPeopleData] = useState([]);
    const [speciesData, setSpeciesData] = useState([]);
    const [showPlanetsDropdown, setShowPlanetsDropdown] = useState(false);
    const [showSpaceshipsDropdown, setShowSpaceshipsDropdown] = useState(false);
    const [showVehiclesDropdown, setShowVehiclesDropdown] = useState(false);
    const [showPeopleDropdown, setShowPeopleDropdown] = useState(false);
    const [showFilmsDropdown, setShowFilmsDropdown] = useState(false);
    const [showSpeciesDropdown, setShowSpeciesDropdown] = useState(false);
    const [selectedFilm, setSelectedFilm] = useState(null);

    useEffect(() => {
        // Fetch Planets data
        if (planetsData.length === 0) {
            axios.get('https://swapi.dev/api/planets/')
                .then((response) => setPlanetsData(response.data.results))
                .catch((error) => console.error('Error fetching planets data:', error));
        }

        // Fetch Spaceships data
        if (spaceshipsData.length === 0) {
            axios.get('https://swapi.dev/api/starships/')
                .then((response) => setSpaceshipsData(response.data.results))
                .catch((error) => console.error('Error fetching spaceships data:', error));
        }

        // Fetch Vehicles data
        if (vehiclesData.length === 0) {
            axios.get('https://swapi.dev/api/vehicles/')
                .then((response) => setVehiclesData(response.data.results))
                .catch((error) => console.error('Error fetching vehicles data:', error));
        }

        // Fetch People data
        if (peopleData.length === 0) {
            axios.get('https://swapi.dev/api/people/')
                .then((response) => setPeopleData(response.data.results))
                .catch((error) => console.error('Error fetching people data:', error));
        }

        // Fetch Species data
        if (speciesData.length === 0) {
            axios.get('https://swapi.dev/api/species/')
                .then((response) => setSpeciesData(response.data.results))
                .catch((error) => console.error('Error fetching species data:', error));
        }

        // Clean up ongoing Axios requests when the component unmounts
        return () => {
            // Cancel any ongoing Axios requests here (if using axios cancel tokens)
        };
    }, [planetsData, spaceshipsData, vehiclesData, peopleData, speciesData]);

    const toggleDropdown = (category) => {
        switch (category) {
            case 'planets':
                setShowPlanetsDropdown((prevShowPlanetsDropdown) => !prevShowPlanetsDropdown);
                break;
            case 'spaceships':
                setShowSpaceshipsDropdown((prevShowSpaceshipsDropdown) => !prevShowSpaceshipsDropdown);
                break;
            case 'vehicles':
                setShowVehiclesDropdown((prevShowVehiclesDropdown) => !prevShowVehiclesDropdown);
                break;
            case 'people':
                setShowPeopleDropdown((prevShowPeopleDropdown) => !prevShowPeopleDropdown);
                break;
            case 'films':
                setShowFilmsDropdown((prevShowFilmsDropdown) => !prevShowFilmsDropdown);
                break;
            case 'species':
                setShowSpeciesDropdown((prevShowSpeciesDropdown) => !prevShowSpeciesDropdown);
                break;
            default:
                break;
        }
    };

    // Function to handle film selection
    const handleFilmSelect = (film) => {
        onFilmSelect(film);
        toggleDropdown('films');
        setSelectedFilm(film); // Set the selected film in state
    };

    const sortedPlanets = planetsData.sort((a, b) => a.name.localeCompare(b.name));
    const sortedSpaceships = spaceshipsData.sort((a, b) => a.name.localeCompare(b.name));
    const sortedVehicles = vehiclesData.sort((a, b) => a.name.localeCompare(b.name));
    const sortedPeople = peopleData.sort((a, b) => a.name.localeCompare(b.name));
    const sortedSpecies = speciesData.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <aside>
            <ul className="menu-list">
                {/* Planets Dropdown */}
                <li className="menu-item">
                    <a href="#" onClick={() => toggleDropdown('planets')} className="menu-link">
                        <FontAwesomeIcon icon={faFolder} className="icon" />
                        Planets
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`dropdown-arrow ${showPlanetsDropdown ? 'open' : ''}`}
                        />
                    </a>
                    {planetsData.length > 0 && ( // Add a conditional check here
                        <div className={`dropdown-content ${showPlanetsDropdown ? 'open' : ''}`}>
                            {planetsData.map((planet) => (
                                <a href="#" key={planet.id} className="options planet">
                                    <FontAwesomeIcon icon={faGlobe} className="icon" />
                                    {planet.name}
                                </a>
                            ))}
                        </div>
                    )}
                </li>

                {/* Spaceships Dropdown */}
                <li className="menu-item">
                    <a href="#" onClick={() => toggleDropdown('spaceships')} className="menu-link">
                        <FontAwesomeIcon icon={faFolder} className="icon" />
                        Spaceships
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`dropdown-arrow ${showSpaceshipsDropdown ? 'open' : ''}`}
                        />
                    </a>
                    {spaceshipsData.length > 0 && ( // Add a conditional check here
                        <div className={`dropdown-content ${showSpaceshipsDropdown ? 'open' : ''}`}>
                            {spaceshipsData.map((spaceship) => (
                                <a href="#" key={spaceship.id} className="options spaceship">
                                    <FontAwesomeIcon icon={faSpaceShuttle} className="icon" />
                                    {spaceship.name}
                                </a>
                            ))}
                        </div>
                    )}
                </li>

                {/* Vehicles Dropdown */}
                <li className="menu-item">
                    <a href="#" onClick={() => toggleDropdown('vehicles')} className="menu-link">
                        <FontAwesomeIcon icon={faFolder} className="icon" />
                        Vehicles
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`dropdown-arrow ${showVehiclesDropdown ? 'open' : ''}`}
                        />
                    </a>
                    {vehiclesData.length > 0 && ( // Add a conditional check here
                        <div className={`dropdown-content ${showVehiclesDropdown ? 'open' : ''}`}>
                            {vehiclesData.map((vehicle) => (
                                <a href="#" key={vehicle.id} className="options vehicle">
                                    <FontAwesomeIcon icon={faCarSide} className="icon" />
                                    {vehicle.name}
                                </a>
                            ))}
                        </div>
                    )}
                </li>

                {/* People Dropdown */}
                <li className="menu-item">
                    <a href="#" onClick={() => toggleDropdown('people')} className="menu-link">
                        <FontAwesomeIcon icon={faFolder} className="icon" />
                        People
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`dropdown-arrow ${showPeopleDropdown ? 'open' : ''}`}
                        />
                    </a>
                    {peopleData.length > 0 && ( // Add a conditional check here
                        <div className={`dropdown-content ${showPeopleDropdown ? 'open' : ''}`}>
                            {peopleData.map((person) => (
                                <a href="#" key={person.id} className="options person">
                                    <FontAwesomeIcon icon={faUser} className="icon" />
                                    {person.name}
                                </a>
                            ))}
                        </div>
                    )}
                </li>

                {/* Films Dropdown */}
                <li className="menu-item">
                    <a href="#" onClick={() => toggleDropdown('films')} className="menu-link">
                        <FontAwesomeIcon icon={faFolder} className="icon" />
                        Films
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`dropdown-arrow ${showFilmsDropdown ? 'open' : ''}`}
                        />
                    </a>
                    {films.length > 0 && ( // Add a conditional check here
                        <div className={`dropdown-content ${showFilmsDropdown ? 'open' : ''}`}>
                            {films.map((film) => (
                                <a
                                    href="#"
                                    key={film.episode_id}
                                    className={`options film ${selectedFilm === film ? 'selected' : ''}`}
                                    onClick={() => handleFilmSelect(film)}
                                >
                                    <FontAwesomeIcon icon={faFilm} className="icon" />
                                    {film.title}
                                </a>
                            ))}
                        </div>
                    )}
                </li>

                {/* Species Dropdown */}
                <li className="menu-item">
                    <a href="#" onClick={() => toggleDropdown('species')} className="menu-link">
                        <FontAwesomeIcon icon={faFolder} className="icon" />
                        Species
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`dropdown-arrow ${showSpeciesDropdown ? 'open' : ''}`}
                        />
                    </a>
                    {speciesData.length > 0 && ( // Add a conditional check here
                        <div className={`dropdown-content ${showSpeciesDropdown ? 'open' : ''}`}>
                            {speciesData.map((species) => (
                                <a href="#" key={species.id} className="options species">
                                    <FontAwesomeIcon icon={faDna} className="icon" />
                                    {species.name}
                                </a>
                            ))}
                        </div>
                    )}
                </li>
            </ul>
        </aside>
    );
};

export default AsideBar;
