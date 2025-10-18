import './Cart.css'

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones Pro",
      price: 99.99,
      originalPrice: 129.99,
      image: "🎧",
      quantity: 1,
      inStock: true
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image: "⌚",
      quantity: 2,
      inStock: true
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "🔊",
      quantity: 1,
      inStock: true
    }
  ]

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const calculateSavings = () => {
    return cartItems.reduce((total, item) => {
      if (item.originalPrice) {
        return total + ((item.originalPrice - item.price) * item.quantity)
      }
      return total
    }, 0)
  }

  const subtotal = calculateSubtotal()
  const savings = calculateSavings()
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="cart-page">
      <div className="cart-header">
        <div className="container">
          <h1>Shopping Cart</h1>
          <p>Review your items before checkout</p>
        </div>
      </div>

      <div className="cart-content">
        <div className="container">
          {cartItems.length > 0 ? (
            <div className="cart-layout">
              <div className="cart-items">
                <div className="cart-items-header">
                  <h2>Your Items ({cartItems.length})</h2>
                  <button className="clear-cart-btn">Clear Cart</button>
                </div>

                <div className="cart-items-list">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="item-image">
                        <span className="product-emoji">{item.image}</span>
                      </div>

                      <div className="item-details">
                        <h3>{item.name}</h3>
                        <div className="item-pricing">
                          <span className="current-price">${item.price}</span>
                          {item.originalPrice && (
                            <span className="original-price">${item.originalPrice}</span>
                          )}
                        </div>
                        {item.originalPrice && (
                          <div className="item-savings">
                            Save ${(item.originalPrice - item.price).toFixed(2)}
                          </div>
                        )}
                      </div>

                      <div className="item-quantity">
                        <label>Qty:</label>
                        <div className="quantity-controls">
                          <button className="quantity-btn">-</button>
                          <input 
                            type="number" 
                            value={item.quantity} 
                            min="1" 
                            className="quantity-input"
                          />
                          <button className="quantity-btn">+</button>
                        </div>
                      </div>

                      <div className="item-total">
                        <span className="item-total-price">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      <div className="item-actions">
                        <button className="remove-btn">Remove</button>
                        <button className="save-btn">Save for Later</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-promo">
                  <div className="promo-input">
                    <input 
                      type="text" 
                      placeholder="Enter promo code" 
                      className="promo-field"
                    />
                    <button className="promo-btn">Apply</button>
                  </div>
                </div>
              </div>

              <div className="cart-summary">
                <div className="summary-card">
                  <h3>Order Summary</h3>
                  
                  <div className="summary-line">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  {savings > 0 && (
                    <div className="summary-line savings">
                      <span>Savings:</span>
                      <span>-${savings.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="summary-line">
                    <span>Shipping:</span>
                    <span>
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="summary-line">
                    <span>Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <div className="summary-divider"></div>

                  <div className="summary-line total">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <button className="checkout-btn">
                    Proceed to Checkout
                  </button>

                  <div className="payment-methods">
                    <div className="payment-icons">
                      <span className="payment-icon">💳</span>
                      <span className="payment-icon">🏦</span>
                      <span className="payment-icon">📱</span>
                    </div>
                    <p>Secure checkout with multiple payment options</p>
                  </div>

                  <div className="security-badges">
                    <div className="security-item">
                      <span className="security-icon">🔒</span>
                      <span>SSL Secured</span>
                    </div>
                    <div className="security-item">
                      <span className="security-icon">↩️</span>
                      <span>30-day Returns</span>
                    </div>
                  </div>
                </div>

                <div className="recommendations">
                  <h4>You might also like</h4>
                  <div className="recommendation-items">
                    <div className="recommendation-item">
                      <span className="product-emoji">📱</span>
                      <span>Phone Case</span>
                      <span>$29.99</span>
                    </div>
                    <div className="recommendation-item">
                      <span className="product-emoji">⌨️</span>
                      <span>Gaming Keyboard</span>
                      <span>$89.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-cart">
              <div className="empty-cart-content">
                <span className="empty-cart-icon">🛒</span>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any items to your cart yet.</p>
                <button className="btn btn-primary">Start Shopping</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
