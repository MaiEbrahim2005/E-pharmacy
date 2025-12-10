import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // تحقق تلقائي إذا كان المستخدم مسجل دخول
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn === "true") {
      navigate('/home');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const enteredEmail = email.trim().toLowerCase();
    const enteredPassword = password;
    
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
    
    // التحقق من وجود بيانات
    if (!storedEmail || !storedPassword) {
      setError("No account found. Please register first.");
      return;
    }
    
    // تحقق من المطابقة
    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
      localStorage.setItem("loggedIn", "true");
      
      if (onLogin) {
        onLogin();
      }
      
      navigate('/home');
    } else {
      setError("Email or password is incorrect. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Welcome</h2>

        {error && (
          <div style={{
            color: "red", 
            padding: "10px", 
            background: "#ffe6e6", 
            borderRadius: "5px",
            marginBottom: "15px"
          }}>
            {error}
          </div>
        )}

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
          <a href="#" onClick={(e) => {
            e.preventDefault();
            alert("Please contact support to reset your password.");
          }}>
            Lost Password?
          </a>
        </div>

        <div className="auth-link">
          <p>
            Don't have an account? 
            <span 
              style={{ color: '#6C4ED9', cursor: 'pointer', fontWeight: '600' }}
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