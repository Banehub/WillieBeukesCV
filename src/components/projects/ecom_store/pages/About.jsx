import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Header */}
      <section className="about-header">
        <div className="about-header-image">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" 
            alt="About Us" 
          />
          <div className="about-header-overlay">
            <h1>Designed with Intent</h1>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="about-section">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, Brighten was born from a simple belief: everyday objects 
                should bring joy. We create thoughtfully designed essentials that blend 
                simplicity with style, bringing brightness to your daily routine.
              </p>
              <p>
                Every product in our collection is carefully curated to ensure it meets 
                our standards of quality, sustainability, and timeless design. We believe 
                in creating pieces that you'll love for years to come.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" 
                alt="Our Story" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Materials */}
      <section className="section" style={{ background: 'var(--secondary-bg)' }}>
        <div className="container">
          <h2 className="text-center">Our Materials</h2>
          <div className="materials-grid">
            <div className="material-card">
              <div className="material-icon">🌿</div>
              <h3>Sustainable</h3>
              <p>We source eco-friendly materials that are kind to the planet.</p>
            </div>
            <div className="material-card">
              <div className="material-icon">✨</div>
              <h3>Premium Quality</h3>
              <p>Only the finest materials make it into our products.</p>
            </div>
            <div className="material-card">
              <div className="material-icon">🤝</div>
              <h3>Ethical</h3>
              <p>Fair trade and ethically sourced from trusted partners.</p>
            </div>
            <div className="material-card">
              <div className="material-icon">💚</div>
              <h3>Organic</h3>
              <p>Natural, organic materials whenever possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section">
        <div className="container">
          <div className="sustainability-box">
            <h2>Our Sustainability Commitment</h2>
            <p>
              We're committed to minimizing our environmental impact. From using recycled 
              packaging to partnering with carbon-neutral shipping providers, every decision 
              we make considers our planet's future.
            </p>
            <ul className="sustainability-list">
              <li>100% recyclable packaging</li>
              <li>Carbon-neutral shipping</li>
              <li>Sustainable material sourcing</li>
              <li>Zero-waste manufacturing partners</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

