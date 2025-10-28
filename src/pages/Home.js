import React from 'react';
import './Home.css';

// Using unavatar for a reliable GitHub avatar without bundling local assets

const Home = () => (
  <section className="home" id="home">
    <div className="home-content">
      <div className="home-header">
        <img src="https://unavatar.io/github/arjitkulkarni" alt="Arjit Kulkarni" className="profile-pic" />
        <div>
          <h1>Arjit Kulkarni</h1>
          <p>Bangalore, India</p>
          <p>CSE - Dayananda Sagar University</p>
          <p>9740371329 • arjitkulkarni81018@gmail.com</p>
        </div>
      </div>
      <div className="home-links">
        <a href="https://www.linkedin.com/in/arjit-kulkarni-251238326/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/arjitkulkarni" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="/Arjit_Kulkarni_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
      <p className="home-profile">
        Computer Science undergraduate passionate about building clean, responsive web experiences using React, TypeScript, and the MERN stack. As General Secretary of ACM-DSU, I led national-level hackathon/event execution and cross-functional teams. Actively shipping projects like Bharat-ID, Webstyle-DOWN, and more. Looking for a Summer internship to contribute to frontend and full‑stack features in a fast-moving team.
      </p>
    </div>
  </section>
);

export default Home;