import './Hero.css'

function Hero() {
  return (
    <div id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="dune-title">DUNE</h1>
        <div className="hero-subtitle">
          <p className="subtitle-line">The greatest science fiction epic</p>
          <p className="subtitle-line">A journey across the stars</p>
          <p className="subtitle-line">Where destiny unfolds</p>
        </div>
        <div className="hero-description">
          <p>
            Enter the universe of Arrakis, where the spice flows, 
            the sandworms rule the desert, and Paul Atreides discovers 
            his destiny as the Kwisatz Haderach.
          </p>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">1965</span>
            <span className="stat-label">Original Novel</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2021</span>
            <span className="stat-label">Epic Film</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Timeless Story</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

