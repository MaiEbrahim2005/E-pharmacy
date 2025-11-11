// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // كود اللوجين البسيط من غير localStorage
    console.log('Login:', email, password);
    
    // بعد اللوجين الناجح
    if (onLogin) {
      onLogin(); // استدعي دالة اللوجين
    }
    navigate('/shop'); // اذهبي للشوب مباشرة
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Welcome Back!</h2>

        <input
          type="email"
          placeholder="Enter Your Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Your Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth-button">
          Login
        </button>

        <div className="auth-options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Lost Password?</a>
        </div>

        <div className="auth-link">
          <p>
            Don't have an account? 
            <span 
              style={{color: '#6C4ED9', cursor: 'pointer', fontWeight: '600'}} 
              onClick={() => navigate('/register')}
            >
              {' '}Register here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}