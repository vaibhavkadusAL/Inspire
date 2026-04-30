import React from 'react';
import './WhyChooseCard.css';

const WhyChooseCard = ({ title, location, description, tag, tagColor }) => {
  return (
    <div className="why-choose-card">
      <div className="card-header">
        <div>
          <h3>{title}</h3>
          <p className="location"><span className="pin-icon">📍</span> {location}</p>
        </div>
        <div className={`tag tag-${tagColor}`}>{tag}</div>
      </div>
      <div className="card-body">
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <a href="#" className="view-details">View All Business →</a>
      </div>
    </div>
  );
};

export default WhyChooseCard;
