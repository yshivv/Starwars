import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SpeciesDetailModal.css';

const SpeciesDetailModal = ({ species, onClose }) => {
    const [homeworldName, setHomeworldName] = useState('');

    useEffect(() => {
        axios.get(species.homeworld).then((response) => {
            setHomeworldName(response.data.name);
        });
    }, [species.homeworld]);

    return (
        <div className="species-detail-modal">
            <div className="modal-content">
                <header className="modal-header">
                    <h3>Species Details</h3>
                    <button className="close-toggle" onClick={onClose}>
                        &#x2715;
                    </button>
                </header>
                <div className="detail-line"></div>
                <div className="detail-title">Image</div>
                <div className="species-box">
                    <img src={`https://picsum.photos/300?random=${species.name}`} alt={species.name} />
                </div>
                <div className="species-details">
                    <div className="detail-line"></div>
                    <div className="detail-title">Name</div>
                    <p>{species.name}</p>
                    <div className="detail-title">Homeworld</div>
                    <p>{homeworldName}</p>
                    <div className="detail-title">Lifespan</div>
                    <p>{species.average_lifespan}</p>
                </div>
                <div className="detail-line"></div>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default SpeciesDetailModal;
