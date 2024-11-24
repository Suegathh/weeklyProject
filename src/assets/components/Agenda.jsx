import React, { useState } from 'react';
import './Agenda.css';

function Agenda() {
  const [sessions, setSessions] = useState([
    { id: 1, time: '10:00 AM', name: 'Opening Keynote', speaker: 'John Smith', description: 'Introduction to the event.' },
    { id: 2, time: '11:00 AM', name: 'Tech Innovations', speaker: 'Jane Doe', description: 'Latest trends in technology.' },
    // Add more sessions here
  ]);

  return (
    <div className="agenda">
      <h2>Event Agenda</h2>
      <ul>
        {sessions.map(session => (
          <li key={session.id}>
            <strong>{session.time}</strong> - {session.name}<br />
            Speaker: {session.speaker}<br />
            <p>{session.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Agenda;
