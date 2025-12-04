import React from 'react';
import './AboutStats.css';

const AboutStats = () => {
  const stats = [
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '10M+', label: 'Orders Delivered' },
    { number: '500+', label: 'Pharmacy Partners' }
  ];

  return (
    <section className="about-stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;