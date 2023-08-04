import React from 'react';
import './PlanetsDetailModal.css';

const PlanetsDetailModal = ({ planet, onClose }) => {
    return (
        <div className="planets-detail-modal">
            <div className="modal-content">
                <header className="modal-header">
                    <h3>Planet Details</h3>
                    <button className="close-toggle" onClick={onClose}>
                        &#x2715;
                    </button>
                </header>
                <div className="detail-line"></div>
                <div className="detail-title">Image</div>
                <div className="planet-box">
                    <img src={`https://picsum.photos/300?random=${planet.name}`} alt={planet.name} />
                </div>
                <div className="planet-details">
                    <div className="detail-line"></div>
                    <div className="detail-title">Name</div>
                    <p>{planet.name}</p>
                    <div className="detail-title">Climate</div>
                    <p>{planet.climate}</p>
                    <div className="detail-title">Gravity</div>
                    <p>{planet.gravity}</p>
                </div>
                <div className="detail-line"></div>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default PlanetsDetailModal;
