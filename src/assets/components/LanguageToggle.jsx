import React from 'react';

const LanguageToggle = ({ currentLanguage, changeLanguage }) => {
  return (
    <div className="language-toggle">
      <button onClick={() => changeLanguage('en')} disabled={currentLanguage === 'en'}>English</button>
      <button onClick={() => changeLanguage('fr')} disabled={currentLanguage === 'fr'}>French</button>
    </div>
  );
};

export default LanguageToggle;
