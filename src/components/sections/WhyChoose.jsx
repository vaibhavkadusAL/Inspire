import React from 'react';
import './WhyChoose.css';
import WhyChooseCard from '../ui/WhyChooseCard';

const WhyChoose = () => {
  const cards = [
    {
      title: 'RAKEZ',
      location: 'Ras Al Khaimah',
      description: 'Ideal for startups and SMEs with competitive pricing.',
      tag: 'Budget',
      tagColor: 'green'
    },
    {
      title: 'IFZA',
      location: 'Dubai Silicon Oasis',
      description: 'Ideal for startups and SMEs with competitive pricing.',
      tag: 'Popular',
      tagColor: 'blue'
    },
    {
      title: 'Meydan',
      location: 'Meydan Free Zone',
      description: 'Ideal for startups and SMEs with competitive pricing.',
      tag: 'Premium',
      tagColor: 'purple'
    }
  ];

  return (
    <section className="why-choose-section section-padding" id="freezone">
      <div className="container">
        <div className="why-choose-header">
          <h2>Why Choose Inspire</h2>
          <p>Built for Speed, Designed for Growth</p>
          <p className="subtitle-text">We simplify the complexities of set up so you can focus on what matters: building your business.</p>
        </div>
        
        <div className="why-choose-grid">
          {cards.map((card, index) => (
            <WhyChooseCard key={index} {...card} />
          ))}
        </div>
      </div>
      
      <div className="city-silhouette"></div>
    </section>
  );
};

export default WhyChoose;
