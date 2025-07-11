import React from 'react';
import './Skills.css';

const Skills = () => (
  <section className="skills" id="skills">
    <h2>Skills</h2>
    <div className="skills-content">
      <div>
        <h3>Frontend Development</h3>
        <p>HTML5, CSS3, JavaScript, React.js,Next.js</p>
      </div>
      <div>
        <h3>Backend & Tools</h3>
        <p>Node.js, Express.js, MongoDB, MySQL, Git, GitHub</p>
      </div>
      <div>
        <h3>Programming Languages</h3>
        <p>Python, C ,C++</p>
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