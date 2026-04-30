import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-overlay">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">About Us</h2>

            <h3 className="section-subtitle">
              More Than a Setup Service, Your Growth Partner
            </h3>

            <div className="about-text">
              <p>
                At <strong>INSPIRE</strong>, we go beyond company formation. We
                work alongside you as a long-term partner, helping you navigate
                the process, make the right decisions, and build a strong
                foundation for your business.
              </p>

              <p>
                Every client is different. That’s why we deliver tailored
                solutions designed to meet your specific goals: quickly,
                efficiently, and with complete transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;