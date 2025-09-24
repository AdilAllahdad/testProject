import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#333',
    color: 'white'
  };
  
  const linkContainerStyle = {
    display: 'flex',
    gap: '20px'
  };
  
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
    padding: '5px 10px'
  };
  
  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: '#555',
    borderRadius: '4px'
  };
  
  const getStyle = (path) => {
    return location.pathname === path ? activeLinkStyle : linkStyle;
  };
  
  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: 0
  };

  return (
    <nav style={navStyle}>
      <h1 style={logoStyle}>MyApp</h1>
      <div style={linkContainerStyle}>
        <Link to="/" style={getStyle('/')}>Home</Link>
        <Link to="/about" style={getStyle('/about')}>About</Link>
        <Link to="/services" style={getStyle('/services')}>Services</Link>
        <Link to="/contact" style={getStyle('/contact')}>Contact</Link>
        <Link to="/dashboard" style={getStyle('/dashboard')}>Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navigation;