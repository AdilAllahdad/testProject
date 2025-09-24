import React from 'react';

const Hero = () => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '3rem 1rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      marginBottom: '2rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to Our App</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#555' }}>
        We provide top-notch services to help you achieve your goals.
        Explore our platform and discover what we can do for you.
      </p>
      <button style={{ 
        backgroundColor: '#007bff', 
        color: 'white',
        border: 'none',
        padding: '0.8rem 1.5rem',
        borderRadius: '4px',
        fontSize: '1rem',
        marginTop: '1.5rem',
        cursor: 'pointer'
      }}>
        Get Started
      </button>
    </div>
  );
};

export default Hero;