import React, { useState } from 'react';

const SessionBooking = ({ sessions }) => {
  const [selectedSessions, setSelectedSessions] = useState([]);

  const handleChange = (event) => {
    const session = event.target.value;
    setSelectedSessions((prevSessions) =>
      prevSessions.includes(session)
        ? prevSessions.filter((s) => s !== session)
        : [...prevSessions, session]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle booking logic here
    console.log('Booked sessions:', selectedSessions);
  };

  return (
    <div className="session-booking">
      <h2>Book Your Sessions</h2>
      <form onSubmit={handleSubmit}>
        {sessions.map((session) => (
          <div key={session.id} className="session-item">
            <input
              type="checkbox"
              id={session.id}
              value={session.name}
              onChange={handleChange}
            />
            <label htmlFor={session.id}>
              <h3>{session.name}</h3>
              <p>{session.description}</p>
              <p><strong>Time:</strong> {session.time}</p>
            </label>
          </div>
        ))}
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default SessionBooking;
