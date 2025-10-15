import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Loyalty Bar */}
      <div className="loyalty-bar">
        Earn points on every purchase
      </div>
      
      {/* Main Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <Link to="/" className="logo" onClick={closeMobileMenu}>
              <div className="logo-icon">B</div>
              <span className="logo-text">Brighten</span>
            </Link>

            {/* Hamburger Menu Button (Mobile) */}
            <button 
              className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Navigation */}
            <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
              <Link to="/shop" className="nav-link" onClick={closeMobileMenu}>Shop</Link>
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>About</Link>
              <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</Link>
            </nav>

            {/* Cart Icon */}
            <Link to="/cart" className="cart-icon" onClick={closeMobileMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}></div>
      )}
    </>
  );
};

export default Header;

