import React from 'react';
import './ProcessSection.css';

const ProcessSection = () => {
  const steps = [
    { 
      title: 'Consultation', 
      desc: 'We understand your goals and recommend the best setup' 
    },
    { 
      title: 'Documentation & Planning', 
      desc: 'We handle all required paperwork and approvals' 
    },
    { 
      title: 'Company Setup & Licensing', 
      desc: 'Your business is registered and ready to operate' 
    },
    { 
      title: 'Launch & Ongoing Support', 
      desc: 'We continue to support your growth journey' 
    }
  ];

  return (
    <section className="process-section">
      <div className="process-background">
        <div className="container">
          <div className="process-header">
            <h2>Simple, Structured, Efficient</h2>
            <p>Our process is designed to make your journey smooth and stress-free.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="process-cards">
          {steps.map((step, index) => (
            <div className="process-card" key={index}>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
