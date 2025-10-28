import React from 'react';
import './Skills.css';

const Skills = () => (
  <section className="skills" id="skills">
    <h2>Skills</h2>
    <div className="skills-content">
      <div>
        <h3>Frontend</h3>
        <p>HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS</p>
      </div>
      <div>
        <h3>Backend & Databases</h3>
        <p>Node.js, Express.js, MongoDB, MySQL</p>
      </div>
      <div>
        <h3>Tools</h3>
        <p>Git, GitHub, VS Code, Postman, npm, Vercel, Netlify</p>
      </div>
      <div>
        <h3>Testing & Quality</h3>
        <p>Jest (basics), React Testing Library (basics)</p>
      </div>
      <div>
        <h3>Programming Languages</h3>
        <p>Python, C, C++</p>
      </div>
      <div>
        <h3>Soft Skills</h3>
        <p>Leadership, Time Management, Communication, Critical Thinking</p>
      </div>
      <div>
        <h3>Languages</h3>
        <ul>
          <li>English: Fluent</li>
          <li>Kannada: Fluent</li>
          <li>Hindi: Fluent</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills; 