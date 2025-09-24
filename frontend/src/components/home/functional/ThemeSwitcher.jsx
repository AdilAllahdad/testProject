import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const themes = [
    { name: 'Light', bg: '#ffffff', text: '#333333', accent: '#007bff' },
    { name: 'Dark', bg: '#333333', text: '#ffffff', accent: '#61dafb' },
    { name: 'Blue', bg: '#e6f7ff', text: '#0066cc', accent: '#0099ff' },
    { name: 'Green', bg: '#e6fff0', text: '#006644', accent: '#00cc66' },
    { name: 'Purple', bg: '#f5e6ff', text: '#660099', accent: '#9933cc' },
  ];
  
  const [currentTheme, setCurrentTheme] = useState(0);
  const [themeApplied, setThemeApplied] = useState(false);
  
  const applyTheme = (index) => {
    setCurrentTheme(index);
    setThemeApplied(true);
    
    // After 1.5 seconds, hide the "Theme Applied" message
    setTimeout(() => {
      setThemeApplied(false);
    }, 1500);
  };
  
  const containerStyle = {
    backgroundColor: themes[currentTheme].bg,
    color: themes[currentTheme].text,
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'background-color 0.3s ease, color 0.3s ease'
  };
  
  const themeButtonsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '1rem'
  };
  
  const buttonStyle = (index) => ({
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: currentTheme === index ? `2px solid ${themes[index].accent}` : '1px solid #ddd',
    backgroundColor: themes[index].bg,
    color: themes[index].text,
    cursor: 'pointer',
    fontWeight: currentTheme === index ? 'bold' : 'normal'
  });
  
  const messageStyle = {
    marginTop: '1rem',
    padding: '0.5rem',
    backgroundColor: themes[currentTheme].accent,
    color: '#fff',
    borderRadius: '4px',
    textAlign: 'center',
    opacity: themeApplied ? 1 : 0,
    transition: 'opacity 0.3s ease',
    height: themeApplied ? 'auto' : '0',
    overflow: 'hidden'
  };
  
  return (
    <div style={containerStyle}>
      <h3 style={{ color: themes[currentTheme].text }}>Theme Switcher</h3>
      <p>Select a theme to customize the appearance:</p>
      
      <div style={themeButtonsStyle}>
        {themes.map((theme, index) => (
          <button 
            key={theme.name} 
            onClick={() => applyTheme(index)} 
            style={buttonStyle(index)}
          >
            {theme.name}
          </button>
        ))}
      </div>
      
      <div style={messageStyle}>
        {themes[currentTheme].name} theme applied!
      </div>
      
      <div style={{ marginTop: '1rem', padding: '1rem', border: `1px solid ${themes[currentTheme].accent}`, borderRadius: '4px' }}>
        <h4 style={{ color: themes[currentTheme].accent }}>Preview</h4>
        <p>This is how text looks in the {themes[currentTheme].name} theme.</p>
        <button 
          style={{
            backgroundColor: themes[currentTheme].accent,
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Sample Button
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;