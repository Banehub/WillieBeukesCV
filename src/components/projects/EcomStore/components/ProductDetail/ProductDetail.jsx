import './ProductDetail.css'

function ProductDetail() {
  const product = {
    id: 1,
    name: "Wireless Headphones Pro",
    price: 99.99,
    originalPrice: 129.99,
    image: "🎧",
    rating: 4.8,
    reviews: 124,
    category: "Audio",
    inStock: true,
    description: "Experience premium sound quality with our latest wireless headphones. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge (5 min = 3 hours)",
      "Bluetooth 5.0 connectivity",
      "Comfortable over-ear design",
      "Premium sound quality"
    ],
    specifications: {
      "Battery Life": "30 hours",
      "Charging Time": "2 hours",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "250g",
      "Frequency Response": "20Hz - 20kHz",
      "Driver Size": "40mm"
    },
    images: ["🎧", "🎧", "🎧", "🎧"]
  }

  const relatedProducts = [
    {
      id: 2,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "🔊",
      rating: 4.7
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 199.99,
      image: "⌚",
      rating: 4.6
    },
    {
      id: 4,
      name: "Phone Case",
      price: 29.99,
      image: "📱",
      rating: 4.5
    }
  ]

  return (
    <div className="product-detail-page">
      <div className="product-detail-header">
        <div className="container">
          <nav className="breadcrumb">
            <a href="#">Home</a>
            <span>/</span>
            <a href="#">Products</a>
            <span>/</span>
            <a href="#">Audio</a>
            <span>/</span>
            <span>{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="product-detail-content">
        <div className="container">
          <div className="product-detail-layout">
            <div className="product-images">
              <div className="main-image">
                <span className="product-emoji">{product.image}</span>
                {product.originalPrice && (
                  <div className="discount-badge">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </div>
                )}
              </div>
              <div className="thumbnail-images">
                {product.images.map((img, index) => (
                  <div key={index} className={`thumbnail ${index === 0 ? 'active' : ''}`}>
                    <span className="product-emoji">{img}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-info">
              <div className="product-category">{product.category}</div>
              <h1>{product.name}</h1>
              
              <div className="product-rating">
                <span className="stars">{"★".repeat(Math.floor(product.rating))}</span>
                <span className="rating-text">({product.reviews} reviews)</span>
              </div>

              <div className="product-pricing">
                <span className="current-price">${product.price}</span>
                {product.originalPrice && (
                  <span className="original-price">${product.originalPrice}</span>
                )}
              </div>

              <div className="product-description">
                <p>{product.description}</p>
              </div>

              <div className="product-features">
                <h3>Key Features</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="product-actions">
                <div className="quantity-selector">
                  <label>Quantity:</label>
                  <div className="quantity-controls">
                    <button className="quantity-btn">-</button>
                    <input type="number" value="1" min="1" className="quantity-input" />
                    <button className="quantity-btn">+</button>
                  </div>
                </div>

                <div className="action-buttons">
                  <button className="btn btn-primary btn-large">
                    Add to Cart
                  </button>
                  <button className="btn btn-secondary btn-large">
                    Buy Now
                  </button>
                </div>
              </div>

              <div className="product-meta">
                <div className="meta-item">
                  <span className="meta-icon">🚚</span>
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">↩️</span>
                  <span>30-day return policy</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">🔒</span>
                  <span>Secure checkout</span>
                </div>
              </div>
            </div>
          </div>

          <div className="product-tabs">
            <div className="tab-navigation">
              <button className="tab-btn active">Description</button>
              <button className="tab-btn">Specifications</button>
              <button className="tab-btn">Reviews</button>
            </div>

            <div className="tab-content">
              <div className="tab-panel active">
                <h3>Product Description</h3>
                <p>{product.description}</p>
                <p>These wireless headphones deliver exceptional audio quality with advanced noise cancellation technology. Perfect for music lovers, professionals, and anyone who values premium sound experience.</p>
              </div>
            </div>
          </div>

          <div className="related-products">
            <h2>Related Products</h2>
            <div className="related-grid">
              {relatedProducts.map(relatedProduct => (
                <div key={relatedProduct.id} className="related-product">
                  <div className="related-image">
                    <span className="product-emoji">{relatedProduct.image}</span>
                  </div>
                  <div className="related-info">
                    <h4>{relatedProduct.name}</h4>
                    <div className="related-rating">
                      <span className="stars">{"★".repeat(Math.floor(relatedProduct.rating))}</span>
                    </div>
                    <div className="related-price">${relatedProduct.price}</div>
                    <button className="btn btn-secondary">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
