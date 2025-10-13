import './About.css'

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to capture the harmony of flight — connecting people and nature 
              through moving imagery and sound. We believe that every wingbeat tells a story 
              of freedom, grace, and the timeless dance between earth and sky.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Species Documented</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Countries Explored</p>
              </div>
              <div className="stat">
                <h3>1000+</h3>
                <p>Hours of Footage</p>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="bird-silhouette">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M50 100C50 70 70 50 100 50C130 50 150 70 150 100C150 130 130 150 100 150C70 150 50 130 50 100Z"/>
                <path d="M100 50L100 30"/>
                <path d="M100 150L100 170"/>
                <path d="M50 100L30 100"/>
                <path d="M150 100L170 100"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
