import React from 'react';
import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta-section section-padding">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <h2>Start Your Business Today</h2>
            <p>Take the first step toward launching your company with a trusted partner by your side.</p>
            
            <div className="cta-btns">
              <button className="btn btn-primary dark-btn">Book Appointment</button>
              <button className="btn btn-outline call-btn-white">
                <span className="phone-icon">📞</span> Call Now: +971 50 520 3821
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
