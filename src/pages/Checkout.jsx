import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      const updatedCart = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const updatedCart = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    window.dispatchEvent(new Event('storage')); 
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('storage'));
    showToastNotification("Item removed from cart");
  };

  const showToastNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('storage'));
    showToastNotification("Order placed successfully! You will receive a confirmation email shortly.");
    
    
    setTimeout(() => {
      window.location.href = '/thank-you';
    }, 2000);
  };

  return (
    <div className="checkout-container">
     
      {showToast && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: 'hsl(var(--primary))',
          color: 'hsl(var(--primary-foreground))',
          padding: '1rem 1.5rem',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          zIndex: 100,
          maxWidth: '400px',
        }}>
          {toastMessage}
        </div>
      )}

  
      <header className="checkout-header">
        <div className="header-container">
          <Link to="/" className="logo">
            Pharmez
          </Link>
          <Link to="/shop" className="continue-shopping-button">
            ← Continue Shopping
          </Link>
        </div>
      </header>

      <div className="checkout-content">
        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-grid">
          
          <div>
           
            <div className="checkout-card" style={{ marginBottom: '1.5rem' }}>
              <div className="card-header">
                <h2 className="card-title">Billing Information</h2>
              </div>
              <div className="card-content">
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-grid-2">
                      <div className="form-group">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          className="form-input"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          className="form-input"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="form-input"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          className="form-input"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="address" className="form-label">Address</label>
                      <input
                        type="text"
                        id="address"
                        className="form-input"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label htmlFor="city" className="form-label">City</label>
                        <input
                          type="text"
                          id="city"
                          className="form-input"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="zipCode" className="form-label">ZIP Code</label>
                        <input
                          type="text"
                          id="zipCode"
                          className="form-input"
                          value={formData.zipCode}
                          onChange={(e) =>
                            setFormData({ ...formData, zipCode: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="checkout-card">
              <div className="card-header">
                <h2 className="card-title">Payment Information</h2>
              </div>
              <div className="card-content">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="cardNumber" className="form-label">Card Number</label>
                    <input
                      type="text"
                      id="cardNumber"
                      className="form-input"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, cardNumber: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                      <input
                        type="text"
                        id="expiryDate"
                        className="form-input"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={(e) =>
                          setFormData({ ...formData, expiryDate: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cvv" className="form-label">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        className="form-input"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={(e) =>
                          setFormData({ ...formData, cvv: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="checkout-card">
              <div className="card-header">
                <h2 className="card-title">Order Summary</h2>
              </div>
              <div className="card-content">
                <div className="cart-items">
                  {cartItems.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                      <p>Your cart is empty</p>
                      <Link 
                        to="/shop" 
                        style={{
                          display: 'inline-block',
                          marginTop: '1rem',
                          padding: '0.5rem 1rem',
                          backgroundColor: '#007bff',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '0.375rem'
                        }}
                      >
                        Continue Shopping
                      </Link>
                    </div>
                  ) : (
                    cartItems.map((item) => (
                      <div key={item.id} className="cart-item">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="cart-item-image"
                        />
                        <div className="cart-item-details">
                          <h3 className="cart-item-name">{item.name}</h3>
                          <p className="cart-item-price">${item.price.toFixed(2)}</p>
                          <div className="cart-item-controls">
                            <button
                              className="quantity-button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              −
                            </button>
                            <span className="quantity-display">{item.quantity}</span>
                            <button
                              className="quantity-button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                            <button
                              className="remove-button"
                              onClick={() => removeItem(item.id)}
                              title="Remove item"
                            >
                              🗑
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {cartItems.length > 0 && (
                  <>
                    <div className="separator"></div>

                    <div className="order-summary">
                      <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="summary-row">
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                      </div>
                      <div className="summary-row">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="summary-row total">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="place-order-button"
                      onClick={handleSubmit}
                    >
                      Place Order
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;