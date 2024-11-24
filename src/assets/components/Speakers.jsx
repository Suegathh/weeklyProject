import React from 'react';
import './Speakers.css';

function Speakers() {
  const speakers = [
    { id: 1, 
        name: 'John Smith', 
        bio: 'Expert in technology.',
         twitter: 'https://twitter.com/john' },
    { id: 2, 
        name: 'Jane Doe', 
        bio: 'Leader in innovations.',
        twitter: 'https://twitter.com/jane' },
    
  ];

  return (
    <div className="speakers">
      <h2>Featured Speakers</h2>
      <div className="speaker-list">
        {speakers.map(speaker => (
          <div key={speaker.id} className="speaker-card">
            <h3>{speaker.name}</h3>
            <p>{speaker.bio}</p>
            <a href={speaker.twitter} target="_blank" rel="noopener noreferrer" className="fab fa-twitter">Twitter</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speakers;
