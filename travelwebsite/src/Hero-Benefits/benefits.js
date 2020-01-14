import React from 'react';
import './benefits.css';
import plane from "../icons/plane-departure-solid.svg"
import route from "../icons/route-solid.svg"
import bed from "../icons/route-solid.svg"
function Benefit() {
    return (
        <section id="benefits">
            <header class="benefits-head">
                <h2>The Perfect Travel</h2>
                <h3>
                    We cover everything for picking the perfect hotel <br />
                    to flight and destination.
          </h3>
            </header>
            <div class="cards">
                <div class="card">
                    <div class="card-icon">
                        <img src={route} alt="" />
                    </div>
                    <h4>Travel</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed
                        deleniti modi ipsa blanditiis incidunt!
            </p>
                </div>
                <div class="card">
                    <div class="card-icon">
                        <img src={bed} alt="" />
                    </div>
                    <h4>Hotel</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed
                        deleniti modi ipsa blanditiis incidunt!
            </p>
                </div>
                <div class="card">
                    <div class="card-icon">
                        <img src={plane} alt="" />
                    </div>
                    <h4>Fly</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed
                        deleniti modi ipsa blanditiis incidunt!
            </p>
                </div>
            </div>
        </section>
    );
}

export default Benefit;