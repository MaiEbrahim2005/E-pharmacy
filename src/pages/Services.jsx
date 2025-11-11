import { Link } from 'react-router-dom';
import './services.css';

export default function Services() {
  return (
    <div className="services-page">
      {/* ===== Section Header ===== */}
      <section className="services-header">
        <h1>Services</h1>
        <p>
          Trusted source for prescription and over-the-counter medicines — 
          delivered with care and confidence.
        </p>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>•</span>
          <span>Services</span>
        </div>
      </section>

      {/* ===== Extra Service Features ===== */}
      <section className="extra-services">
        <div className="extra-card">
          <div className="icon">📦</div>
          <h4>Free Shipping & Returns</h4>
          <p>For all orders over $200</p>
        </div>

        <div className="extra-card">
          <div className="icon">💳</div>
          <h4>Secure Payment</h4>
          <p>Ensure Secure Payment</p>
        </div>

        <div className="extra-card">
          <div className="icon">💰</div>
          <h4>Money Back Guarantee</h4>
          <p>Returning Money in 30 days</p>
        </div>

        <div className="extra-card">
          <div className="icon">📞</div>
          <h4>24/7 Customer Support</h4>
          <p>Friendly Customer Support</p>
        </div>
      </section>
    </div>
  );
}
