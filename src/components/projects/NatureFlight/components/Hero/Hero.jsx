import './Hero.css'

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Where Nature Takes Flight.</h1>
        <p className="hero-subtitle">
          Experience the freedom and beauty of the wild, right from your screen.
        </p>
        
        <div className="cta-buttons">
          <button className="btn btn-primary">Explore More</button>
        </div>
      </div>
      
      <div className="flying-bird">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
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

