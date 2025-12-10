import React from "react";
import "./Offers.css";

const Offers = () => {

  return (
<section className="offers-section" aria-labelledby="offers-heading" >
        <div className="offers-container">
          <div className="offers-grid">
            <article className="offer-card" aria-label="Vitamins & Supplements Offer">
              <div className="offer-image">
                <img src="/assets/images/promotion-banner1.jpg" alt="Vitamins and supplements" />
              </div>
              <div className="offer-content">
                <div className="offer-percentage">
                  <span className="percentage-big">5%</span>
                  <span className="percentage-text">Cashback</span>
                </div>
                <h3 className="offer-title">Vitamins &<br />Supplements</h3>
                <button className="Cashback-button offer-btn">Browse All</button>
              </div>
            </article>
            <article className="offer-card" aria-label="Baby & Childcare Offer">
              <div className="offer-image">
                <img src="/assets/images/promotion-banner2.jpg" alt="Baby and childcare" />
              </div>
              <div className="offer-content">
                <div className="offer-percentage">
                  <span className="flat-text">Flat</span>
                  <span className="percentage-big">10%</span>
                  <span className="off-text">OFF</span>
                </div>
                <h3 className="offer-title">Baby &<br />Childcare</h3>
                <button className="off-button offer-btn">Browse All</button>
              </div>
            </article>

            <article className="offer-card" aria-label="Personal care & Wellness Offer">
              <div className="offer-image">
                <img src="/assets/images/promotion-banner3.jpg" alt="Personal care and wellness" />
              </div>
              <div className="offer-content">
                <div className="offer-percentage">
                  <span className="percentage-big">12%</span>
                  <span className="percentage-text">Cashback</span>
                </div>
                <h3 className="offer-title">Personal care<br />& Wellness</h3>
                <button className="Personal-car-button offer-btn">Browse All</button>
              </div>
            </article>
          </div>
        </div>
      </section>
  );
};

export default Offers;
