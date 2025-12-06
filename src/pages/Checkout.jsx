import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
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
    const updatedCart = newQuantity <= 0 
      ? cartItems.filter(item => item.id !== id)
      : cartItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
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
    setCartItems([]);
    showToastNotification("Order placed successfully! You will receive a confirmation email shortly.");

    setTimeout(() => {
      navigate('/thank-you');
    }, 2000);
  };

  return (
    <div className="checkout-container">
      {showToast && (
        <div className="toast-notification">{toastMessage}</div>
      )}

      <header className="checkout-header">
        <div className="header-container">
          <Link to="/" className="logo">Pharmez</Link>
          <Link to="/shop" className="continue-shopping-button">← Continue Shopping</Link>
        </div>
      </header>

      <div className="checkout-content">
        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-grid">
          {/* Billing & Payment Forms */}
          <div>
            <div className="checkout-card">
              <div className="card-header"><h2>Billing Information</h2></div>
              <div className="card-content">
                <form>
                  <div className="form-grid">
                    <div className="form-grid-2">
                      <div className="form-group">
                        <label>First Name</label>
                        <input type="text" value={formData.firstName} onChange={(e)=>setFormData({...formData, firstName:e.target.value})} required />
                      </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" value={formData.lastName} onChange={(e)=>setFormData({...formData, lastName:e.target.value})} required />
                      </div>
                    </div>
                    <div className="form-grid-2">
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})} required />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" value={formData.phone} onChange={(e)=>setFormData({...formData, phone:e.target.value})} required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <input type="text" value={formData.address} onChange={(e)=>setFormData({...formData, address:e.target.value})} required />
                    </div>
                    <div className="form-grid-2">
                      <div className="form-group">
                        <label>City</label>
                        <input type="text" value={formData.city} onChange={(e)=>setFormData({...formData, city:e.target.value})} required />
                      </div>
                      <div className="form-group">
                        <label>ZIP Code</label>
                        <input type="text" value={formData.zipCode} onChange={(e)=>setFormData({...formData, zipCode:e.target.value})} required />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="checkout-card">
              <div className="card-header"><h2>Payment Information</h2></div>
              <div className="card-content">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" placeholder="1234 5678 9012 3456" value={formData.cardNumber} onChange={(e)=>setFormData({...formData, cardNumber:e.target.value})} required />
                  </div>
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input type="text" placeholder="MM/YY" value={formData.expiryDate} onChange={(e)=>setFormData({...formData, expiryDate:e.target.value})} required />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input type="text" placeholder="123" value={formData.cvv} onChange={(e)=>setFormData({...formData, cvv:e.target.value})} required />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="checkout-card">
              <div className="card-header"><h2>Order Summary</h2></div>
              <div className="card-content">
                {cartItems.length === 0 ? (
                  <div className="empty-cart">
                    <p>Your cart is empty</p>
                    <Link to="/shop" className="continue-shopping-link">Continue Shopping</Link>
                  </div>
                ) : (
                  <>
                    {cartItems.map(item => (
                      <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                          <h3>{item.name}</h3>
                          <p>${item.price.toFixed(2)}</p>
                          <div className="cart-item-controls">
                            <button onClick={()=>updateQuantity(item.id, item.quantity - 1)}>−</button>
                            <span>{item.quantity}</span>
                            <button onClick={()=>updateQuantity(item.id, item.quantity + 1)}>+</button>
                            <button onClick={()=>removeItem(item.id)}>🗑</button>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="order-summary">
                      <div className="summary-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                      <div className="summary-row"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
                      <div className="summary-row"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
                      <div className="summary-row total"><span>Total</span><span>${total.toFixed(2)}</span></div>
                    </div>

                    <button className="place-order-button" onClick={handleSubmit}>Place Order</button>
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
