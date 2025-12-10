import React from "react";
import { useNavigate } from "react-router-dom"; // إضافة هذا السطر
import "./OurProcess.css";
import { FiUpload, FiShoppingCart, FiTruck } from "react-icons/fi";

const OurProcess = () => {
  const navigate = useNavigate(); // إنشاء navigate function

  // دالة لـ Shop Now
  const handleShopNow = () => {
    navigate('/shop'); // التوجيه لصفحة Shop
  };

  return (
    <section className="our-process" aria-labelledby="process-heading">
      <div className="process-container">
        <div className="process-content">
          <div className="process-left">
            <img 
              src="/public/assets/images/dlivery-img.jpg" 
              alt="Delivery Process" 
              className="process-image" 
            />
          </div>

          <div className="process-right">
            <header className="process-header">
              <p className="process-subtitle">OUR PROCESS</p>
              <h2 id="process-heading" className="process-title">How it Works</h2>
            </header>

            <div className="process-steps">
              <div className="process-step">
                <div className="step-icon-container">
                  <div className="step-icon">
                    <FiUpload className="process-icon" aria-hidden="true" />
                  </div>
                  <div className="step-line" />
                </div>
                <div className="step-content">
                  <h3 className="step-title">Upload Your Prescription</h3>
                  <p className="step-description">Snap a photo or upload your doctor's prescription securely.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-icon-container">
                  <div className="step-icon">
                    <FiShoppingCart className="process-icon" aria-hidden="true" />
                  </div>
                  <div className="step-line" />
                </div>
                <div className="step-content">
                  <h3 className="step-title">Choose Your Products</h3>
                  <p className="step-description">Browse and select the medicines or health products you need.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-icon-container">
                  <div className="step-icon">
                    <FiTruck className="process-icon" aria-hidden="true" />
                  </div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">Get It Delivered</h3>
                  <p className="step-description">Receive your order at your doorstep — fast, safe, and hassle-free.</p>
                </div>
              </div>
            </div>

            <div className="process-cta">
              <button 
                className="shop-now-btn" 
                aria-label="Shop now"
                onClick={handleShopNow} // إضافة onClick هنا
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
