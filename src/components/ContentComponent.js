import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faDownload, faEdit, faShare, faArrowsAlt, faLock, faTrash } from '@fortawesome/free-solid-svg-icons';

const ContentComponent = ({ data }) => {
    const [hoveredFilm, setHoveredFilm] = useState(null);

    const handleOptionClick = (action) => {
        console.log(`Handling option click: ${action}`);
    };

    const handleFilmHover = (film) => {
        setHoveredFilm(film);
    };

    const handleFilmHoverEnd = () => {
        setHoveredFilm(null);
    };

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                </div>
            ))}
            {hoveredFilm && (
                <div className="film-dropdown-dialog">
                    <div className="film-dropdown-menu">
                        <button onClick={() => handleOptionClick('View')}>
                            <FontAwesomeIcon icon={faEye} />
                            View
                        </button>
                        <button onClick={() => handleOptionClick('Download')}>
                            <FontAwesomeIcon icon={faDownload} />
                            Download
                        </button>
                        <button onClick={() => handleOptionClick('Rename')}>
                            <FontAwesomeIcon icon={faEdit} />
                            Rename
                        </button>
                        <button onClick={() => handleOptionClick('Share Link')}>
                            <FontAwesomeIcon icon={faShare} />
                            Share Link
                        </button>
                        <button onClick={() => handleOptionClick('Move')}>
                            <FontAwesomeIcon icon={faArrowsAlt} />
                            Move
                        </button>
                        <button onClick={() => handleOptionClick('Mark Private')}>
                            <FontAwesomeIcon icon={faLock} />
                            Mark Private
                        </button>
                        <button onClick={() => handleOptionClick('Delete')}>
                            <FontAwesomeIcon icon={faTrash} />
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContentComponent;
