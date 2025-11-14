import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './ThankYouPage.css';

const ThankYouPage = () => { 
  const navigate = useNavigate(); 

  const handleBackToHome = () => {
    navigate('/home'); 
  };

  return (
    <div className="thank-you-page">
      <div className="thank-you-container">
        <h1 className="thank-you-title">Thank You!</h1>
        
        <p className="thank-you-message">
          Thank you for your order! We're committed to your health and well-being, and we can't wait for
          you to experience our trusted pharmacy care. Your satisfaction is our top priority.
        </p>

        <button 
          className="back-to-home-btn"
          onClick={handleBackToHome} 
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;