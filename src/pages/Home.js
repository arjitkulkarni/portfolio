import React from 'react';
import './Home.css';
import profilePic from '../assets/profile.jpg'; // Add this import for the profile image

const Home = () => (
  <section className="home" id="home">
    <div className="home-content">
      <div className="home-header">
        <img src={profilePic} alt="Arjit Kulkarni" className="profile-pic" />
        <div>
          <h1>Arjit Kulkarni</h1>
          <p>Bangalore, India</p>
          <p>CSE - Dayananda Sagar University</p>
          <p>📞9740371329 • 📧 arjitkulkarni81018@gmail.com</p>
        </div>
      </div>
      <div className="home-links">
        <a href="https://www.linkedin.com/in/arjit-kulkarni-251238326//" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/arjitkulkarni" target="_blank" rel="noopener noreferrer">GitHub</a>
        {/* Add Portfolio link if available */}
      </div>
      <p className="home-profile">
        Motivated Computer Science undergraduate at Dayananda Sagar University with a passion for front-end development and user-focused design. As General Secretary of the ACM-DSU Student Chapter, I led the planning and execution of major tech events, fostering community engagement and collaboration. With a solid grasp of HTML, CSS, JavaScript, and the MERN stack, I’m eager to contribute to dynamic web projects that blend creativity with functionality. Strong in communication, teamwork, and problem-solving, I thrive in fast-paced environments that encourage innovation and continuous learning.
      </p>
    </div>
  </section>
);

export default Home; 