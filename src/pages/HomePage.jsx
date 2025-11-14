import React from "react";
import "../styles/HomeVariables.css";
import HeroSection from "../components/Home/HeroSection";
import ServicesSection from "../components/Home/ServicesSection";
import CategoriesSection from "../components/Home/CategoriesSection";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import OurProcess from "../components/Home/OurProcess";
import BestSelling from "../components/Home/BestSelling";
import Offers from "../components/Home/Offers";
import Testimonials from "../components/Home/Testimonials"; 

const HomePage = () => {
  return (
    <div className="home-root">
      <HeroSection />
      <ServicesSection />
      <CategoriesSection />
      <FeaturedProducts />
      <OurProcess />
      <BestSelling />
      <Offers />
      <Testimonials />
    </div>
  );
}; 

export default HomePage;