import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar slide-down">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>Our Journey</h2>
        </div>
        
        <div className="navbar-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#journey" className="nav-link">Journey</a>
          <a href="#about" className="nav-link">About</a>
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
