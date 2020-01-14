import React from 'react';
import './locations.css';
import cloud from '../img/cloud.png'

function Location() {
    return (
        <section id="locations">
            <header class="locations-head">
                <h2>The Perfect Travelling Experience.</h2>
                <h3>
                    We cover everything from picking the perfect hotel, <br />
                    flight and travelling destination.
                </h3>

                <img src={cloud} class="moving-cloud-1 cloud" alt="" />
                <img src={cloud} class="moving-cloud-2 cloud" alt="" />
            </header>
        </section>
    );
}

export default Location;
