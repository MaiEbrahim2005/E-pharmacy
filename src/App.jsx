
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import About from './pages/About';
import ShopPage from './pages/ShopPage';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import ThankYouPage from './pages/ThankYouPage';
import HealthInfo from "./HealthInfo";

import './App.css';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartCount, setCartCount] = useState(
    JSON.parse(localStorage.getItem('cart') || '[]').length
  );

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
      setCartCount(JSON.parse(localStorage.getItem('cart') || '[]').length);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  
  useEffect(() => {
    const isChronic = localStorage.getItem("chronicPatient") === "true";
    const lastReminder = localStorage.getItem("lastReminderDate");

    if (isChronic) {
      const now = new Date();

      if (!lastReminder) {
        localStorage.setItem("lastReminderDate", now.toDateString());
      } else {
        const last = new Date(lastReminder);
        const diffTime = now - last;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);

        if (diffDays >= 30) {
          
          toast.info(
            "💊 Friendly Reminder: It's time to take your monthly treatment. Stay healthy!",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );

          localStorage.setItem("lastReminderDate", now.toDateString());
        }
      }
    }
  }, []);

  
  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  
  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    setIsLoggedIn(true);
  };

  
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setCartCount(0);
  };

  const handleClearCart = () => {
    localStorage.removeItem('cart');    
    setCartCount(0);                    
  };

  return (
    <Router>
      <MainApp
        cartCount={cartCount}
        isLoggedIn={isLoggedIn}
        onAddToCart={handleAddToCart}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onClearCart={handleClearCart}      
      />
    </Router>
  );
}

function MainApp({ cartCount, isLoggedIn, onAddToCart, onLogin, onLogout, onClearCart }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const hideNavbar = ['/login', '/register', '/thank-you'].includes(location.pathname);

  
  const protectedRoutes = ['/shop', '/checkout'];
  if (!isLoggedIn && protectedRoutes.includes(location.pathname)) {
    return <Navigate to="/login" replace />;
  }

  
  if (isLoggedIn && location.pathname === '/login') {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="App">
      {!hideNavbar && (
        <Navbar
          cartCount={cartCount}
          onLogout={onLogout}
          isLoggedIn={isLoggedIn}
        />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<ShopPage onAddToCart={onAddToCart} />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout onClearCart={onClearCart} />} />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/register" element={<Register onLogin={onLogin} />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/health" element={<HealthInfo />} />
      </Routes>

      {!hideNavbar && <Footer />}
      <ToastContainer />
    </div>
  );
}

export default App;