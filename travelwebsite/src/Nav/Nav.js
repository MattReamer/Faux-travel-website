import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <header class="main-head">
            <nav>
                <h1 id="logo">Travelly</h1>
                <ul>
                    <li><a href="#locations">Locations</a></li>
                    <li><a href="#benefits">Benefits</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
