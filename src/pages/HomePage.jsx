import React from "react";
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
    <>
      <HeroSection />
      <ServicesSection />
      <CategoriesSection />
      <FeaturedProducts />
      <OurProcess />
      <BestSelling />
      <Offers />
      <Testimonials />
    </>
  );
}; 

export default HomePage;    

