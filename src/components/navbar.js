import React from 'react';
import { Link } from 'react-router-dom';

function navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <i className="fas fa-leaf"></i> LiveChat
                    </Link>
                </div> 
                <h1 className="navbar-settings">Settings</h1>
            </nav>
        </>
    )
}

export default navbar;