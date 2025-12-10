import React from 'react';
import './CategoriesSection.css';
import { FiArrowRight } from "react-icons/fi";


const CategoriesSection = () => {
  const categories = [
    {
      name: "Nutrition & Weight",
      image: "/public/assets/images/nutrition-weight.jpg",
    },
    {
      name: "Skin Essentials",
      image: "/assets/images/skin-essentials.jpg",
    },
    {
      name: "Vitamins & Minerals",
      image: "/assets/images/vitamins-minerals.jpg",
    },
    {
      name: "Cold & Flu Care",
      image: "/assets/images/cold-flu-care.jpg",
    }
  ];

  return (
      <section className="categories-section" aria-labelledby="categories-heading">
        <div className="categories-container">
          <header className="categories-header">
            <h4 id="categories-subtitle" className="categories-subtitle">TOP CHOICES</h4>
            <p className="categories-title" id="categories-heading">Our Popular Categories</p>
          </header>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <article key={index} className="category-card" aria-label={category.name}>
                <div className="category-image" role="img" aria-label={category.name}>
                  <img src={category.image} alt={category.name} />
                </div>

                <FiArrowRight className="category-arrow-icon" aria-hidden="true" />

                <div className="category-name-container">
                  <h3 className="category-name">{category.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
};

export default CategoriesSection;
