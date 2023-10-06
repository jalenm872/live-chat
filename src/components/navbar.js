import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <i className="fas fa-leaf"></i> LiveChat
                    </Link>
                </div> 
            </nav>
        </>
    )
}

export default navbar;