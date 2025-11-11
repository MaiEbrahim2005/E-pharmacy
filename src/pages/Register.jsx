// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function RegisterPage({ onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // التحقق من تطابق كلمات المرور
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // كود الريجستر البسيط من غير localStorage
    console.log('Registration successful:', { name, email, password });
    
    // تسجيل الدخول تلقائياً بعد التسجيل
    if (onLogin) {
      onLogin(); // استدعي دالة اللوجين من غير بيانات المستخدم
    }
    navigate('/shop'); // اذهبي للشوب مباشرة
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Create Account!</h2>

        {error && <div className="error-message">{error}</div>}

        <input
          type="text"
          placeholder="Enter Your Name"
          className="auth-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <input
          type="password"
          placeholder="Confirm Your Password"
          className="auth-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth-button">
          Register
        </button>

        <div className="auth-link">
          <p>
            Already have an account? 
            <span 
              style={{color: '#6C4ED9', cursor: 'pointer', fontWeight: '600'}} 
              onClick={() => navigate('/login')}
            >
              {' '}Login here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}