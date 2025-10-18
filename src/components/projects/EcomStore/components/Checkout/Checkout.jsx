import './Checkout.css'

function Checkout() {
  const orderItems = [
    {
      id: 1,
      name: "Wireless Headphones Pro",
      price: 99.99,
      image: "🎧",
      quantity: 1
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image: "⌚",
      quantity: 2
    }
  ]

  const subtotal = orderItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const shipping = 0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="container">
          <h1>Checkout</h1>
          <p>Complete your order securely</p>
        </div>
      </div>

      <div className="checkout-content">
        <div className="container">
          <div className="checkout-layout">
            <div className="checkout-form">
              <div className="form-section">
                <h2>Shipping Information</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input type="text" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input type="text" placeholder="Doe" required />
                  </div>
                  <div className="form-group full-width">
                    <label>Email Address *</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group full-width">
                    <label>Address *</label>
                    <input type="text" placeholder="123 Main Street" required />
                  </div>
                  <div className="form-group">
                    <label>City *</label>
                    <input type="text" placeholder="New York" required />
                  </div>
                  <div className="form-group">
                    <label>State *</label>
                    <select required>
                      <option value="">Select State</option>
                      <option value="NY">New York</option>
                      <option value="CA">California</option>
                      <option value="TX">Texas</option>
                      <option value="FL">Florida</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>ZIP Code *</label>
                    <input type="text" placeholder="10001" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h2>Payment Method</h2>
                <div className="payment-methods">
                  <div className="payment-option">
                    <input type="radio" id="credit-card" name="payment" value="credit-card" defaultChecked />
                    <label htmlFor="credit-card">
                      <span className="payment-icon">💳</span>
                      Credit Card
                    </label>
                  </div>
                  <div className="payment-option">
                    <input type="radio" id="paypal" name="payment" value="paypal" />
                    <label htmlFor="paypal">
                      <span className="payment-icon">🏦</span>
                      PayPal
                    </label>
                  </div>
                  <div className="payment-option">
                    <input type="radio" id="apple-pay" name="payment" value="apple-pay" />
                    <label htmlFor="apple-pay">
                      <span className="payment-icon">📱</span>
                      Apple Pay
                    </label>
                  </div>
                </div>

                <div className="credit-card-form">
                  <div className="form-group">
                    <label>Card Number *</label>
                    <input type="text" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Expiry Date *</label>
                      <input type="text" placeholder="MM/YY" required />
                    </div>
                    <div className="form-group">
                      <label>CVV *</label>
                      <input type="text" placeholder="123" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Cardholder Name *</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h2>Order Summary</h2>
                <div className="order-items">
                  {orderItems.map(item => (
                    <div key={item.id} className="order-item">
                      <div className="item-image">
                        <span className="product-emoji">{item.image}</span>
                      </div>
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <span>Qty: {item.quantity}</span>
                      </div>
                      <div className="item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-totals">
                  <div className="total-line">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="total-line">
                    <span>Shipping:</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="total-line">
                    <span>Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="total-line total">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <div className="terms-checkbox">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">
                    I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                  </label>
                </div>
                <div className="terms-checkbox">
                  <input type="checkbox" id="newsletter" />
                  <label htmlFor="newsletter">
                    Subscribe to our newsletter for updates and special offers
                  </label>
                </div>
              </div>

              <button className="place-order-btn">
                Place Order - ${total.toFixed(2)}
              </button>
            </div>

            <div className="checkout-sidebar">
              <div className="security-info">
                <h3>Secure Checkout</h3>
                <div className="security-features">
                  <div className="security-item">
                    <span className="security-icon">🔒</span>
                    <span>SSL Encrypted</span>
                  </div>
                  <div className="security-item">
                    <span className="security-icon">🛡️</span>
                    <span>Fraud Protection</span>
                  </div>
                  <div className="security-item">
                    <span className="security-icon">↩️</span>
                    <span>30-day Returns</span>
                  </div>
                </div>
              </div>

              <div className="shipping-info">
                <h3>Shipping Information</h3>
                <div className="shipping-options">
                  <div className="shipping-option selected">
                    <div className="shipping-type">
                      <span className="shipping-icon">🚚</span>
                      <span>Standard Shipping</span>
                    </div>
                    <div className="shipping-details">
                      <span>FREE</span>
                      <span>3-5 business days</span>
                    </div>
                  </div>
                  <div className="shipping-option">
                    <div className="shipping-type">
                      <span className="shipping-icon">⚡</span>
                      <span>Express Shipping</span>
                    </div>
                    <div className="shipping-details">
                      <span>$9.99</span>
                      <span>1-2 business days</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="support-info">
                <h3>Need Help?</h3>
                <div className="support-options">
                  <div className="support-item">
                    <span className="support-icon">💬</span>
                    <span>Live Chat</span>
                  </div>
                  <div className="support-item">
                    <span className="support-icon">📞</span>
                    <span>Call Us: (555) 123-4567</span>
                  </div>
                  <div className="support-item">
                    <span className="support-icon">📧</span>
                    <span>Email Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
