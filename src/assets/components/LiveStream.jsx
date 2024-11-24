import React from 'react';

const LiveStream = ({ videoUrl, description, schedule }) => {
  return (
    <div className="livestream">
      <h2>Live Stream</h2>
      <p>{description}</p>
      <div className="video-container">
        <iframe
          width="100%"
          height="480"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Live Stream"
        ></iframe>
      </div>
      <h3>Schedule</h3>
      <ul>
        {schedule.map((item, index) => (
          <li key={index}>
            <strong>{item.time}</strong>: {item.event}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveStream;
