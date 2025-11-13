import React, { useState } from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiX, FiGlobe, FiChevronDown } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [searchQuery, setSearchQuery] = useState('');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          <img src="/src/assets/images/logo.jpeg" alt="Pharmez Logo" />
        </a>

        <ul className="nav-menu">
          {['home', 'about', 'services', 'shop', 'faq'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item}`}
                className={activeLink === item ? 'active' : ''}
                onClick={() => setActiveLink(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            {isSearchOpen ? <FiX size={18} /> : <FiSearch size={18} />}
          </button>
          
          <button className="cart-icon">
            <FiShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </button>
          
          <button><FiUser size={18} /></button>

          <div className="language-dropdown">
            <button 
              className="language-btn"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              onBlur={() => setTimeout(() => setIsLanguageOpen(false), 200)}
            >
              <FiGlobe size={16} />
              <span>{currentLanguage}</span>
              <FiChevronDown size={14} className={`arrow ${isLanguageOpen ? 'open' : ''}`} />
            </button>
            
            <div className={`language-menu ${isLanguageOpen ? 'open' : ''}`}>
              {languages.map((language) => (
                <button
                  key={language.code}
                  className="language-option"
                  onClick={() => {
                    setCurrentLanguage(language.name);
                    setIsLanguageOpen(false);
                  }}
                >
                  {language.name}
                </button>
              ))}
            </div>
          </div>

          <a href="#" className="contact-btn">
            Contact Us
          </a>

        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isSearchOpen && (
        <div className="search-bar">
          <input 
            type="text"
            placeholder="Search for medicines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <button onClick={() => setIsSearchOpen(false)}>
            Search
          </button>
        </div>
      )}

      {isMenuOpen && (
        <div className="mobile-menu">
          {['home', 'about', 'services', 'shop', 'faq', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`}
              className={activeLink === item ? 'active' : ''}
              onClick={() => {
                setActiveLink(item);
                setIsMenuOpen(false);
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div> 
      )}
    </nav>
  );
};

export default Navbar;