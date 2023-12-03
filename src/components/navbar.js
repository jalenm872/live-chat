import React from 'react';
import { Link } from 'react-router-dom';

function navbar() {
    return (
        <>
            <nav>
                <div>
                    <Link to="/">
                        <i></i>LiveChat
                    </Link>
                </div> 
                <div class="text-white">Settings</div>
            </nav>
        </>
    )
}

export default navbar;