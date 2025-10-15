import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="container">
        <h1 className="contact-title">Get in Touch</h1>
        
        <div className="contact-layout">
          {/* Left: Image/Map */}
          <div className="contact-visual">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80" 
              alt="Contact Us" 
            />
            <div className="contact-info">
              <h3>Visit Us</h3>
              <p>Created by Willie Beukes</p>
              <p>South Africa</p>
              <br />
              <h3>Contact</h3>
              <p>williebeukes@gmail.com</p>
              <p>+27 73 831 0288</p>
              <br />
              <h3>Portfolio</h3>
              <a href="https://williebeukescv.onrender.com/" target="_blank" rel="noopener noreferrer">
                williebeukescv.onrender.com
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="input"
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                />
              </div>

              <Button type="submit" variant="primary" size="large" fullWidth>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

