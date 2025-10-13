import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar slide-down">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h2>NatureFlight</h2>
        </div>
        
        <div className="navbar-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#mission" className="nav-link">Our Mission</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        
        <div className="navbar-actions">
          <button className="btn-login">Login</button>
          <button className="btn-register">Register</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
