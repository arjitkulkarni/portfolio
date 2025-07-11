import React from 'react';
import './Projects.css';

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Projects</h2>
    <div className="projects-list">
      <div className="project-item">
        <h3>Portfolio Website</h3>
        <p>Designed and deployed a personal site using HTML, CSS, and Js and JSX with all react modules</p>
      </div>
      <div className="project-item">
        <h3>To-Do Web App (React + Node.js)</h3>
        <p>Created a full-stack task manager with login and CRUD features</p>
      </div>
      <div className="project-item">
        <h3>ACM Event Portal</h3>
        <p>Assisted in building a portal for a Hackathon in  DSU</p>
      </div>
    </div>
  </section>
);

export default Projects; 