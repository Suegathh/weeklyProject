import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ticketType, setTicketType] = useState('General Admission');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for registering, ${name}!`);
    // Reset form fields
    setName('');
    setEmail('');
    setTicketType('General Admission');
  };

  return (
    <div className="registration-form">
      <h2>Register for the Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Ticket Type:
          <select
            value={ticketType}
            onChange={(e) => setTicketType(e.target.value)}
          >
            <option value="General Admission">General Admission</option>
            <option value="VIP">REGULAR</option>
            <option value="VIP">VIP</option>
            <option value="VVIP">VIP</option>
          </select>
        </label>
        <button type="submit">Join Now</button>
      </form>
    </div>
  );
}

export default Form;
