import React from 'react';
import './Hero.css';
import heroImage from '../../assets/images/Frame 2147207866.jpg.jpeg';

const Hero = () => {
  return (
    <section 
      className="hero-section" 
      style={{ 
        backgroundImage: `url('${heroImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="hero-bg">
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text-area">
          <h1 className="serif">Trusted Business Setup Partner in the UAE</h1>
          <p>
            Launch, operate, and grow your business with end-to-end solutions,
            whether you're in the UAE or anywhere in the world.
          </p>

          <div className="hero-btns">
            <a
              href="https://wa.me/971505103821"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book Appointment <span className="arrow-right">→</span>
            </a>
            <a
              href="tel:+971505103821"
              className="btn btn-outline call-btn"
            >
              <span className="phone-icon">📞</span> Call Now: +971 50 510 3821
            </a>
          </div>
        </div>

        <div className="hero-image-overlay-cards">
          {/* Optional cards */}
        </div>
      </div>
    </section>
  );
};

export default Hero;