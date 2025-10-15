import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  if (!product) {
    return (
      <div className="container" style={{ padding: 'var(--spacing-2xl)' }}>
        <h1>Product not found</h1>
        <Link to="/shop">
          <Button variant="primary">Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, selectedColor, selectedSize }, quantity);
    alert('Added to cart!');
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="product-detail">
      <div className="container">
        {/* Product Main Section */}
        <div className="product-main">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="thumbnail-images">
              {[product.image, product.image, product.image].map((img, i) => (
                <img key={i} src={img} alt={`${product.name} ${i + 1}`} />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1>{product.name}</h1>
            <div className="product-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < product.rating ? 'star-filled' : 'star-empty'}>
                  ★
                </span>
              ))}
              <span className="rating-count">(48 reviews)</span>
            </div>
            <p className="product-price">R{product.price.toFixed(2)}</p>
            <p className="product-description">{product.description}</p>

            {/* Color Selection */}
            <div className="product-option">
              <h3>Color</h3>
              <div className="color-options">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            {product.category === 'Apparel' && (
              <div className="product-option">
                <h3>Size</h3>
                <div className="size-options">
                  {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="product-option">
              <h3>Quantity</h3>
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              variant="primary" 
              size="large" 
              fullWidth
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="product-tabs">
          <div className="tabs-header">
            <button
              className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              Details
            </button>
            <button
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
            <button
              className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`}
              onClick={() => setActiveTab('shipping')}
            >
              Shipping Info
            </button>
          </div>
          <div className="tab-content">
            {activeTab === 'details' && (
              <div>
                <h3>Product Details</h3>
                <ul>
                  <li>Premium quality materials</li>
                  <li>Thoughtfully designed for everyday use</li>
                  <li>Sustainable and eco-friendly</li>
                  <li>Made with care and attention to detail</li>
                </ul>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div>
                <h3>Customer Reviews</h3>
                <p>See what our customers are saying about this product.</p>
                <div className="review-placeholder">
                  <p><strong>Sarah M.</strong> - ★★★★★</p>
                  <p>"Absolutely love this product! Quality is outstanding."</p>
                </div>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div>
                <h3>Shipping Information</h3>
                <p>Free shipping on orders over R500.</p>
                <p>Standard delivery: 3-5 business days</p>
                <p>Express delivery: 1-2 business days (additional fee)</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2>You May Also Like</h2>
            <div className="related-grid">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

