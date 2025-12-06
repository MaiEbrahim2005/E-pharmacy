import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // البيانات المسجلة في Local Storage
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (!storedEmail || !storedPassword) {
      setError("No account found. Please register first.");
      return;
    }

    // مقارنة البيانات
    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("loggedIn", "true");

      if (onLogin) {
        onLogin();
      }

      navigate('/home');
    } else {
      setError("Email or password is incorrect.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Welcome </h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

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
