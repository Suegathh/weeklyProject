import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="fab fa-facebook-f">Facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="fab fa-twitter">Twitter</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="fab fa-instagram">Instagram</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="fab fa-linkedin-in">LinkedIn</a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="fab fa-github"></a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="fab fa-tiktok">Tiktok</a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="fab fa-youtube">Youtube</a>
      </div>
      <p className="footer-text">&copy; 2024 Your Company Name. All rights reserved.</p>
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a> | 
        <a href="/terms">Terms of Service</a> | 
        <a href="/contact">Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;
