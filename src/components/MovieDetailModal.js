import React from 'react';
import './MovieDetailModal.css';

const MovieDetailModal = ({ film, onClose }) => {
    const {
        title,
        opening_crawl,
        director,
        producer,
        release_date,
    } = film;

    return (
        <div className="movie-detail-modal">
            <div className="modal-content">
                <header className="modal-header">
                    <h3>Movie Details</h3>
                    <button className="close-toggle" onClick={onClose}>
                        &#x2715; {/* Unicode character for the "x" symbol */}
                    </button>
                </header>
                <div className="detail-line"></div>
                <div className="detail-title">Image</div>
                <div className="movie-box">
                    <img src={`https://picsum.photos/300?random=${film.episode_id}`} alt={title} />
                </div>
                <div className="movie-details">
                    <div className="detail-line"></div>
                    <div className="detail-title">Title</div>
                    <p>{title}</p>
                    <div className="detail-title">Opening Crawl</div>
                    <p>{opening_crawl}</p>
                    <div className="detail-title">Director</div>
                    <p>{director}</p>
                    <div className="detail-title">Producer</div>
                    <p>{producer}</p>
                    <div className="detail-title">Release Date</div>
                    <p>{release_date}</p>

                </div>
                <div className="detail-line"></div>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default MovieDetailModal;
