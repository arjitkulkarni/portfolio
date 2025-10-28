import React from 'react';
import './Projects.css';

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Featured Projects</h2>
    <p className="projects-subtitle">Building Web3-ready applications with modern frontend and cryptographic security</p>
    <div className="projects-list">
      <div className="project-item featured-project">
        <div className="project-header">
          <h3>
            <a href="https://github.com/arjitkulkarni/Bharat-ID-Shield" target="_blank" rel="noreferrer">
              🛡️ Bharat-ID-Shield
            </a>
          </h3>
          <span className="web3-badge">🔗 Web3 Ready</span>
        </div>
        <p className="project-description">Modern, secure digital identity platform for Indian citizens to manage government documents and credentials with strong privacy controls.</p>
        
        <div className="project-details">
          <div className="detail-section">
            <strong>💻 Tech Stack:</strong>
            <div className="tech-tags">
              <span className="tech-tag">React 18</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Vite</span>
              <span className="tech-tag">Tailwind CSS</span>
              <span className="tech-tag">shadcn/ui</span>
              <span className="tech-tag">PWA</span>
            </div>
          </div>
          
          <div className="detail-section">
            <strong>🔐 Security & Crypto:</strong>
            <p>CryptoJS, Web Crypto API, Local Storage Encryption, Service Workers</p>
          </div>
          
          <div className="detail-section web3-section">
            <strong>🔗 Web3 Integration:</strong>
            <p>On-chain hashing and verification ready. Designed for wallet-based authentication and decentralized identity (DID) attestations. Smart contract integration planned for immutable credential verification.</p>
          </div>
        </div>
      </div>

      <div className="project-item featured-project">
        <div className="project-header">
          <h3>
            <a href="https://github.com/arjitkulkarni/Bharat-ID-Ai-DeVote" target="_blank" rel="noreferrer">
              🗳️ Bharat-ID-Ai-DeVote
            </a>
          </h3>
          <span className="web3-badge">🔗 Web3 Ready</span>
        </div>
        <p className="project-description">Secure voting platform with biometric verification, AES-256-GCM encryption, and real-time results dashboard. Blockchain-backed for transparency and auditability.</p>
        
        <div className="project-details">
          <div className="detail-section">
            <strong>💻 Tech Stack:</strong>
            <div className="tech-tags">
              <span className="tech-tag">React 18</span>
              <span className="tech-tag">TypeScript 5.x</span>
              <span className="tech-tag">Tailwind CSS</span>
              <span className="tech-tag">Recharts</span>
              <span className="tech-tag">Vite</span>
            </div>
          </div>
          
          <div className="detail-section">
            <strong>🔐 Security & Crypto:</strong>
            <p>Web Crypto API, PBKDF2, AES-256-GCM, SHA-256, Encrypted localStorage, Biometric Verification</p>
          </div>
          
          <div className="detail-section web3-section">
            <strong>🔗 Web3 Integration:</strong>
            <p>Blockchain-backed vote record hashing for immutable audit trails. Compatible with decentralized identity (DID) flows. Each vote generates a cryptographic hash stored on-chain for transparency while maintaining voter privacy.</p>
          </div>
        </div>
      </div>

      <div className="project-item">
        <div className="project-header">
          <h3>
            <a href="https://github.com/arjitkulkarni/MediNation" target="_blank" rel="noreferrer">
              🏥 MediNation
            </a>
          </h3>
          <span className="web3-badge planning">🔗 Web3 Planned</span>
        </div>
        <p className="project-description">Healthcare platform prototype for secure patient records and appointment workflows with emphasis on privacy, portability, and patient data ownership.</p>
        
        <div className="project-details">
          <div className="detail-section">
            <strong>💻 Tech Stack (Planned):</strong>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">MongoDB</span>
            </div>
          </div>
          
          <div className="detail-section web3-section">
            <strong>🔗 Web3 Roadmap:</strong>
            <p>On-chain document fingerprinting for tamper-evident medical records. Smart contract-based consent management. IPFS for decentralized storage of encrypted health data. Patient-controlled data access via wallet authentication.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;