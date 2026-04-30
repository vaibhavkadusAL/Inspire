import React from 'react';
import './TrustSection.css';

const TrustSection = () => {
  return (
    <section className="trust-section section-padding">
      <div className="container">
        <div className="trust-header">
          <div className="trust-title">
            <h2>Start your business with <br />confidence and clarity.</h2>
          </div>
          <div className="trust-desc">
            <p><strong>INSPIRE</strong> provides complete support to help you establish and grow your company without complexity or delays.</p>
          </div>
        </div>
        
        <div className="process-path-container">
          <svg className="path-svg" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <path d="M250,400 Q500,-50 750,400" fill="none" stroke="#A0ABC0" strokeWidth="1.5" />
          </svg>
          
          <div className="process-steps">
            <div className="step step-1">
              <div className="step-dot"></div>
              <div className="step-card">
                <p>Open and operate your<br />business remotely</p>
              </div>
            </div>
            
            <div className="step step-2">
              <div className="step-dot"></div>
              <div className="step-card">
                <p>Flexible setup across<br />Free Zone and Mainland</p>
              </div>
            </div>
            
            <div className="step step-3">
              <div className="step-dot"></div>
              <div className="step-card">
                <p>End-to-end support<br />from setup to growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
