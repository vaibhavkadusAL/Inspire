import React from 'react';
import './ServicesSection.css';
import DomainCard from '../ui/DomainCard';

const ServicesSection = () => {
  const domains = [
    {
      title: 'Business Setup',
      icon: '🏢',
      items: ['All types of Licenses', 'General', 'Free Zone', 'Leasing & Setup Services', 'Mainland Trade', 'Freelance Permits']
    },
    {
      title: 'Government Services',
      icon: '🏛️',
      items: ['Visa & Residency', 'PRO services', 'Trade Name registration']
    },
    {
      title: 'Funding & Project Management',
      icon: '💰',
      items: ['SME Finance sourcing', 'Project Management']
    },
    {
      title: 'Marketing & Events',
      icon: '📢',
      items: ['Brand formation', 'Marketing strategy', 'Digital Marketing', 'Media & Comms', 'Exhibition and Seminars', 'Social media mgt']
    }
  ];

  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <h2 className="section-title text-center">Business Domains</h2>
        
        <div className="domains-grid">
          {domains.map((domain, index) => (
            <a href="#/services" key={index} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <DomainCard {...domain} />
            </a>
          ))}
        </div>
        
        <div className="text-center mt-50">
          <a href="#/services" className="btn btn-primary dark-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>View All Services</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
