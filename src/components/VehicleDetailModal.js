import React from 'react';
import './VehiclesDetailModal.css';

const VehiclesDetailModal = ({ vehicle, onClose }) => {
    return (
        <div className="vehicles-detail-modal">
            <div className="modal-content">
                <header className="modal-header">
                    <h3>Vehicle Details</h3>
                    <button className="close-toggle" onClick={onClose}>
                        &#x2715;
                    </button>
                </header>
                <div className="detail-line"></div>
                <div className="detail-title">Image</div>
                <div className="vehicle-box">
                    <img src={`https://picsum.photos/300?random=${vehicle.name}`} alt={vehicle.name} />
                </div>
                <div className="vehicle-details">
                    <div className="detail-line"></div>
                    <div className="detail-title">Name</div>
                    <p>{vehicle.name}</p>
                    <div className="detail-title">Model</div>
                    <p>{vehicle.model}</p>
                    <div className="detail-title">Top Speed</div>
                    <p>{vehicle.max_atmosphering_speed}</p>
                </div>
                <div className="detail-line"></div>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default VehiclesDetailModal;
