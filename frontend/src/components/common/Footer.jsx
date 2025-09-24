import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '2rem 0',
    marginTop: '2rem'
  };
  
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  };
  
  const headingStyle = {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    fontWeight: 'bold'
  };
  
  const linkStyle = {
    display: 'block',
    color: '#ddd',
    marginBottom: '0.5rem',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  };
  
  const copyrightStyle = {
    textAlign: 'center',
    marginTop: '2rem',
    paddingTop: '1rem',
    borderTop: '1px solid #444',
    fontSize: '0.9rem',
    color: '#aaa'
  };
  
  const socialContainer = {
    display: 'flex',
    gap: '0.75rem',
    marginTop: '1rem'
  };
  
  const socialIcon = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#555',
    color: 'white',
    transition: 'background-color 0.3s ease'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div>
          <h3 style={headingStyle}>About Us</h3>
          <p style={{ color: '#aaa', lineHeight: '1.6' }}>
            We are a dedicated team committed to providing the best solutions for our clients.
            Our mission is to deliver exceptional value through innovative technology.
          </p>
          <div style={socialContainer}>
            <a href="#" style={socialIcon}>f</a>
            <a href="#" style={socialIcon}>t</a>
            <a href="#" style={socialIcon}>in</a>
            <a href="#" style={socialIcon}>ig</a>
          </div>
        </div>
        
        <div>
          <h3 style={headingStyle}>Quick Links</h3>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/services" style={linkStyle}>Services</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
        </div>
        
        <div>
          <h3 style={headingStyle}>Contact Info</h3>
          <p style={{ color: '#aaa', marginBottom: '0.5rem' }}>
            <strong>Address:</strong> 123 Street Name, City, Country
          </p>
          <p style={{ color: '#aaa', marginBottom: '0.5rem' }}>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p style={{ color: '#aaa', marginBottom: '0.5rem' }}>
            <strong>Email:</strong> info@example.com
          </p>
          <p style={{ color: '#aaa', marginBottom: '0.5rem' }}>
            <strong>Hours:</strong> Mon-Fri: 9:00 AM - 5:00 PM
          </p>
        </div>
        
        <div>
          <h3 style={headingStyle}>Newsletter</h3>
          <p style={{ color: '#aaa', marginBottom: '1rem' }}>
            Subscribe to our newsletter to receive updates and news.
          </p>
          <div style={{ display: 'flex' }}>
            <input
              type="email"
              placeholder="Your Email"
              style={{
                padding: '0.5rem',
                borderRadius: '4px 0 0 4px',
                border: 'none',
                flex: '1'
              }}
            />
            <button
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0 4px 4px 0',
                cursor: 'pointer'
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div style={copyrightStyle}>
        <p>&copy; {currentYear} Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;