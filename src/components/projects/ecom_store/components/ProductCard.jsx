import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from './Button';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
        {isHovered && (
          <div className="product-card-overlay">
            <Button 
              variant="primary" 
              size="small"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        )}
      </div>
      <div className="product-card-content">
        <h3 className="product-card-title">{product.name}</h3>
        <div className="product-card-rating">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < product.rating ? 'star-filled' : 'star-empty'}>
              ★
            </span>
          ))}
        </div>
        <p className="product-card-price">R{product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;

