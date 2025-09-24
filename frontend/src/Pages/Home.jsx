import React, { useState } from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import Counter from '../components/home/functional/Counter';
import ThemeSwitcher from '../components/home/functional/ThemeSwitcher';
import TodoApp from '../components/home/functional/TodoApp';

const Home = () => {
  const [selectedWidget, setSelectedWidget] = useState(null);
  
  // Function to show/hide widgets
  const toggleWidget = (widgetName) => {
    if (selectedWidget === widgetName) {
      setSelectedWidget(null);
    } else {
      setSelectedWidget(widgetName);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <Hero />
      
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Interactive Widgets</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <button 
            onClick={() => toggleWidget('counter')}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: selectedWidget === 'counter' ? '#28a745' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            {selectedWidget === 'counter' ? 'Hide Counter' : 'Show Counter'}
          </button>
          
        
          
          <button 
            onClick={() => toggleWidget('theme')}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: selectedWidget === 'theme' ? '#28a745' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            {selectedWidget === 'theme' ? 'Hide Theme' : 'Show Theme'}
          </button>
          
          <button 
            onClick={() => toggleWidget('todo')}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: selectedWidget === 'todo' ? '#28a745' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            {selectedWidget === 'todo' ? 'Hide Todo' : 'Show Todo'}
          </button>
        </div>
        
        {selectedWidget && (
          <div style={{ marginBottom: '2rem' }}>
            {selectedWidget === 'counter' && <Counter />}
            {selectedWidget === 'theme' && <ThemeSwitcher />}
            {selectedWidget === 'todo' && <TodoApp />}
          </div>
        )}
      </div>
      
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;