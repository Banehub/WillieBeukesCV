import './CallToAction.css'

function CallToAction() {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2>Join the Journey</h2>
          <p>Be part of our mission to capture and share the beauty of nature's flight.</p>
          
          <div className="cta-form">
            <div className="email-input-group">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="email-input"
              />
              <button className="cta-button">Subscribe</button>
            </div>
            <p className="form-note">Get updates on new documentaries and exclusive content.</p>
          </div>
          
          <div className="cta-actions">
            <button className="btn-primary">Watch the Documentary</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
