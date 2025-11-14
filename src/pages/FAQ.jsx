import React from 'react';
const FAQ = () => {
  return (
    <div className="faq-page" style={{ 
      padding: '40px 20px', 
      maxWidth: '800px', 
      margin: '0 auto',
      minHeight: '60vh'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>
        Frequently Asked Questions
      </h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '8px', 
          padding: '20px',
          backgroundColor: 'white'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#007bff' }}>How can I place an order?</h3>
          <p style={{ margin: 0, color: '#666' }}>
            You can browse our products in the Shop section and add them to your cart. 
            Then proceed to checkout to complete your order.
          </p>
        </div>
        
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '8px', 
          padding: '20px',
          backgroundColor: 'white'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#007bff' }}>Do you deliver to my area?</h3>
          <p style={{ margin: 0, color: '#666' }}>
            We deliver to most areas. Please check your address during checkout 
            to see if delivery is available in your location.
          </p>
        </div>
        
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '8px', 
          padding: '20px',
          backgroundColor: 'white'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#007bff' }}>What are your delivery times?</h3>
          <p style={{ margin: 0, color: '#666' }}>
            Standard delivery takes 2-3 business days. Express delivery is available 
            for same-day or next-day delivery in selected areas.
          </p>
        </div>
        
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '8px', 
          padding: '20px',
          backgroundColor: 'white'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#007bff' }}>Can I return medications?</h3>
          <p style={{ margin: 0, color: '#666' }}>
            Due to health and safety regulations, we cannot accept returns on prescription 
            medications. Other products may be returned within 30 days with original packaging.
          </p>
        </div>
        
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '8px', 
          padding: '20px',
          backgroundColor: 'white'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#007bff' }}>Do I need a prescription?</h3>
          <p style={{ margin: 0, color: '#666' }}>
            Prescription medications require a valid prescription from a licensed healthcare 
            provider. Over-the-counter products can be purchased without a prescription.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;