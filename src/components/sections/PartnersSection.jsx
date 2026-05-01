import React from 'react';
import './PartnersSection.css';

// Partner logo imports
import dubaiChambers from '../../assets/partner/Dubai-Chambers.svg';
import difc from '../../assets/partner/Dubai-International-Financial-Centre-(DIFC).png';
import dmcc from '../../assets/partner/Dubai-Multi-Commodities-Centre-(DMCC).svg';
import expoCity from '../../assets/partner/Expo-City-Dubai.svg';
import smartDubai from '../../assets/partner/Smart-Dubai@4x.png';
import dubaiEconomy from '../../assets/partner/dubai-economy.png';
import dubaiFdi from '../../assets/partner/dubai-fdi.png';

const partners = [
  { name: 'Dubai Chambers', logo: dubaiChambers },
  { name: 'DIFC', logo: difc },
  { name: 'DMCC', logo: dmcc },
  { name: 'Expo City Dubai', logo: expoCity },
  { name: 'Smart Dubai', logo: smartDubai },
  { name: 'Dubai Economy', logo: dubaiEconomy },
  { name: 'Dubai FDI', logo: dubaiFdi },
];

const PartnersSection = () => {
  // Duplicate for seamless infinite scroll
  const items = [...partners, ...partners];

  return (
    <section className="partners-section">
      <div className="partners-header">
        <p>Trusted by Leading Partners &amp; Clients</p>
      </div>
      <div className="partners-track-wrapper">
        <div className="partners-track">
          {items.map((partner, i) => (
            <div className="partner-chip" key={i}>
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
