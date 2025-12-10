import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function RegisterPage({ onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // ⚠️ إزالة هذا السطر: localStorage.clear();
    
    // حفظ البيانات بدون حذف localStorage
    localStorage.setItem("userName", name.trim());
    localStorage.setItem("userEmail", email.trim().toLowerCase());
    localStorage.setItem("userPassword", password);
    localStorage.setItem("loggedIn", "true");

    if (onLogin) {
      onLogin();
    }

    setToastMessage('Registration successful! 🎉');
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      navigate('/home'); 
    }, 2000);
  };

  return (
    <div className="auth-container">
      {showToast && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: '#6C4ED9',
          color: 'white',
          padding: '1rem 1.5rem',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
          zIndex: 1000,
          maxWidth: '300px',
          textAlign: 'center',
          fontWeight: '600',
        }}>
          {toastMessage}
        </div>
      )}

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