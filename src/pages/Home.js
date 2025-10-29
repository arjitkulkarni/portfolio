import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import profileImage from '../ak.jpg';

// Using unavatar for a reliable GitHub avatar without bundling local assets

const Home = () => (
  <section className="home" id="home">
    <motion.div 
      className="home-content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="home-header">
        <img src={profileImage} alt="Arjit Kulkarni" className="profile-pic" />
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
        <a href="https://drive.google.com/file/d/13-vpYOeMSh0rAYJD17cmY8-ZEv_36v8p/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
      <p className="home-profile">
        Computer Science undergraduate passionate about <strong>Web3 and blockchain technologies</strong>. Building decentralized applications with React, TypeScript, and exploring smart contract development with Solidity. Experienced in cryptographic implementations (AES-256-GCM, SHA-256), wallet integrations, and decentralized identity systems. As General Secretary of ACM-DSU, I led national-level hackathons and technical events. Actively developing Web3-ready projects like <strong>Bharat-ID-Shield</strong> (identity attestations) and <strong>Bharat-ID-Ai-DeVote</strong> (blockchain-backed voting). Seeking a <strong>Summer 2025 Web3 internship</strong> to contribute to DeFi, NFT, or dApp development in an innovative blockchain team.
      </p>
    </motion.div>
  </section>
);

export default Home;