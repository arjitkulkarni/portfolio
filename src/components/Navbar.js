import React, { useState } from 'react';
import './Navbar.css';

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
        <li><a href="/Arjit_Kulkarni_Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;