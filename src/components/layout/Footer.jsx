import React from 'react';
import './Footer.css';
import symbolImage from '../../assets/images/symbol.png';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src={symbolImage} alt="Inspire Logo" width="40" height="40" />
              <span className="logo-text">INSPIRE</span>
            </div>
            <p className="tagline">Your trusted partner for end-to-end business setup solutions in the UAE.</p>
          </div>

          <div className="footer-links-container">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#freezone">Free Zone</a></li>
                <li><a href="#process">Process</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Business Setup</a></li>
                <li><a href="#">B2B Marketing</a></li>
                <li><a href="#">Visas & Residency</a></li>
                <li><a href="#">Banking</a></li>
                <li><a href="#">Tax & Accounting</a></li>
                <li><a href="#">PRO Services</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="contact-info">
                <li><span className="icon">✉️</span> info@inspire.ae</li>
                <li><span className="icon">📞</span> +971 50 520 3821</li>
                <li><span className="icon">📍</span> Business Bay, Dubai,<br />United Arab Emirates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2024 Inspire. All Rights Reserved.</p>
          <div className="social-links">
            <a href="#">f</a>
            <a href="#">X</a>
            <a href="#">in</a>
            <a href="#">ig</a>
            <a href="#">yt</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
