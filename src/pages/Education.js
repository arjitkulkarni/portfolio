import React from 'react';
import './Education.css';

const Education = () => (
  <section className="education" id="education">
    <h2>Education</h2>
    <div className="education-timeline">
      <div className="education-item">
        <h3>B.Tech in Computer Science and Engineering</h3>
        <p>Dayananda Sagar University, Bangalore</p>
        <span>2024 – 2028</span>
        <ul>
          <li>Core focus: Software Development, Data Structures, Web Technologies</li>
          <li>Active Member & Secretary, ACM-DSU Chapter</li>
        </ul>
      </div>
      <div className="education-item">
        <h3>PUC – PCMC (Physics, Chemistry, Math, Computer Science)</h3>
        <p>Narayana Olympiad School</p>
        <span>2022 – 2024</span>
        <ul>
          <li>Developed early interest in programming and mobile app development</li>
          <li>Built foundation in algorithmic thinking and logical reasoning</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Education; 