import React from 'react';
import './TrustSection.css';

const TrustSection = () => {
  return (
    <section className="trust-section section-padding" id="howitworks">
      <div className="container">

        {/* HEADER */}
        <div className="trust-header">
          <div className="trust-title">
            <h2>
              Start your business with <br />
              confidence and clarity.
            </h2>
          </div>

          <div className="trust-desc">
            <p>
              <strong>INSPIRE</strong> provides complete support to help you establish 
              and grow your company without complexity or delays.
            </p>
          </div>
        </div>

        {/* CURVE + STEPS */}
        <div className="process-path-container">

          <svg className="path-svg" viewBox="0 0 1000 300" preserveAspectRatio="none">
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DBC3A3" stopOpacity="0.2" />
                <stop offset="25%" stopColor="#DBC3A3" />
                <stop offset="50%" stopColor="#C4B6A6" />
                <stop offset="75%" stopColor="#A2B4D6" />
                <stop offset="100%" stopColor="#A2B4D6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path d="M0,300 Q500,-120 1000,300" fill="none" stroke="url(#curveGradient)" strokeWidth="1.5" />
          </svg>

          <div className="process-steps">

            {/* STEP 1 */}
            <div className="step step-1">
              <div className="step-dot"></div>
              <div className="step-card">
                <p>
                  Open and operate your <br />
                  business remotely
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="step step-2">
              <div className="step-dot"></div>
              <div className="step-card">
                <p>
                  Flexible setup across <br />
                  Free Zone and Mainland
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="step step-3">
              <div className="step-dot"></div>
              <div className="step-card">
                <p>
                  End-to-end support <br />
                  from setup to growth
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;