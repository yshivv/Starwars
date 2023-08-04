import React, { useState } from 'react';
import './films.css';
import { faEye, faDownload, faEdit, faShare, faArrowsAlt, faLock, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Films = ({ films, onFilmSelect }) => {
    const [view, setView] = useState('table');
    const [hoveredFilm, setHoveredFilm] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const [menuFilm, setMenuFilm] = useState(null);

    const toggleView = () => {
        setView((prevView) => (prevView === 'grid' ? 'table' : 'grid'));
    };

    const openPopup = (film) => {
        setShowMenu(true);
        setMenuFilm(film);
    };

    const performAction = (action, film) => {
        console.log(`Performing ${action} action for film:`, film.title);
        // Implement the logic for each action (e.g., download, rename, share, etc.)
    };
    const handleOptionClick = (action) => {
        console.log(`Handling option click: ${action}`);
    };
    const handleKebabMenu = (event, film) => {
        event.preventDefault();
        openPopup(film);
    };

    const handleFilmHover = (film) => {
        setHoveredFilm(film);
    };

    const handleFilmHoverEnd = () => {
        setHoveredFilm(null);
    };
    const handleMenuOpen = (film) => {
        setShowMenu(true);
        setMenuFilm(film);
    };

    const handleMenuClose = () => {
        setShowMenu(false);
        setMenuFilm(null);
    };

    return (
        <div className="type-wrapper">
            <header>
                <h2 className="type-header">Films</h2>
                <div className="view-icons">
                    <button className={`view-icon${view === 'grid' ? ' active' : ''}`} onClick={() => setView('grid')}>
                        Grid
                    </button>
                    <button className={`view-icon${view === 'table' ? ' active' : ''}`} onClick={() => setView('table')}>
                        Table
                    </button>
                </div>
            </header>
            {view === 'grid' ? (
                <div className="films-list grid-view">
                    {films.map((film) => (
                        <div
                            key={film.episode_id}
                            className="film-box"
                            onClick={() => onFilmSelect(film)}
                            onMouseEnter={() => handleFilmHover(film)}
                            onMouseLeave={handleFilmHoverEnd}
                        >
                            <img src={`https://picsum.photos/200?random=${film.episode_id}`} alt={film.title} />
                            <h3>{film.title}</h3>
                            {hoveredFilm === film && (
                                <div className="kebab-menu-icon" onClick={(e) => handleKebabMenu(e, film)}>
                                    <FontAwesomeIcon icon={faEllipsisV} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <section className="films-list table-view">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Director</th>
                                <th>Release Date</th>
                                <th>Kebab</th>
                            </tr>
                        </thead>
                        <tbody>
                            {films.map((film) => (
                                <tr key={film.episode_id} onClick={() => onFilmSelect(film)}>
                                    <td>{film.title}</td>
                                    <td>{film.director}</td>
                                    <td>{film.release_date}</td>
                                    <td>
                                        <div
                                            className="kebab-menu-icon"
                                            onClick={(e) => handleKebabMenu(e, film)}
                                            onMouseEnter={() => handleFilmHover(film)}
                                            onMouseLeave={handleFilmHoverEnd}
                                        >
                                            <FontAwesomeIcon icon={faEllipsisV} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            )}
            {showMenu && (
                <div className="film-dropdown-dialog">
                    <div className="film-dropdown-menu">
                        <button onClick={() => handleOptionClick('View')}>
                            <FontAwesomeIcon icon={faEye} />
                            View
                        </button>
                        <button onClick={() => performAction('Download', menuFilm)}>
                            Download
                        </button>
                        <button onClick={() => performAction('Rename', menuFilm)}>
                            Rename
                        </button>
                        <button onClick={() => performAction('Share Link', menuFilm)}>
                            Share Link
                        </button>
                        <button onClick={() => performAction('Move', menuFilm)}>
                            Move
                        </button>
                        <button onClick={() => performAction('Mark Private', menuFilm)}>
                            Mark Private
                        </button>
                        <button onClick={() => performAction('Delete', menuFilm)}>
                            Delete
                        </button>
                        <button onClick={handleMenuClose} className="close-button">
                            Close
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Films;
