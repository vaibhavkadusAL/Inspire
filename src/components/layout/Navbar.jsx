import React, { useState } from 'react';
import './Navbar.css';
import symbolImage from '../../assets/images/symbol.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <img src={symbolImage} alt="Inspire Logo" width="70" height="70" />
        </div>

        <div className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <li><a href="#/" onClick={toggleMenu}>Home</a></li>
          <li className="dropdown">
            <a href="#/services" onClick={toggleMenu}>Services <span className="arrow">▼</span></a>
          </li>
          <li><a href="#/freezone" onClick={toggleMenu}>Free Zone</a></li>
          <li>
            <a href="#/" onClick={(e) => {
              toggleMenu();
              setTimeout(() => {
                document.getElementById('howitworks')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}>How It Works</a>
          </li>
          <li><a href="#/contact" onClick={toggleMenu}>Contact</a></li>

          <div className="nav-actions mobile-only">
            <button className="btn btn-primary w-100">Schedule Consultation</button>
          </div>
        </ul>

        <div className="nav-actions desktop-only">
          <button className="btn btn-primary">Schedule Consultation</button>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
