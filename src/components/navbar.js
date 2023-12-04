import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';

function navbar() {
    return (
        <>
            <nav class="flex bg-black h-20 justify-between text-3xl pt-5">
                <div></div>
                <div>
                    <Link to="/" class="text-white">
                        <i></i>LiveChat
                    </Link>
                </div> 
                
                <Dropdown />
                

            </nav>
        </>
    )
}

export default navbar;