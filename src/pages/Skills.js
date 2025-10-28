import React from 'react';
import './Skills.css';

const Skills = () => (
  <section className="skills" id="skills">
    <h2>Technical Skills</h2>
    
    {/* Primary Web3 Skill - Featured */}
    <div className="skills-primary">
      <div className="skill-card-primary">
        <h3>🔗 Web3 & Blockchain</h3>
        <div className="skill-details">
          <div className="skill-detail-item">
            <strong>Core:</strong> Ethereum, Smart Contracts, Solidity (Learning), Web3.js, Ethers.js
          </div>
          <div className="skill-detail-item">
            <strong>Concepts:</strong> DeFi, NFTs, DAOs, Decentralized Identity (DID), Consensus Mechanisms
          </div>
          <div className="skill-detail-item">
            <strong>Tools:</strong> MetaMask, Hardhat, Truffle (Familiar), IPFS, The Graph
          </div>
          <div className="skill-detail-item">
            <strong>Wallets:</strong> Wallet Integration (WalletConnect, RainbowKit), Transaction Signing
          </div>
        </div>
      </div>
    </div>

    {/* Secondary Skills Grid */}
    <div className="skills-secondary">
      <div className="skill-card">
        <h3>Frontend Development</h3>
        <div className="skill-items">
          <div className="skill-item">
            <strong>Core:</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript
          </div>
          <div className="skill-item">
            <strong>Frameworks:</strong> React.js 19, Next.js 14, Vite
          </div>
          <div className="skill-item">
            <strong>Styling:</strong> Tailwind CSS, shadcn/ui, Framer Motion
          </div>
          <div className="skill-item">
            <strong>Features:</strong> Responsive Design, PWA, Web Crypto API
          </div>
        </div>
      </div>
      <div className="skill-card">
        <h3>Backend & Databases</h3>
        <div className="skill-items">
          <div className="skill-item">
            <strong>Backend:</strong> Node.js, Express.js
          </div>
          <div className="skill-item">
            <strong>Databases:</strong> MongoDB, MySQL, PostgreSQL (Familiar)
          </div>
          <div className="skill-item">
            <strong>APIs:</strong> RESTful APIs, JWT Authentication
          </div>
          <div className="skill-item">
            <strong>Security:</strong> AES-256-GCM, PBKDF2, SHA-256
          </div>
        </div>
      </div>
      <div className="skill-card">
        <h3>Development Tools</h3>
        <div className="skill-items">
          <div className="skill-item">
            <strong>Version Control:</strong> Git, GitHub, VS Code
          </div>
          <div className="skill-item">
            <strong>Package Managers:</strong> npm, yarn, pnpm
          </div>
          <div className="skill-item">
            <strong>API Testing:</strong> Postman, Thunder Client
          </div>
          <div className="skill-item">
            <strong>Deployment:</strong> Vercel, Netlify, Railway
          </div>
        </div>
      </div>
      <div className="skill-card">
        <h3>Testing & Quality</h3>
        <div className="skill-items">
          <div className="skill-item">
            <strong>Testing:</strong> Jest, React Testing Library
          </div>
          <div className="skill-item">
            <strong>Types:</strong> Unit Testing, Integration Testing
          </div>
          <div className="skill-item">
            <strong>Practices:</strong> Code Review, Best Practices
          </div>
          <div className="skill-item">
            <strong>Linting:</strong> ESLint, Prettier
          </div>
        </div>
      </div>
      <div className="skill-card">
        <h3>Programming Languages</h3>
        <div className="skill-items">
          <div className="skill-item">
            <strong>Expert:</strong> JavaScript/TypeScript
          </div>
          <div className="skill-item">
            <strong>Intermediate:</strong> Python
          </div>
          <div className="skill-item">
            <strong>Learning:</strong> Solidity
          </div>
          <div className="skill-item">
            <strong>Familiar:</strong> C, C++
          </div>
        </div>
      </div>
      <div className="skill-card">
        <h3>Soft Skills & Leadership</h3>
        <div className="skill-items">
          <div className="skill-item">
            <strong>Leadership:</strong> Team Leadership & Collaboration
          </div>
          <div className="skill-item">
            <strong>Management:</strong> Event Management & Organization
          </div>
          <div className="skill-item">
            <strong>Communication:</strong> Technical Communication
          </div>
          <div className="skill-item">
            <strong>Problem Solving:</strong> Critical Thinking
          </div>
        </div>
      </div>
      <div className="skill-card">
        <h3>Languages</h3>
        <div className="skill-items">
          <div className="skill-item">
            <strong>Fluent:</strong> English, Kannada, Hindi
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;