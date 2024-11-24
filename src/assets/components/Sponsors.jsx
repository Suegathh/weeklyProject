import React from 'react';

const Sponsors = ({ sponsors }) => {
  return (
    <div className="sponsors">
      <h2>Our Sponsors</h2>
      <div className="sponsor-list">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-item">
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
            </a>
            <h3>{sponsor.name}</h3>
            <p>{sponsor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
