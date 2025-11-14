import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page" style={{ padding: '20px' }}>
      <h1>Contact Us</h1>
      <p>We're here to help with all your healthcare needs</p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Get in Touch</h2>
        <div style={{ display: 'grid', gap: '20px', maxWidth: '500px' }}>
          <div>
            <strong>📍 Address:</strong>
            <p>123 Healthcare Street, Medical City, MC 12345</p>
          </div>
          
          <div>
            <strong>📞 Phone:</strong>
            <p>+1 (555) 123-4567</p>
          </div>
          
          <div>
            <strong>📧 Email:</strong>
            <p>info@pharmez.com</p>
          </div>
          
          <div>
            <strong>🕒 Working Hours:</strong>
            <p>Monday - Friday: 8:00 AM - 10:00 PM</p>
            <p>Weekends: 9:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;