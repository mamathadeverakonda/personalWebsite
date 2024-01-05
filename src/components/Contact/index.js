import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './index.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out to me for any opportunities or just to say hi! You can contact me through the form
        below or connect with me on social media.
      </p>

      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="social-icons">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
       
      </div>
    </section>
  );
};

export default Contact;
