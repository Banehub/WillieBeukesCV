import './Navbar.css'

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-links">
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('hero')}
          >
            Home
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('story')}
          >
            Story
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('credits')}
          >
            Credits
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
