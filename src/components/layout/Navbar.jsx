// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiX } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // تحديد الـ active link بناءً على الـ URL الحالي
  useEffect(() => {
    const path = location.pathname;
    if (path === '/' || path === '/home') setActiveLink('home');
    else if (path === '/about') setActiveLink('about');
    else if (path === '/services') setActiveLink('services');
    else if (path === '/shop') setActiveLink('shop');
    else if (path === '/faq') setActiveLink('faq');
    else if (path === '/contact') setActiveLink('contact');
    else if (path === '/cart') setActiveLink('cart');
  }, [location.pathname]);

  const handleNavigation = (path, linkName) => {
    navigate(path);
    setActiveLink(linkName);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* اللوجو */}
        <div className="logo">
          <img src="src/assets/images/logo.png" alt="Pharmez Logo" />
        </div>
        
        {/* القائمة - معدلة */}
        <ul className="nav-menu">
          <li>
            <a 
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => handleNavigation('/', 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              className={activeLink === 'about' ? 'active' : ''}
              onClick={() => handleNavigation('/about', 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              className={activeLink === 'services' ? 'active' : ''}
              onClick={() => handleNavigation('/services', 'services')}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              className={activeLink === 'shop' ? 'active' : ''}
              onClick={() => handleNavigation('/shop', 'shop')}
            >
              Shop
            </a>
          </li>
          <li>
            <a 
              className={activeLink === 'faq' ? 'active' : ''}
              onClick={() => handleNavigation('/faq', 'faq')}
            >
              FAQ
            </a>
          </li>
          <li>
            <a 
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={() => handleNavigation('/contact', 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
        
        {/* الأيقونات */}
        <div className="nav-icons">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            {isSearchOpen ? <FiX /> : <FiSearch />}
          </button>
          
          {/* أيقونة العربة */}
          <button 
            className={`cart-icon ${activeLink === 'cart' ? 'active' : ''}`}
            onClick={() => handleNavigation('/cart', 'cart')}
          >
            <FiShoppingCart />
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </button>
          
          <button onClick={() => navigate('/login')}>
            <FiUser />
          </button>
        </div>
        
        <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>
      </div>
      
      {/* شريط البحث */}
      {isSearchOpen && (
        <div className="search-bar">
          <input 
            type="text"
            placeholder="Search for medicines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <button onClick={() => {
            console.log('Searching for:', searchQuery);
            setIsSearchOpen(false);
          }}>
            Search
          </button>
        </div>
      )}
      
      {/* القائمة للـ mobile - معدلة */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a 
            className={activeLink === 'home' ? 'active' : ''}
            onClick={() => handleNavigation('/', 'home')}
          >
            Home
          </a>
          <a 
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => handleNavigation('/about', 'about')}
          >
            About
          </a>
          <a 
            className={activeLink === 'services' ? 'active' : ''}
            onClick={() => handleNavigation('/services', 'services')}
          >
            Services
          </a>
          <a 
            className={activeLink === 'shop' ? 'active' : ''}
            onClick={() => handleNavigation('/shop', 'shop')}
          >
            Shop
          </a>
          <a 
            className={activeLink === 'faq' ? 'active' : ''}
            onClick={() => handleNavigation('/faq', 'faq')}
          >
            FAQ
          </a>
          <a 
            className={activeLink === 'contact' ? 'active' : ''}
            onClick={() => handleNavigation('/contact', 'contact')}
          >
            Contact
          </a>
          <a 
            className={activeLink === 'cart' ? 'active' : ''}
            onClick={() => handleNavigation('/cart', 'cart')}
          >
            Cart ({cartCount})
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;