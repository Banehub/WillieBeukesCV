import './Hero.css'

function Hero() {
  return (
    <div className="hero-section">
      <h1 className="hero-title">Our Journey Begins Here</h1>
      <p className="hero-subtitle">
        Crafting ideas that reach for the stars.
      </p>
      
      <div className="cta-buttons">
        <button className="btn btn-primary">Explore</button>
        <button className="btn btn-secondary">Join the Journey</button>
      </div>
      
      <div className="scroll-indicator">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </div>
  )
}

export default Hero

