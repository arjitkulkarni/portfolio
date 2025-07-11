import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { motion } from 'framer-motion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Arjit Kulkarni</div>
      <div
        className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        tabIndex={0}
        onKeyPress={e => { if (e.key === 'Enter') setMenuOpen(!menuOpen); }}
      >
        <span />
        <span />
        <span />
        <span />
      </div>
      <ul className={`navbar-links${menuOpen ? ' show' : ''}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
        <li><a href="#leadership" onClick={() => setMenuOpen(false)}>Leadership</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
