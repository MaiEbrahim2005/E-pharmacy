import React from 'react';
import './Footer.css';
import { FiSend, FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <div className="logo-section">
            <img src="/public/assets/images/footer-icon.png" alt="Pharmez" className="footer-logo-img" />
            <a href='#home' className="footer-logo-text">Pharmez</a>
          </div>
          
          <div className="newsletter">
            <h3 className="newsletter-title">Subscribe to Our Newsletter:</h3>
            <div className="email-input">
              <input 
                type="email" 
                placeholder="Enter Email Address" 
                className="email-field"
              />
              <button className="subscribe-btn">
                <FiSend className="send-icon" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="footer-section navigation-section">
          <h3 className="section-title">Navigation</h3>
          <ul className="nav-links">
            <li>
              <FiArrowRight className="nav-arrow" />
              <a href="#e">Home</a>
            </li>
            <li>
              <FiArrowRight className="nav-arrow" />
              <a href="#t">About</a>
            </li>
            <li>
              <FiArrowRight className="nav-arrow" />
              <a href="#">Shop</a>
            </li>
            <li>
              <FiArrowRight className="nav-arrow" />
              <a href="#">Services</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="section-title">Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <a href="tel:+61383766284">+20 100 456 7890</a>
            </div> 
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <a href="mailto:info@pharmez.com">info@pharmez.com</a>
            </div>
            <div className="contact-item">
              <FiMapPin className="contact-icon" />
              <a href="#" className="address-link">21 El Tahrir Street, Cairo, Egypt</a>
            </div>
            <div className="contact-item">
              <FiClock className="contact-icon" />
              <span>Mon - Sat: 9:00 am to 8:00 pm</span>
            </div>
          </div>

          <div className="social-icons">
            <a href="https://www.facebook.com/Pharmez" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FiFacebook />
            </a>
            <a href="https://www.linkedin.com/in/Pharmez" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
            <a href="https://www.instagram.com/Pharmez" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FiInstagram />
            </a>
            <a href="https://twitter.com/Pharmez" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FiTwitter />
            </a>
          </div>
        </div> 

      </div>

      <div className="copyright-section">
        <p className="copyright">
          Copyright © 2025 Pharmez. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;