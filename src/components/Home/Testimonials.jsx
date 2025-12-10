import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
    const testimonials = [
      {
        id: 1,
        name: "Jennifer Troyer",
        role: "Administrator",
        avatar: "/public/assets/images/Jennifer-Troyer.jpg",
      },
      {
        id: 2,
        name: "Fergus Douchebag",
        role: "Happy Customer",
        avatar: "/public/assets/images/Fergu-Douchebag.jpg",
      },
      {
        id: 3,
        name: "lucy Smith",
        role: "Satisfied Customer",
        avatar: "/public/assets/images/lucy Smith.jpg",
      },
      {
        id: 4,
        name: "John Smith",
        role: "Satisfied Client",
        avatar: "/public/assets/images/John-Smith.jpg",
      }
    ];
  
    const nextTestimonial = () => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };
  
    const prevTestimonial = () => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }, [testimonials.length]);
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
            <div className="testimonials-container">
              <header className="testimonials-header">
                <p className="testimonials-subtitle">TESTIMONIALS</p>
                <h2 id="testimonials-heading" className="testimonials-title">Our Client Reviews</h2>
              </header>
    
              <div className="testimonial-content" role="region" aria-live="polite">
                <div className="stars-rating" aria-hidden="true">
                  <FiStar className="star" />
                  <FiStar className="star" />
                  <FiStar className="star" />
                  <FiStar className="star" />
                  <FiStar className="star" />
                </div>
    
                <blockquote className="testimonial-text">
                  Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aurodit aut fugit,
                  sed neatae vitae dicta ripiscing elit, sed do euismod tempor incidunt labore are dolore magna aliqua aut enim a minim
                  adipiscing elit, sed do euismod tempor incidunt labore minima veniam.
                </blockquote>
    
                <div className="client-info">
                  <h4 className="client-name">{testimonials[currentTestimonial].name}</h4>
                  <p className="client-role">{testimonials[currentTestimonial].role}</p>
                </div>
    
                <div className="testimonial-navigation">
                  <button className="nav-btn prev-btn" onClick={prevTestimonial} aria-label="Previous testimonial">
                    <FiChevronLeft />
                  </button>
    
                  <div className="clients-images" role="tablist" aria-label="Testimonials selector">
                    {testimonials.map((testimonial, index) => (
                      <button
                        key={testimonial.id}
                        className={`client-image ${currentTestimonial === index ? 'active' : ''}`}
                        onClick={() => setCurrentTestimonial(index)}
                        aria-label={`Show testimonial from ${testimonial.name}`}
                        aria-pressed={currentTestimonial === index}
                      >
                        <img src={testimonial.avatar} alt={testimonial.name} />
                        <div className="active-indicator" aria-hidden="true"></div>
                      </button>
                    ))}
                  </div>
    
                  <button className="nav-btn next-btn" onClick={nextTestimonial} aria-label="Next testimonial">
                    <FiChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </section>
  );
};

export default Testimonials;
