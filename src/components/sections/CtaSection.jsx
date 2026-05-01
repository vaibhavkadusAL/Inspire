import React from 'react';
import './CtaSection.css';

const CtaSection = ({ 
  bgImage, 
  title = "Start Your Business Today", 
  description = "Take the first step toward launching your company with a trusted partner by your side.",
  primaryBtnText = "Book Appointment",
  showSecondaryBtn = true
}) => {
  return (
    <section className="cta-section section-padding">
      <div className="container">
        <div className="cta-card" style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}>
          <div className="cta-content">
            <h2>{title}</h2>
            <p>{description}</p>
            
            <div className="cta-btns">
              <button className="btn btn-primary dark-btn">{primaryBtnText}</button>
              {showSecondaryBtn && (
                <button className="btn btn-outline call-btn-white">
                  <span className="phone-icon">📞</span> Call Now: +971505203821
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
