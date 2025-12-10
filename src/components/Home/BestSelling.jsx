import React from 'react';
import './BestSelling.css';
import { FiStar } from "react-icons/fi";

const BestSelling = () => {
  // دالة إضافة منتج للعربية
  const handleAddToCart = (product) => {
    // قراءة العربة الحالية من localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // التحقق إذا المنتج موجود في العربة
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex !== -1) {
      // إذا المنتج موجود، نزيد الكمية
      cart[existingProductIndex].quantity += 1;
    } else {
      // إذا المنتج مش موجود، نضيفه
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        category: product.type
      });
    }
    
    // حفظ العربة المحدثة في localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // إرسال حدث لتحديث العداد في الـ Navbar
    window.dispatchEvent(new Event('storage'));
  };

  const bestSellingItems = [
    {
      id: 11, // غيرنا لـ 11 بدل 1
      name: "ImmunoBoost",
      type: 'Vitamin',
      price: 63.00,
      rating: 4.8,
      image: "/assets/images/ImmunoBoost.png"
    },
    {
      id: 12, // غيرنا لـ 12 بدل 2
      name: "MetaboTrim",
      type: 'Herbal',
      price: 87.00,
      rating: 4.8,
      image: "/assets/images/MetaboTrim.png"
    },
    {
      id: 13, // غيرنا لـ 13 بدل 3
      name: "DermaGlow",
      type: 'Cream',
      price: 87.00,
      rating: 4.8,
      image: "/assets/images/DermaGlow.png"
    },
    {
      id: 14, // غيرنا لـ 14 بدل 4
      name: "CoughRelief Max",
      type: 'Syrup',
      price: 42.00,
      rating: 4.85,
      image: "/assets/images/CoughRelief Max.png"
    },
    {
      id: 15, // غيرنا لـ 15 بدل 5
      name: "NutriCore Essentials",
      type: 'Vitamin',
      price: 12.00,
      rating: 4.8,
      image: "/assets/images/NutriCore Essentials.png"
    },
    {
      id: 16, // غيرنا لـ 16 بدل 6
      name: "Slimvia Burn",
      type: 'Herbal',
      price: 26.00,
      rating: 4.8,
      image: "/assets/images/Slimvia Burn.png"
    },
    {
      id: 17, // غيرنا لـ 17 بدل 7
      name: "AcneShield Gel",
      type: 'Cream',
      price: 82.00,
      rating: 4.8,
      image: "/assets/images/AcneShield Gel.png"
    },
    {
      id: 18, // غيرنا لـ 18 بدل 8
      name: "FluAway Tabs",
      type: 'Tablet',
      price: 36.00,
      rating: 4.8,
      image: "/assets/images/FluAway Tabs.png"
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
                    <button 
                      className="best-selling-cart-button" 
                      aria-label={`Add ${product.name} to cart`}
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to cart
                    </button>
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
                    <button 
                      className="best-selling-cart-button" 
                      aria-label={`Add ${product.name} to cart`}
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to cart
                    </button>
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