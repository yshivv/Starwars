import React from 'react';
import './StarshipsDetailModal.css';

const StarshipsDetailModal = ({ starship, onClose }) => {
    return (
        <div className="starships-detail-modal">
            <div className="modal-content">
                <header className="modal-header">
                    <h3>Starship Details</h3>
                    <button className="close-toggle" onClick={onClose}>
                        &#x2715;
                    </button>
                </header>
                <div className="detail-line"></div>
                <div className="detail-title">Image</div>
                <div className="starship-box">
                    <img src={`https://picsum.photos/300?random=${starship.name}`} alt={starship.name} />
                </div>
                <div className="starship-details">
                    <div className="detail-line"></div>
                    <div className="detail-title">Name</div>
                    <p>{starship.name}</p>
                    <div className="detail-title">Model</div>
                    <p>{starship.model}</p>
                    <div className="detail-title">Hyperdrive Rating</div>
                    <p>{starship.hyperdrive_rating}</p>
                </div>
                <div className="detail-line"></div>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default StarshipsDetailModal;
