import React from 'react';
import './Leadership.css';

const Leadership = () => (
  <section className="leadership" id="leadership">
    <h2>Leadership & Community</h2>
    <div className="leadership-grid">
      <div className="leadership-card featured">
        <h3>🏆 General Secretary – ACM-DSU Student Chapter</h3>
        <p className="role-duration">2024 – Present</p>
        <ul className="leadership-achievements">
          <li><strong>Event Leadership:</strong> Led core team to plan, organize, and execute National Level Hackathons with 500+ participants</li>
          <li><strong>Technical Workshops:</strong> Organized workshops on Web Development, Cloud Computing, and emerging technologies</li>
          <li><strong>Industry Partnerships:</strong> Facilitated partnerships with industry mentors for student upskilling initiatives</li>
          <li><strong>Team Management:</strong> Coordinated cross-functional teams of 20+ members for seamless event execution</li>
          <li><strong>Community Building:</strong> Grew chapter engagement by 150% through innovative technical events and networking sessions</li>
        </ul>
      </div>

      <div className="leadership-card">
        <h3>🔗 Web3 Community Engagement</h3>
        <p className="role-duration">2024 – Present</p>
        <ul className="leadership-achievements">
          <li><strong>Learning Community:</strong> Active participant in Web3 developer communities and Discord servers</li>
          <li><strong>Knowledge Sharing:</strong> Contributing to open-source Web3 projects and documentation</li>
          <li><strong>Hackathons:</strong> Participating in blockchain hackathons to build practical dApp experience</li>
          <li><strong>Networking:</strong> Engaging with Web3 developers and blockchain enthusiasts on Twitter and LinkedIn</li>
        </ul>
      </div>

      <div className="leadership-card">
        <h3>💻 Technical Contributions</h3>
        <p className="role-duration">Ongoing</p>
        <ul className="leadership-achievements">
          <li><strong>Open Source:</strong> Contributing to Web3 and React-based open-source projects on GitHub</li>
          <li><strong>Code Quality:</strong> Implementing best practices in TypeScript, testing, and documentation</li>
          <li><strong>Mentorship:</strong> Helping junior developers learn React, TypeScript, and Web3 fundamentals</li>
          <li><strong>Innovation:</strong> Exploring cutting-edge Web3 technologies and integrating them into projects</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Leadership;