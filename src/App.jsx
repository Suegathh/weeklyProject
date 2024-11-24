import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Agenda from './assets/components/Agenda';
import Speakers from './assets/components/Speakers';
import Sponsors from './assets/components/Sponsors';
import Footer from './assets/components/Footer';
import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home';
import Form from './assets/components/Form';
import Countdown from './assets/components/Countdown';

function App() {
  return (
    <Router>
      <div>
       <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="/event" element={<Event />} />
          <Route path='/form' element={<Form />} />
          <Route path='/countdown' element={<Countdown />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/sponsers" element={<Sponsors />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        
        
       
      </div>
    </Router>
  );
}

export default App;
