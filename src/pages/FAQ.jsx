import React from "react";
import "./faq.css";

// FAQ Page Component
export default function FAQ() {
  const faqs = [
    { q: "How can I order medicine from the website?", a: "Create an account, search for the medicine, add to cart, and complete payment." },
    { q: "Do I need an account to order?", a: "You can browse without an account, but ordering requires signing in." },
    { q: "How long does delivery take?", a: "Delivery time depends on your location, usually 1–3 business days." },
    { q: "Is there a return policy?", a: "It depends on the product condition — please contact support." },
    { q: "How can I contact support?", a: "Use the contact page or send us an email." },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions (FAQ)</h1>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <details key={i} className="faq-item">
            <summary className="faq-question">{f.q}</summary>
            <p className="faq-answer">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}