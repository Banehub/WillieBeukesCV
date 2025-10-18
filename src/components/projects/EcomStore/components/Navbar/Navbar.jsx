import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-icon">🛒</span>
          <h2>TechStore</h2>
        </div>
        
        <div className="navbar-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        
        <div className="navbar-actions">
          <div className="search-bar">
            <input type="text" placeholder="Search products..." className="search-input" />
            <button className="search-btn">🔍</button>
          </div>
          <button className="cart-btn">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">3</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
