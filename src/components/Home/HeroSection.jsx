import React from 'react';
import './HeroSection.css';
import { FiUpload } from "react-icons/fi";

const HeroSection = () => {
return (
<section className="hero-section" aria-label="Hero" >
        <div className="hero-container">
          <div className="right-content">
            <div className="health-list" aria-hidden="false">
              <div className="health-item" role="list">
                <span className="dot" aria-hidden="true"></span>
                <span>Health</span>
                <span className="dot" aria-hidden="true"></span>
                <span>Trust</span>
                <span className="dot" aria-hidden="true"></span>
                <span>Online</span>
              </div>
            </div>

            <h1 className="main-title">
              Instant Pharmacy Access For You
            </h1> 

            <div className="large-image-container">
              <img
                src="/src/assets/images/banner-img1.jpg"
                alt="Assorted medicines and wellness products"
                className="large-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const placeholder = e.target.parentNode.querySelector('.image-placeholder.large');
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div className="image-placeholder large" role="img" aria-label="Large Medicine Image">Large Medicine Image</div>
            </div>
          </div>


          <aside className="left-content" aria-label="Intro and actions">
            <div className="clients-section" role="region" aria-label="Happy clients">
              <div className="circles-container" aria-hidden="true">
                <img src="/src/assets/images/user1.png" className="circle-img" alt="Client avatar 1" />
                <img src="/src/assets/images/user2.png" className="circle-img" alt="Client avatar 2" />
                <img src="/src/assets/images/user3.png" className="circle-img" alt="Client avatar 3" />
                <img src="/src/assets/images/user4.png" className="circle-img" alt="Client avatar 4" />
              </div>
              <div className="clients-info">
                <span className="clients-number">4k+</span>
                <p className="clients-text">Happy Clients</p>
              </div> 
            </div>

            <p className="hero-description">
              Order prescription and over-the-counter medicines online with confidence.
            </p>

            <div className="hero-buttons">
              <button className="btn-shop" aria-label="Shop now">Shop Now</button>
              <button className="btn-upload" aria-label="Upload prescription">
                <FiUpload className="upload-icon" aria-hidden="true" />
                <span>Upload Prescription</span>
              </button>
            </div>

            <div className="small-image-container">
              <img
                src="/src/assets/images/banner-img2.jpg"
                alt="Assorted bottles on shelf"
                className="small-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const placeholder = e.target.parentNode.querySelector('.image-placeholder.small');
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div className="image-placeholder small" role="img" aria-label="Small Medicine Image">Small Medicine Image</div>
            </div>
          </aside>
        </div>
      </section>
);
};

export default HeroSection;
