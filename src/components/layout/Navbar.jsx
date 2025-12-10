import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartCount, isLoggedIn, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/' || path === '/home') setActiveLink('home');
    else if (path === '/about') setActiveLink('about');
    else if (path === '/shop') setActiveLink('shop');
    else if (path === '/faq') setActiveLink('faq');
    else if (path === '/contact') setActiveLink('contact');
    else if (path === '/health') setActiveLink('health');
    else if (path === '/cart') setActiveLink('cart');
    else if (path === '/checkout') setActiveLink('checkout');
  }, [location.pathname]);

  const handleNavigation = (path, linkName) => {
    navigate(path);
    setActiveLink(linkName);
    setIsMenuOpen(false);
  };

  const handleCartClick = () => {
    if (cartCount > 0) {
      handleNavigation('/checkout', 'checkout');
    } else {
      handleNavigation('/shop', 'shop');
    }
  };

  const handleLogoutClick = () => {
    // فقط استدعي دالة onLogout من App.js
    if (onLogout) {
      onLogout();
    }
    
    // إعادة التوجيه للرئيسية
    navigate('/home');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src="/assets/images/logo.png" alt="Pharmez Logo" />
        </div>

        <ul className="nav-menu">
          <li>
            <a className={activeLink === 'home' ? 'active' : ''} onClick={() => handleNavigation('/', 'home')}>Home</a>
          </li>
          <li>
            <a className={activeLink === 'about' ? 'active' : ''} onClick={() => handleNavigation('/about', 'about')}>About</a>
          </li>
          <li>
            <a className={activeLink === 'shop' ? 'active' : ''} onClick={() => handleNavigation('/shop', 'shop')}>Shop</a>
          </li>
          <li>
            <a className={activeLink === 'faq' ? 'active' : ''} onClick={() => handleNavigation('/faq', 'faq')}>FAQ</a>
          </li>
          <li>
            <a className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleNavigation('/contact', 'contact')}>Contact</a>
          </li>
          <li>
            <a className={activeLink === 'health' ? 'active' : ''} onClick={() => handleNavigation('/health', 'health')}>Health</a>
          </li>
        </ul>

        <div className="nav-icons">
          <button
            className={`cart-icon ${activeLink === 'cart' || activeLink === 'checkout' ? 'active' : ''}`}
            onClick={handleCartClick}
          >
            <FiShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          {isLoggedIn ? (
            <button 
              onClick={handleLogoutClick}
              className="logout-btn"
            >
              Logout
            </button>
          ) : (
            <button 
              onClick={() => navigate('/login')}
              className="login-btn"
            >
              <FiUser />
            </button>
          )}
        </div>

        <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <a className={activeLink === 'home' ? 'active' : ''} onClick={() => handleNavigation('/', 'home')}>Home</a>
          <a className={activeLink === 'about' ? 'active' : ''} onClick={() => handleNavigation('/about', 'about')}>About</a>
          <a className={activeLink === 'shop' ? 'active' : ''} onClick={() => handleNavigation('/shop', 'shop')}>Shop</a>
          <a className={activeLink === 'faq' ? 'active' : ''} onClick={() => handleNavigation('/faq', 'faq')}>FAQ</a>
          <a className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleNavigation('/contact', 'contact')}>Contact</a>
          <a className={activeLink === 'health' ? 'active' : ''} onClick={() => handleNavigation('/health', 'health')}>Health</a>
          <a
            className={activeLink === 'cart' || activeLink === 'checkout' ? 'active' : ''}
            onClick={handleCartClick}
          >
            {cartCount > 0 ? `Checkout (${cartCount})` : 'Cart (0)'}
          </a>
          
          {isLoggedIn ? (
            <a onClick={handleLogoutClick} className="logout-mobile">
              Logout
            </a>
          ) : (
            <a onClick={() => {
              navigate('/login');
              setIsMenuOpen(false);
            }}>
              Login
            </a>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;