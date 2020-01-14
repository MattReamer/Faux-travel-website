import React from 'react';
import './footer.css';
import insta from '../icons/instagram.svg'
import youtube from '../icons/youtube.svg'
import twitter from '../icons/twitter.svg'

function Footer() {
    return (

        <footer>
            <div class="footer-wrapper">
                <h5>Travelly &copy;</h5>
                <ul>
                    <li>
                        <a href="#" title="twitter-social-media"
                        ><img src={twitter} alt="twitter-social-media"
                            /></a>
                    </li>
                    <li>
                        <a href="#" title="youtube-social-media"
                        ><img src={youtube} alt="youtube-social-media"
                            /></a>
                    </li>
                    <li>
                        <a href="#" title="instagram-social-media"
                        ><img src={insta} alt="instagram-social-media"
                            /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
