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
              <img src={symbolImage} alt="Inspire Logo" width="100" height="100" />
            </div>
            <p className="tagline">Your trusted partner for end-to-end business setup solutions in the UAE.</p>
          </div>

          <div className="footer-links-container">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#/">Home</a></li>
                <li><a href="#/services">Services</a></li>
                <li><a href="#/freezone">Free Zone</a></li>
                <li><a href="#/process">Process</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Business Setup</a></li>
                <li><a href="#">Government Services</a></li>
                <li><a href="#">Funding & Project Management</a></li>
                <li><a href="#">Marketing & Events</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="contact-info">
                <li><span className="icon">✉️</span> <a href="mailto:Info@alilhammanagement.com" style={{color: 'inherit', textDecoration: 'none'}}>Info@alilhammanagement.com</a></li>
                <li><span className="icon">📞</span> +971505203821</li>
                <li><span className="icon">📍</span> Business Bay, Dubai,<br />United Arab Emirates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2026 Inspire. All Rights Reserved.</p>
          <div className="social-links">
            <a
              href="https://wa.me/971505203821"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >W</a>
            <a
              href="https://www.linkedin.com/company/alilhammanagement/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >in</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
