// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useState } from 'react'; 
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Services from './pages/Services';
import ShopPage from './pages/ShopPage';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import ThankYouPage from './pages/ThankYouPage';
import './App.css';

function App() {
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

  return (
    <Router>
      <MainApp 
        cartCount={cartCount}
        isLoggedIn={isLoggedIn}
        onAddToCart={handleAddToCart}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
    </Router>
  );
}

function MainApp({ cartCount, isLoggedIn, onAddToCart, onLogin, onLogout }) {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/thank-you';
  
  // إذا المستخدم مش مسجل دخول ويحاول يدخل على أي صفحة غير اللوجين والريجستر
  if (!isLoggedIn && location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !== '/thank-you') {
    return <Navigate to="/login" replace />;
  }

  // إذا المستخدم مسجل دخول وكان في صفحة اللوجين، اعدي توجيه للهوم
  if (isLoggedIn && location.pathname === '/login') {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="App">
      {!hideNavbar && <Navbar cartCount={cartCount} onLogout={onLogout} />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<ShopPage onAddToCart={onAddToCart} />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/register" element={<Register onLogin={onLogin} />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
      
      {!hideNavbar && <Footer />}
    </div>
  );
}

export default App;