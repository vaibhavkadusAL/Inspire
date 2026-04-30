import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, icon }) => {
  return (
    <div className="service-small-card">
      <div className="icon-wrapper">
        {icon}
      </div>
      <p>{title}</p>
    </div>
  );
};

export default ServiceCard;
