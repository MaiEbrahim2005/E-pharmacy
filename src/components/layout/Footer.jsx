import React from 'react';
import './Footer.css';
import { FiSend, FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* القسم الأول: الشعار والنشر */}
        <div className="footer-section">
          <div className="logo-section">
            <img src="/src/assets/images/footer-icon.png" alt="Pharmez" className="footer-logo-img" />
            <h2 className="footer-logo-text">Pharmez</h2>
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

        {/* القسم الثاني: التنقل */}
        <div className="footer-section navigation-section">
          <h3 className="section-title">Navigation</h3>
          <ul className="nav-links">
            <li>
              <FiArrowRight className="nav-arrow" />
              <a href="#home">Home</a>
            </li>
            <li>
              <FiArrowRight className="nav-arrow" />
              <a href="#about">About</a>
            </li>
            <li>
              <FiArrowRight className="nav-arrow" />
              <a href="#ShopPage">Shop</a>
            </li>
            <li>
              <FiArrowRight className="nav-arrow" />
              <a href="#team">Team</a>
            </li>
            
          </ul>
        </div>

        {/* القسم الثالث: معلومات الاتصال + السوشيال ميديا */}
        <div className="footer-section">
          <h3 className="section-title">Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <a href="tel:+61383766284">+61.3 8376 6284</a>
            </div>
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <a href="mailto:info@pharmez.com">info@pharmez.com</a>
            </div>
            <div className="contact-item">
              <FiMapPin className="contact-icon" />
              <a href="#" className="address-link">21 King Street Melbourne, 3000, Australia</a>
            </div>
            <div className="contact-item">
              <FiClock className="contact-icon" />
              <span>Mon - Sat: 9:00 am to 8:00 pm</span>
            </div>
          </div>

          {/* أيقونات السوشيال ميديا جمب الكونتاكت */}
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FiFacebook />
            </a>
            <a href="#" className="social-icon">
              <FiLinkedin />
            </a>
            <a href="#" className="social-icon">
              <FiInstagram />
            </a>
            <a href="#" className="social-icon">
              <FiTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* الكوبي رايت في سطر منفصل */}
      <div className="copyright-section">
        <p className="copyright">
          Copyright © 2025 Pharmez. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;