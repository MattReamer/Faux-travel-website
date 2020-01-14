import React from 'react';
import './contact.css';

function Contact() {
    return (
        <section id="contact">
            <div class="form-wrapper">
                <header class="form-head">
                    <h2>Contact Us</h2>
                </header>
                <form action="" method="POST">
                    <div class="name-form">
                        <label for="name">Name:</label>
                        <input id="name" type="text" name="name" required minlength="4" />
                    </div>
                    <div class="email-form">
                        <label for="email">Email:</label>
                        <input id="email" type="email" required name="_replyto" />
                    </div>
                    <button value="Send" type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
