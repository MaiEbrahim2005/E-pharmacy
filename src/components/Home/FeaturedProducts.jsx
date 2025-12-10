import React, { useState, useEffect } from 'react';
import './FeaturedProducts.css';
import { FiStar } from "react-icons/fi";

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const handleAddToCart = (product) => {
   
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex !== -1) {
     
      cart[existingProductIndex].quantity += 1;
    } else {
     
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        category: product.type
      });
    }
    
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    
    window.dispatchEvent(new Event('storage'));
  };

 const categoriesFilter = ['All', 'Supplement', 'Herbal', 'Flu Remedy'];

  const products = [
    {
      id: 1,
      name: 'Nutrition Capsules',
      type: 'Supplement',
      price: 63.00,
      rating: 4.85,
      image: '/public/assets/images/products/product6.png'
    },
    {
      id: 2,
      name: 'Healthy Skin',
      type: 'Herbal',
      price: 84.00,
      rating: 4.85,
      image: '/public/assets/images/skin-cream.jpg' 
    },
    {
      id: 3,
      name: 'Flu Remedy',
      type: 'Flu Remedy',
      price: 42.00,
      rating: 4.85,
      image: '/public/assets/images/flu-syrup.jpg'
    },
    {
      id: 4,
      name: 'Pain Relief',
      type: 'Herbal',
      price: 96.00,
      rating: 4.85,
      image: '/public/assets/images/products/product8.png'
    },
    {
      id: 5,
      name: 'Vitamin C',
      type: 'Supplement',
      price: 35.00,
      rating: 4.85,
      image: '/public/assets/images/vitamin-c.jpg'
    },
    {
      id: 6,
      name: 'Immune Boost',
      type: 'Herbal',
      price: 58.00,
      rating: 4.85,
      image: '/public/assets/images/nutrition-capsules.jpg'
    },
    {
      id: 7,
      name: 'Allergy Relief',
      type: 'Flu Remedy',
      price: 45.00,
      rating: 4.85,
      image: '/public/assets/images//products/product1.png'
    },
    {
      id: 8,
      name: 'Sleep Aid',
      type: 'Herbal',
      price: 72.00,
      rating: 4.85,
      image: '/public/assets/images/products/product4.png'
    }
  ];

  const filteredProducts =
  activeCategory === 'All'
    ? products
    : products.filter((p) => p.type === activeCategory);

const slides = [
  filteredProducts.slice(0, 4),
  filteredProducts.slice(4, 8)
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="featured-products" aria-labelledby="featured-heading">
      <div className="products-container">
        <div className="products-header">
          <p className="products-subtitle">best items</p>
          <h2 id="featured-heading" className="products-title">Our Featured Products</h2>
        </div>

        <nav className="categories-filter" role="tablist" aria-label="Product categories">
          {categoriesFilter.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => {
              setActiveCategory(category);
              setCurrentSlide(0); 
            }}

            >
              {category}
              {activeCategory === category && <div className="active-dot" aria-hidden="true"></div>}
            </button>
          ))}
        </nav>

        <div className="carousel-container" aria-roledescription="carousel" aria-label="Featured products carousel">
          <div className="carousel-wrapper">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="carousel-slide" role="group" aria-roledescription="slide" aria-label={`Slide ${slideIndex + 1}`}>
                  <div className="products-grid">
                    {slide.map((product) => (
                      <article key={product.id} className="product-card" aria-labelledby={`product-${product.id}-name`}>
                        <div className="product-image-section">
                          <div className="product-image" role="img" aria-label={product.name}>
                            <img src={product.image} alt={product.name} />
                          </div>
                        </div>

                        <div className="product-info-section">
                          <div className="product-rating">
                            <span className="product-type">{product.type}</span>
                            <div className="rating-right">
                              <FiStar className="star-icon" aria-hidden="true" />
                              <span>{product.rating}/5</span>
                            </div>
                          </div>

                          <h3 id={`product-${product.id}-name`} className="product-name">{product.name}</h3>

                          <div className="product-footer">
                            <button 
                              className="add-to-cart-btn" 
                              aria-label={`Add ${product.name} to cart`}
                              onClick={() => handleAddToCart(product)}
                            >
                              Add to cart
                            </button>
                            <span className="product-price">${product.price.toFixed(2)}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="carousel-dots" role="tablist" aria-label="Carousel navigation">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`feature-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={currentSlide === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;