import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShopPage.css';

const ShopPage = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "ImmunoBoost",
      price: 63.00,
      rating: 4.8,
      image:"src/assets/images/products/product1.png",
      category: "Vitamins & Health Supplements",
      type: "Vitamin"
    },
    {
      id: 2,
      name: "MetaboTrim",
      price: 87.00,
      rating: 4.8,
      image: "src/assets/images/products/product2.png",
      category: "Vitamins & Health Supplements",
      type: "Herbal"
    },
    {
      id: 3,
      name: "DermaGlow",
      price: 55.00,
      rating: 4.8,
      image: "src/assets/images/products/product3.png",
      category: "Personal Wellness & Hygiene",
      type: "Cream"
    },
    {
      id: 4,
      name: "CoughRelief Max",
      price: 82.00,
      rating: 4.8,
      image: "src/assets/images/products/product4.png",
      category: "Personal Wellness & Hygiene",
      type: "Syrup"
    },
    {
      id: 5,
      name: "NutriCore Essentials",
      price: 36.00,
      rating: 4.8,
      image: "src/assets/images/products/product5.png",
      category: "Prescription Medicines",
      type: "Vitamin"
    },
    {
      id: 6,
      name: "Slimvia Burn",
      price: 63.00,
      rating: 4.8,
      image: "src/assets/images/products/product6.png",
      category: "Vitamins & Health Supplements",
      type: "Herbal"
    },
    {
      id: 7,
      name: "AcneShield Gel",
      price: 42.00,
      rating: 4.8,
      image: "src/assets/images/products/product7.png",
      category: "Prescription Medicines",
      type: "Cream"
    },
    {
      id: 8,
      name: "FluAway Tabs",
      price: 12.00,
      rating: 4.8,
      image: "src/assets/images/products/product8.png",
      category: "Vitamins & Health Supplements",
      type: "Tablets"
    },
    {
      id: 9,
      name: "VitalEase Multivitamins",
      price: 26.00,
      rating: 4.8,
      image: "src/assets/images/products/product9.png",
      category: "Vitamins & Health Supplements",
      type: "supplements"
    }
  ];

  const categories = [
    "Baby Care & Essentials",
    "Personal Wellness & Hygiene", 
    "Prescription Medicines",
    "Vitamins & Health Supplements",
    "Home Health Devices",
    "First Aid & Medical Supplies"
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = !selectedCategory || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  const clearFilters = () => {
    setSelectedCategory('');
    setPriceRange([0, 100]);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(selectedCategory === category ? '' : category);
  };

  const handleProductAddToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    const existingItem = currentCart.find(item => item.id === product.id);
    
    let updatedCart;
    if (existingItem) {
      updatedCart = currentCart.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
     
      updatedCart = [...currentCart, { ...product, quantity: 1 }];
    }
    
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    if (onAddToCart) {
      onAddToCart();
    }
    
    console.log('Added to cart:', product.name);
  };

  return (
    <div className="shop-page">
      <div className="shop-container">
        
        <div className="shop-sidebar">
         
          <div className="filter-section">
            <button className="clear-filters-btn" onClick={clearFilters}>
              Clear All Filters
            </button>
          </div>

          <div className="filter-section">
            <h3>Categories :</h3>
            <div className="categories-list">
              {categories.map(category => (
                <label key={category} className="category-item">
                  <input 
                    type="checkbox" 
                    checked={selectedCategory === category}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Filter By Price</h3>
            <div className="price-filter">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              />
              <div className="price-range">Range: ${priceRange[0]} - ${priceRange[1]}</div>
            </div>
          </div>
        </div>

        <div className="shop-main">
       
          <div className="shop-products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="shop-product-card">
                <div className="shop-product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="shop-product-type">{product.type}</div>
                </div>
                <div className="shop-product-rating">
                  ⭐ {product.rating}/5
                </div>
                <h3 className="shop-product-name">{product.name}</h3>
                <div className="shop-product-price">${product.price.toFixed(2)}</div>
                <button 
                  className="shop-add-to-cart-btn" 
                  onClick={() => handleProductAddToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>

          <div className="shop-products-count">
            Showing {filteredProducts.length} of {products.length} products
          </div>
          <div className="shop-pagination">
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;