import './Credits.css'

function Credits() {
  return (
    <section id="credits" className="credits-section">
      <div className="credits-content">
        <div className="credits-text">
          <h2 className="credits-title">Created by</h2>
          <h1 className="creator-name">Willie Beukes</h1>
          <p className="credits-subtitle">
            A tribute to the greatest science fiction epic of our time
          </p>
        </div>
        <div className="spice-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              animationDelay: `${i * 0.1}s`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Credits
