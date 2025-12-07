// src/App.jsx
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
// ⛔ امسحتي السطر: import Services from './pages/Services';
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

  // Listen to localStorage changes (login/cart) — keep it for multi-tab sync
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
      setCartCount(JSON.parse(localStorage.getItem('cart') || '[]').length);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Monthly reminder for chronic patients (Local Storage based)
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
          // Toast Notification instead of alert
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

  // Called by ShopPage when adding an item
  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  // Called on login
  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    setIsLoggedIn(true);
  };

  // Logout clears everything (you already had this)
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setCartCount(0);
  };

  // NEW: Clear cart (to be called after successful payment)
  const handleClearCart = () => {
    localStorage.removeItem('cart');    // clear persisted cart
    setCartCount(0);                    // update UI-counter in App
  };

  return (
    <Router>
      <MainApp
        cartCount={cartCount}
        isLoggedIn={isLoggedIn}
        onAddToCart={handleAddToCart}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onClearCart={handleClearCart}      // pass the new handler down
      />
    </Router>
  );
}

function MainApp({ cartCount, isLoggedIn, onAddToCart, onLogin, onLogout, onClearCart }) {
  const location = useLocation();

  const hideNavbar = ['/login', '/register', '/thank-you'].includes(location.pathname);

  // Protected routes
  const protectedRoutes = ['/shop', '/checkout'];
  if (!isLoggedIn && protectedRoutes.includes(location.pathname)) {
    return <Navigate to="/login" replace />;
  }

  // Prevent logged-in user from accessing Login page
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
        {/* ⛔ امسحتي السطر: <Route path="/services" element={<Services />} /> */}
        <Route path="/shop" element={<ShopPage onAddToCart={onAddToCart} />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        {/* Pass onClearCart to Checkout so it can notify App after successful payment */}
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