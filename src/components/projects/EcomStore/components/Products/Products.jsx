import './Products.css'

function Products() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      originalPrice: 129.99,
      image: "🎧",
      rating: 4.8,
      reviews: 124,
      category: "Audio",
      inStock: true
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      originalPrice: 249.99,
      image: "⌚",
      rating: 4.6,
      reviews: 89,
      category: "Wearables",
      inStock: true
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "🔊",
      rating: 4.7,
      reviews: 156,
      category: "Audio",
      inStock: true
    },
    {
      id: 4,
      name: "Phone Case",
      price: 29.99,
      image: "📱",
      rating: 4.5,
      reviews: 203,
      category: "Accessories",
      inStock: true
    },
    {
      id: 5,
      name: "Laptop Stand",
      price: 49.99,
      image: "💻",
      rating: 4.4,
      reviews: 67,
      category: "Accessories",
      inStock: false
    },
    {
      id: 6,
      name: "Wireless Mouse",
      price: 39.99,
      image: "🖱️",
      rating: 4.6,
      reviews: 98,
      category: "Accessories",
      inStock: true
    },
    {
      id: 7,
      name: "Tablet",
      price: 299.99,
      originalPrice: 349.99,
      image: "📱",
      rating: 4.7,
      reviews: 45,
      category: "Electronics",
      inStock: true
    },
    {
      id: 8,
      name: "Gaming Keyboard",
      price: 89.99,
      image: "⌨️",
      rating: 4.8,
      reviews: 112,
      category: "Gaming",
      inStock: true
    }
  ]

  const categories = ["All", "Audio", "Wearables", "Accessories", "Electronics", "Gaming"]

  return (
    <div className="products-page">
      <div className="products-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Discover our wide range of tech products</p>
        </div>
      </div>

      <div className="products-content">
        <div className="container">
          <div className="products-layout">
            <div className="filters-sidebar">
              <div className="filter-section">
                <h3>Categories</h3>
                <div className="category-filters">
                  {categories.map(category => (
                    <button 
                      key={category} 
                      className={`category-filter ${category === 'All' ? 'active' : ''}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3>Price Range</h3>
                <div className="price-range">
                  <input type="range" min="0" max="500" defaultValue="500" className="price-slider" />
                  <div className="price-labels">
                    <span>$0</span>
                    <span>$500</span>
                  </div>
                </div>
              </div>

              <div className="filter-section">
                <h3>Availability</h3>
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked />
                  <span>In Stock Only</span>
                </label>
              </div>
            </div>

            <div className="products-main">
              <div className="products-toolbar">
                <div className="results-count">
                  Showing {products.length} products
                </div>
                <div className="sort-options">
                  <select className="sort-select">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>

              <div className="products-grid">
                {products.map(product => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <span className="product-emoji">{product.image}</span>
                      {product.originalPrice && (
                        <div className="discount-badge">
                          -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </div>
                      )}
                      {!product.inStock && (
                        <div className="out-of-stock">Out of Stock</div>
                      )}
                    </div>
                    <div className="product-info">
                      <div className="product-category">{product.category}</div>
                      <h3>{product.name}</h3>
                      <div className="product-rating">
                        <span className="stars">{"★".repeat(Math.floor(product.rating))}</span>
                        <span className="rating-text">({product.reviews})</span>
                      </div>
                      <div className="product-pricing">
                        <span className="current-price">${product.price}</span>
                        {product.originalPrice && (
                          <span className="original-price">${product.originalPrice}</span>
                        )}
                      </div>
                      <button 
                        className={`btn ${product.inStock ? 'btn-primary' : 'btn-disabled'}`}
                        disabled={!product.inStock}
                      >
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pagination">
                <button className="pagination-btn">Previous</button>
                <div className="pagination-numbers">
                  <button className="pagination-number active">1</button>
                  <button className="pagination-number">2</button>
                  <button className="pagination-number">3</button>
                </div>
                <button className="pagination-btn">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
