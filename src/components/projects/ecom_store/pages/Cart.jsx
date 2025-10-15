import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();
  const total = getTotal();
  const shippingThreshold = 500;
  const freeShipping = total >= shippingThreshold;

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="container">
          <h1>Your Cart is Empty</h1>
          <p>Add some products to get started!</p>
          <Link to="/shop">
            <Button variant="primary" size="large">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="container">
        <h1 className="cart-title">Shopping Cart</h1>
        
        {!freeShipping && (
          <div className="shipping-notice">
            Add R{(shippingThreshold - total).toFixed(2)} more for free shipping! 🌿
          </div>
        )}

        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="cart-item">
                    <td className="cart-item-product">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h3>{item.name}</h3>
                        {item.selectedColor && (
                          <p className="item-detail">Color: {item.selectedColor}</p>
                        )}
                        {item.selectedSize && (
                          <p className="item-detail">Size: {item.selectedSize}</p>
                        )}
                      </div>
                    </td>
                    <td>R{item.price.toFixed(2)}</td>
                    <td>
                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                    </td>
                    <td className="item-total">R{(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Summary */}
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>R{total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className={freeShipping ? 'free-shipping-text' : ''}>
                {freeShipping ? 'FREE' : 'R50.00'}
              </span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>R{(total + (freeShipping ? 0 : 50)).toFixed(2)}</span>
            </div>
            <Link to="/checkout">
              <Button variant="primary" size="large" fullWidth>
                Proceed to Checkout
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" size="medium" fullWidth>
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

