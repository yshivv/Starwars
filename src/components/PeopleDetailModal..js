import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PeopleDetailModal.css';

const PeopleDetailModal = ({ person, onClose }) => {
    const [speciesName, setSpeciesName] = useState('');

    useEffect(() => {
        axios.get(person.species[0]).then((response) => {
            setSpeciesName(response.data.name);
        });
    }, [person.species]);

    return (
        <div className="people-detail-modal">
            <div className="modal-content">
                <header className="modal-header">
                    <h3>People Details</h3>
                    <button className="close-toggle" onClick={onClose}>
                        &#x2715; {/* Unicode character for the "x" symbol */}
                    </button>
                </header>
                <div className="detail-line"></div>
                <div className="detail-title">Image</div>
                <div className="people-box">
                    <img src={`https://picsum.photos/300?random=${person.name}`} alt={person.name} />
                </div>
                <div className="people-details">
                    <div className="detail-line"></div>
                    <div className="detail-title">Name</div>
                    <p>{person.name}</p>
                    <div className="detail-title">Birthdate</div>
                    <p>{person.birth_year}</p>
                    <div className="detail-title">Species</div>
                    <p>{speciesName}</p>
                </div>
                <div className="detail-line"></div>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default PeopleDetailModal;
