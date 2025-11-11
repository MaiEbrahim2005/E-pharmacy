// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react'; 
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ShopPage from './pages/ShopPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Services from './pages/Services';
import ThankYouPage from './pages/ThankYouPage';
import './App.css';

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/thank-you';
  
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
   
  };

  // إذا المستخدم مش مسجل دخول، يظهر اللوجين
  if (!isLoggedIn && location.pathname !== '/register' && location.pathname !== '/thank-you') {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      {!hideNavbar && <Navbar cartCount={cartCount} onLogout={handleLogout} />}
      
      <Routes>
        <Route path="/" element={<ShopPage onAddToCart={handleAddToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={handleAddToCart} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onLogin={handleLogin} />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
      
      {!hideNavbar && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;