import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const Navbar = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchText) {
            const found = window.find(searchText, false, false, true);
            if (!found) {
                alert(`"${searchText}" not found on the page.`);
            }
        }
    };

    return (
        <nav>
            <Link to="/" className="home-link">
                <img src={logo} alt="Star Wars" className="logo" />
            </Link>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchText}
                    onChange={handleSearchChange}
                    placeholder="Search on Page..."
                />
                <button type="submit">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;
