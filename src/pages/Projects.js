import React from 'react';
import './Projects.css';

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Projects</h2>
    <div className="projects-list">
      <div className="project-item">
        <h3><a href="https://github.com/arjitkulkarni/Bharat-ID-Shield" target="_blank" rel="noreferrer">Bharat-ID-Shield</a></h3>
        <p>Identity protection utilities. TypeScript.</p>
        <small className="project-sub"><strong>Abstract:</strong> Modern, secure digital identity platform for Indian citizens to manage government documents and credentials with strong privacy controls.</small>
        <small className="project-sub"><strong>Codebase:</strong> React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, React Hooks, Local Storage, CryptoJS, Web Crypto API, PWA (Service Workers, Manifest).</small>
        <small className="project-sub"><strong>Web3 & Blockchain:</strong> On-chain hashing and verification ready; designed to integrate with wallet flows for identity attestations.</small>
      </div>
      <div className="project-item">
        <h3><a href="https://github.com/arjitkulkarni/Bharat-ID-Ai-DeVote" target="_blank" rel="noreferrer">Bharat-ID-Ai-DeVote</a></h3>
        <p>AI-powered voting/identity workflows. TypeScript.</p>
        <small className="project-sub"><strong>Abstract:</strong> Secure voting platform integrated with Bharat-ID featuring biometric verification, AES-256-GCM encryption, and real-time results dashboard.</small>
        <small className="project-sub"><strong>Codebase:</strong> React 18, TypeScript 5.x, Tailwind CSS, Recharts, Vite; Web Crypto API, PBKDF2, AES-256-GCM, SHA-256, encrypted localStorage.</small>
        <small className="project-sub"><strong>Web3 & Blockchain:</strong> Blockchain-backed vote record hashing and auditability; compatible with decentralized identity (DID) flows.</small>
      </div>
      <div className="project-item">
        <h3><a href="https://github.com/arjitkulkarni/MediNation" target="_blank" rel="noreferrer">MediNation</a></h3>
        <p>Healthcare-related app prototype.</p>
        <small className="project-sub"><strong>Abstract:</strong> Prototype for secure patient records and appointment workflows with emphasis on privacy and portability.</small>
        <small className="project-sub"><strong>Codebase:</strong> React/TypeScript (planned), Node/Express API (planned), MongoDB (planned).</small>
        <small className="project-sub"><strong>Web3 & Blockchain:</strong> Planned on-chain document fingerprinting and consent logs for tamper-evident medical records.</small>
      </div>
    </div>
  </section>
);

export default Projects;