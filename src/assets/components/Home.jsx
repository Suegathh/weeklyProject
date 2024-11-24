import React, { useState } from 'react';
import Agenda from './Agenda';
import Speakers from './Speakers';
import Form from './Form';
import Sponsors from './Sponsors';
import Countdown from './Countdown';
import SessionBooking from './SessionBooking';
import LiveStream from './LiveStream';
import Merchandise from './Merchandise';
import './Home.css';

const translations = {
  en: {
    welcome: "Welcome to the Sprinkle Of Magic Conference",
    agenda: "Agenda",
    speakers: "Speakers",
    register: "Register",
    sponsors: "Sponsors",
    sessionBooking: "Book Your Sessions",
    liveStream: "Live Stream",
    merchandise: "Event Merchandise",
    contactUs: "Contact us: contact@SOM.com",
    copyright: "© 2024 Sprinkle Of Magic. All rights reserved.",
    hideDetails: "Hide Details",
    showDetails: "Show Details"
  },
  fr: {
    welcome: "Bienvenue à la conférence Sprinkle Of Magic",
    agenda: "Agenda",
    speakers: "Orateurs",
    register: "S'inscrire",
    sponsors: "Sponsors",
    sessionBooking: "Réservez vos sessions",
    liveStream: "Diffusion en direct",
    merchandise: "Marchandise de l'événement",
    contactUs: "Contactez-nous : contact@SOM.com",
    copyright: "© 2024 Sprinkle Of Magic. Tous droits réservés.",
    hideDetails: "Cacher les détails",
    showDetails: "Afficher les détails"
  }
};

const getTranslation = (lang, key) => {
  return translations[lang][key] || translations['en'][key];
};

const LanguageToggle = ({ currentLanguage, changeLanguage }) => {
  return (
    <div className="language-toggle">
      <button onClick={() => changeLanguage('en')} disabled={currentLanguage === 'en'}>English</button>
      <button onClick={() => changeLanguage('fr')} disabled={currentLanguage === 'fr'}>French</button>
    </div>
  );
};

function Home() {
  const [showSections, setShowSections] = useState(false);
  const [language, setLanguage] = useState('en');
  const eventDate = "2025-12-31T23:59:59";

  const sessions = [
    {
      id: 1,
      name: "Session 1: Intro to Magic",
      description: "Learn the basics of magic and spell casting.",
      time: "10:00 AM - 11:00 AM"
    },
    {
      id: 2,
      name: "Session 2: Advanced Spell Casting",
      description: "Dive deeper into advanced spells and incantations.",
      time: "11:30 AM - 12:30 PM"
    },
    {
      id: 3,
      name: "Session 3: Mystical Creatures",
      description: "Explore the world of mystical creatures and their powers.",
      time: "1:00 PM - 2:00 PM"
    }
  ];

  const products = [
    { id: 1, name: "Magic Wand", 
        description: "A powerful tool for all wizards.", 
        price: 29.99,
     },
    { id: 2, 
        name: "Wizard Hat", 
        description: "Look stylish while casting spells.", 
        price: 19.99, 
     }
  ];

  const sponsors = [
    {
      id: 1,
      name: "Magic Co.",
      description: "Innovative magic tools and resources.",
      link: "https://www.magicco.com"
    },
    {
      id: 2,
      name: "Wizards United",
      description: "A community for wizards around the world.",
      link: "https://www.wizardsunited.com"
    }
  ];

  const liveStreamUrl = 'https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID';
  const liveStreamDescription = "Watch the keynote speeches and important sessions live!";
  const liveStreamSchedule = [
    { time: "10:00 AM", event: "Keynote Speech: The Future of Magic" },
    { time: "11:00 AM", event: "Panel Discussion: Innovations in Spell Casting" },
    { time: "1:00 PM", event: "Live Demonstration: Mystical Creatures" }
  ];

  const t = (key) => getTranslation(language, key);

  return (
    <div className="home">
      <header className="header">
        <h1>{t('welcome')}</h1>
        <Countdown targetDate={eventDate} />
        <LanguageToggle currentLanguage={language} changeLanguage={setLanguage} />
        <button onClick={() => setShowSections(!showSections)}>
          {showSections ? t('hideDetails') : t('showDetails')}
        </button>
      </header>
      <div className={`sections ${showSections ? 'show' : 'hide'}`}>
        <section id="agenda">
          <h2>{t('agenda')}</h2>
          <Agenda />
        </section>
        <section id="speakers">
          <h2>{t('speakers')}</h2>
          <Speakers />
        </section>
        <section id="register">
          <h2>{t('register')}</h2>
          <Form />
        </section>
        <section id="sponsors">
          <h2>{t('sponsors')}</h2>
          <Sponsors sponsors={sponsors} />
        </section>
        <section id="booking">
          <h2>{t('sessionBooking')}</h2>
          <SessionBooking sessions={sessions} />
        </section>
        <section id="livestream">
          <h2>{t('liveStream')}</h2>
          <LiveStream videoUrl={liveStreamUrl} description={liveStreamDescription} schedule={liveStreamSchedule} />
        </section>
        <section id="merchandise">
          <h2>{t('merchandise')}</h2>
          <Merchandise products={products} />
        </section>
      </div>
      <footer>
        <p>{t('contactUs')}</p>
        <p>{t('copyright')}</p>
      </footer>
    </div>
  );
}

export default Home;




