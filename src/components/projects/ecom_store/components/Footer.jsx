import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Brighten</h3>
            <p>Thoughtfully designed essentials that blend simplicity with style.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          
          <div className="footer-section">
            <h4>Customer Care</h4>
            <Link to="/shipping">Shipping Info</Link>
            <Link to="/returns">Returns</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Brighten. Created by <a href="https://williebeukescv.onrender.com/" target="_blank" rel="noopener noreferrer">Willie Beukes</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

