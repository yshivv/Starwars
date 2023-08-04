import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Container.css';
import MovieDetailModal from './MovieDetailModal';
import Films from './Films';
import People from './People';
import Planets from './Planets';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';
import PersonDetailModal from './PeopleDetailModal.';
import PlanetDetailModal from './PlanetDetailModal';
import SpeciesDetailModal from './SpeciesDetailModal';
import StarshipDetailModal from './StarshipDetailModal';
import VehicleDetailModal from './VehicleDetailModal';


const Container = () => {
    const [view, setView] = useState('grid');
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [species, setSpecies] = useState([]);
    const [starships, setStarships] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [selectedSpecies, setSelectedSpecies] = useState(null);
    const [selectedStarship, setSelectedStarship] = useState(null);
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    useEffect(() => {
        axios.get('https://swapi.dev/api/films/').then((response) => {
            setFilms(response.data.results);
        });
        axios.get('https://swapi.dev/api/people/').then((response) => {
            setPeople(response.data.results);
        });
        axios.get('https://swapi.dev/api/planets/').then((response) => {
            setPlanets(response.data.results);
        });
        axios.get('https://swapi.dev/api/species/').then((response) => {
            setSpecies(response.data.results);
        });
        axios.get('https://swapi.dev/api/starships/').then((response) => {
            setStarships(response.data.results);
        });
        axios.get('https://swapi.dev/api/vehicles/').then((response) => {
            setVehicles(response.data.results);
        });
    }, []);

    const toggleView = () => {
        setView((prevView) => (prevView === 'grid' ? 'table' : 'grid'));
    };

    const handleFilmSelect = (film) => {
        setSelectedFilm(film);
    };

    const handlePersonSelect = (person) => {
        setSelectedPerson(person);
    };

    const handlePlanetSelect = (planet) => {
        setSelectedPlanet(planet);
    };

    const handleSpeciesSelect = (specie) => {
        setSelectedSpecies(specie);
    };

    const handleStarshipSelect = (starship) => {
        setSelectedStarship(starship);
    };

    const handleVehicleSelect = (vehicle) => {
        setSelectedVehicle(vehicle);
    };

    return (
        <div className="container">

            <header>
                <h1 className="dashboard-title">Star Wars Dashboard</h1>
            </header>


            <div className="dashboard-content">
                {view === 'grid' ? (
                    <>
                        <section  >
                            <Films films={films} onFilmSelect={handleFilmSelect} />
                        </section>
                        <section  >
                            <People people={people} onPersonSelect={handlePersonSelect} />
                        </section>
                        <section  >
                            <Planets planets={planets} onPlanetSelect={handlePlanetSelect} />
                        </section>
                        <section  >
                            <Species species={species} onSpeciesSelect={handleSpeciesSelect} />
                        </section>
                        <section  >
                            <Starships starships={starships} onStarshipSelect={handleStarshipSelect} />
                        </section>
                        <section  >
                            <Vehicles vehicles={vehicles} onVehicleSelect={handleVehicleSelect} />
                        </section>
                    </>
                ) : (
                    <section className="table-view">
                        <Films films={films} setSelectedFilm={setSelectedFilm} />
                        <People people={people} setSelectedPerson={setSelectedPerson} />
                        <Planets planets={planets} setSelectedPlanet={setSelectedPlanet} />
                        <Species species={species} setSelectedSpecies={setSelectedSpecies} />
                        <Starships starships={starships} setSelectedStarship={setSelectedStarship} />
                        <Vehicles vehicles={vehicles} setSelectedVehicle={setSelectedVehicle} />
                    </section>
                )}
            </div>
            {selectedFilm && <MovieDetailModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />}
            {selectedPerson && <PersonDetailModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />}
            {selectedPlanet && <PlanetDetailModal planet={selectedPlanet} onClose={() => setSelectedPlanet(null)} />}
            {selectedSpecies && <SpeciesDetailModal species={selectedSpecies} onClose={() => setSelectedSpecies(null)} />}
            {selectedStarship && <StarshipDetailModal starship={selectedStarship} onClose={() => setSelectedStarship(null)} />}
            {selectedVehicle && <VehicleDetailModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />}
        </div>
    );
};

export default Container;
