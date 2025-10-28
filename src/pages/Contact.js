import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to a backend or email service
    setSubmitStatus('Thank you! Your message has been received. I\'ll get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>
      <p className="contact-subtitle">Interested in Web3 collaboration or internship opportunities? Let's connect!</p>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows="5" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {submitStatus && <p className="submit-status">{submitStatus}</p>}
        </form>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-detail">
            <strong>📧 Email:</strong>
            <a href="mailto:arjitkulkarni81018@gmail.com">arjitkulkarni81018@gmail.com</a>
          </div>
          <div className="contact-detail">
            <strong>📱 Phone:</strong>
            <a href="tel:+919740371329">+91 9740371329</a>
          </div>
          <div className="contact-detail">
            <strong>📍 Location:</strong>
            <span>Bangalore, India</span>
          </div>
          <div className="social-links">
            <h4>Connect on Social</h4>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/arjit-kulkarni-251238326/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                LinkedIn
              </a>
              <a href="https://github.com/arjitkulkarni" target="_blank" rel="noopener noreferrer" className="social-link github">
                GitHub
              </a>
            </div>
          </div>
          <div className="availability">
            <strong>🚀 Availability:</strong>
            <p>Open for Summer 2025 Web3 internships</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;