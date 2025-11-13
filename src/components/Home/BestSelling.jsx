import React from 'react';
import './BestSelling.css';
import { FiStar } from "react-icons/fi";


const BestSelling = () => {
const bestSellingItems = [
    {
      id: 1,
      name: "ImmunoBoost",
      type: 'Vitamin',
      price: 63.00,
      rating: 4.8,
      image: "/src/assets/images/ImmunoBoost.png"
    },
    {
      id: 2,
      name: "MetaboTrim",
      type: 'Herbal',
      price: 87.00,
      rating: 4.8,
      image: "/src/assets/images/MetaboTrim.png"
    },
    {
      id: 3,
      name: "DermaGlow",
      type: 'Cream',
      price: 87.00,
      rating: 4.8,
      image: "/src/assets/images/DermaGlow.png"
    },
    {
      id: 4,
      name: "CoughRelief Max",
      type: 'Syrup',
      price: 42.00,
      rating: 4.85,
      image: "/src/assets/images/CoughRelief Max.png"
    },
    {
      id: 5,
      name: "NutriCore Essentials",
      type: 'Vitamin',
      price: 12.00,
      rating: 4.8,
      image: "/src/assets/images/NutriCore Essentials.png"
    },
    {
      id: 6,
      name: "Slimvia Burn",
      type: 'Herbal',
      price: 26.00,
      rating: 4.8,
      image: "/src/assets/images/Slimvia Burn.png"
    },
    {
      id: 7,
      name: "Cream",
      type: 'AcneShield Gel',
      price: 82.00,
      rating: 4.8,
      image: "/src/assets/images/AcneShield Gel.png"
    },
    {
      id: 8,
      name: "FluAway Tabs",
      type: 'Tablet',
      price: 36.00,
      rating: 4.8,
      image: "/src/assets/images/FluAway Tabs.png"
    },
  ];

  return (
<section className="best-selling-section" aria-labelledby="best-selling-heading">
        <div className="best-selling-wrapper">
          <div className="best-selling-head">
            <p className="best-selling-small-title">MOST DEMANDING</p>
            <h2 id="best-selling-heading" className="best-selling-big-title">Best Selling Products</h2>
          </div>

          <div className="best-selling-content">
            <div className="best-selling-cards-row">
              {bestSellingItems.slice(0, 4).map((product) => (
                <article key={product.id} className="best-selling-item-card" aria-labelledby={`bs-${product.id}-name`}>
                  <div className="best-selling-img-container">
                    <div className="best-selling-img-box" role="img" aria-label={product.name}>
                      <img src={product.image} alt={product.name} />
                    </div>
                  </div>

                  <div className="best-selling-details">
                    <div className="best-selling-meta">
                      <span className="best-selling-category">{product.type}</span>
                      <div className="best-selling-rating-box">
                        <FiStar className="best-selling-star" aria-hidden="true" />
                        <span>{product.rating}/5</span>
                      </div>
                    </div>

                    <h3 id={`bs-${product.id}-name`} className="best-selling-item-name">{product.name}</h3>

                    <div className="best-selling-actions">
                      <button className="best-selling-cart-button" aria-label={`Add ${product.name} to cart`}>Add to cart</button>
                      <span className="best-selling-item-price">${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="best-selling-cards-row">
              {bestSellingItems.slice(4, 8).map((product) => (
                <article key={product.id} className="best-selling-item-card" aria-labelledby={`bs-${product.id}-name`}>
                  <div className="best-selling-img-container">
                    <div className="best-selling-img-box" role="img" aria-label={product.name}>
                      <img src={product.image} alt={product.name} />
                    </div>
                  </div>

                  <div className="best-selling-details">
                    <div className="best-selling-meta">
                      <span className="best-selling-category">{product.type}</span>
                      <div className="best-selling-rating-box">
                        <FiStar className="best-selling-star" aria-hidden="true" />
                        <span>{product.rating}/5</span>
                      </div>
                    </div>

                    <h3 id={`bs-${product.id}-name`} className="best-selling-item-name">{product.name}</h3>

                    <div className="best-selling-actions">
                      <button className="best-selling-cart-button" aria-label={`Add ${product.name} to cart`}>Add to cart</button>
                      <span className="best-selling-item-price">${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

  );
};

export default BestSelling;
