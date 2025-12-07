// src/components/about/AboutServices.jsx
import React from 'react';
import './AboutServices.css';
import { 
  FiUpload, 
  FiBell, 
  FiShoppingCart, 
  FiCheckCircle 
} from "react-icons/fi";

const AboutServices = () => {
  const services = [
    {
      icon: <FiUpload style={{ fontSize: '24px' }} />,
      title: "Prescription Upload",
      description: "Users can upload prescriptions (image/PDF) quickly for pharmacy review."
    },
    {
      icon: <FiBell style={{ fontSize: '24px' }} />, 
      title: "Monthly Reminders",
      description: "Chronic patients receive automatic reminders to renew their monthly medicines."
    },
    {
      icon: <FiShoppingCart style={{ fontSize: '24px' }} />,
      title: "Easy Medicine Ordering",
      description: "Users can browse medicines and place orders smoothly through the system."
    },
    {
      icon: <FiCheckCircle style={{ fontSize: '24px' }} />,
      title: "Smart Medicine Suggestions",
      description: "The system suggests suitable medicines based on the uploaded prescription to help users order faster."
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
