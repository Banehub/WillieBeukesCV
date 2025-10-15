import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import Input from '../components/Input';
import { products, testimonials, categories } from '../data/products';
import './Home.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80" 
            alt="Hero Background" 
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title fade-in">Brighten Your Everyday.</h1>
          <p className="hero-subtitle fade-in">
            Thoughtfully designed essentials that blend simplicity with style.
          </p>
          <div className="hero-buttons fade-in">
            <Link to="/shop">
              <Button variant="primary" size="large">Shop Now</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="large">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">Shop by Category</h2>
          <div className="categories-grid">
            <Link 
              to="/shop?category=Home" 
              className="category-card"
            >
              <div className="category-image">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80" alt="Home" />
              </div>
              <h3>Home</h3>
            </Link>
            <Link 
              to="/shop?category=Tech" 
              className="category-card"
            >
              <div className="category-image">
                <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80" alt="Tech" />
              </div>
              <h3>Tech</h3>
            </Link>
            <Link 
              to="/shop?category=Apparel" 
              className="category-card"
            >
              <div className="category-image">
                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80" alt="Apparel" />
              </div>
              <h3>Apparel</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section" style={{ background: 'var(--secondary-bg)' }}>
        <div className="container">
          <h2 className="text-center">Best Sellers</h2>
          <div className="products-grid">
            {products.slice(0, 9).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
            <Link to="/shop">
              <Button variant="primary">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">What Our Customers Say</h2>
          <div className="testimonial-carousel">
            <button className="carousel-btn prev" onClick={prevTestimonial}>
              ‹
            </button>
            <div className="testimonial-card">
              <img 
                src={testimonials[currentTestimonial].avatar} 
                alt={testimonials[currentTestimonial].name}
                className="testimonial-avatar"
              />
              <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
              <p className="testimonial-name">{testimonials[currentTestimonial].name}</p>
              <div className="testimonial-rating">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
            <button className="carousel-btn next" onClick={nextTestimonial}>
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Join our circle for exclusive drops</h2>
            <p>Be the first to know about new products and special offers.</p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="primary">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

