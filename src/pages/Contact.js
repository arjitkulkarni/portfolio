import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contact</h2>
    <div className="contact-content">
      <form className="contact-form" onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>Email: <a href="mailto:arjitkulkarni21506@gmail.com">arjitkulkarni21506@gmail.com</a></p>
        <p>Phone: <a href="tel:+919740371329">+91 9740371329</a></p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact; 