import React from 'react';

const About = () => {
  return (
    <div className="about-page" style={{ padding: '20px' }}>
      <h1>About Pharmez</h1>
      <p>Your trusted partner in healthcare since 2024</p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Our Mission</h2>
        <p>To provide high-quality healthcare products and services to our community.</p>
        
        <h2>Our Vision</h2>
        <p>To be the leading pharmacy in delivering exceptional healthcare solutions.</p>
        
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide range of products</li>
          <li>Expert healthcare advice</li>
          <li>Fast and reliable delivery</li>
          <li>Competitive prices</li>
        </ul>
      </div>
    </div>
  );
};

export default About;