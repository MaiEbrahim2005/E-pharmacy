// src/components/about/AboutServices.jsx
import React from 'react';
import './AboutServices.css';
import { FiTruck, FiCreditCard, FiDollarSign, FiHeadphones } from "react-icons/fi";

const AboutServices = () => {
  const services = [
    {
      icon: <FiTruck style={{ fontSize: '24px' }} />,
      title: "Free Shipping & Returns",
      description: "For all orders over $200"
    },
    {
      icon: <FiCreditCard style={{ fontSize: '24px' }} />,
      title: "Secure Payment",
      description: "Ensure Secure Payment"
    },
    {
      icon: <FiDollarSign style={{ fontSize: '24px' }} />,
      title: "Money Back Guarantee",
      description: "Returning Money in 30 days"
    },
    {
      icon: <FiHeadphones style={{ fontSize: '24px' }} />,
      title: "24/7 Customer Support",
      description: "Friendly Customer Support"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <div className="service-text">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutServices;