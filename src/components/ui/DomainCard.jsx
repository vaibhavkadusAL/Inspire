import React from 'react';
import './DomainCard.css';

const DomainCard = ({ title, icon, items }) => {
  return (
    <div className="domain-card">
      <div className="domain-icon">{icon}</div>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DomainCard;
