import './Home.css'

function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      icon: "fa-headphones",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      icon: "fa-clock",
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      icon: "fa-volume-high",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Phone Case",
      price: 29.99,
      icon: "fa-mobile-screen",
      rating: 4.5,
      reviews: 203
    }
  ]

  return (
    <div className="home-section">
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to TechStore</h1>
          <p>Discover the latest in technology and gadgets</p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>

      <div className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <i className={`fa-regular ${product.icon} product-icon`}></i>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="product-rating">
                    <span className="stars">{"★".repeat(Math.floor(product.rating))}</span>
                    <span className="rating-text">({product.reviews})</span>
                  </div>
                  <div className="product-price">${product.price}</div>
                  <button className="btn btn-secondary">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>On orders over $50</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payment</h3>
              <p>100% secure checkout</p>
            </div>
            <div className="feature">
              <div className="feature-icon">↩️</div>
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>Always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
