import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  
  const startCounter = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };
  
  const stopCounter = () => {
    if (isRunning && intervalId) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  };
  
  const resetCounter = () => {
    stopCounter();
    setCount(0);
  };
  
  
  
  const containerStyle = {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  };
  
  const countDisplayStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '1rem 0',
    color: '#007bff'
  };
  
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '1rem'
  };
  
  const buttonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500'
  };
  
  return (
    <div style={containerStyle}>
      <h3>Counter Component</h3>
      <div style={countDisplayStyle}>{count}</div>
      <div style={buttonContainerStyle}>
        <button 
          onClick={startCounter} 
          style={{
            ...buttonStyle,
            backgroundColor: isRunning ? '#6c757d' : '#28a745',
            color: 'white'
          }}
          disabled={isRunning}
        >
          Start
        </button>
        <button 
          onClick={stopCounter} 
          style={{
            ...buttonStyle,
            backgroundColor: !isRunning ? '#6c757d' : '#dc3545',
            color: 'white'
          }}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button 
          onClick={resetCounter} 
          style={{
            ...buttonStyle,
            backgroundColor: '#007bff',
            color: 'white'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;