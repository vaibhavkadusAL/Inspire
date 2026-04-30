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
            <DomainCard key={index} {...domain} />
          ))}
        </div>
        
        <div className="text-center mt-50">
          <button className="btn btn-primary dark-btn">View All Services</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
