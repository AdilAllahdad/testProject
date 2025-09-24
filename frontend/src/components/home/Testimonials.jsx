import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      content: 'This app has transformed how we manage our projects. The intuitive interface and powerful features have made our workflow much more efficient.',
      avatar: '👩‍💼'
    },
    {
      name: 'David Chen',
      role: 'Product Manager',
      content: 'I\'ve tried many similar solutions, but none compare to this platform. The customer support is exceptional and the features are exactly what we needed.',
      avatar: '👨‍💻'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Entrepreneur',
      content: 'As a small business owner, I needed something simple yet powerful. This platform delivers on both fronts and has helped my business grow.',
      avatar: '👩‍🦰'
    }
  ];

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>What Our Users Say</h2>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={{
            padding: '1.5rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            flex: '1',
            minWidth: '250px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ 
                fontSize: '2rem', 
                marginRight: '0.75rem' 
              }}>
                {testimonial.avatar}
              </div>
              <div>
                <h4 style={{ margin: '0' }}>{testimonial.name}</h4>
                <p style={{ margin: '0', color: '#6c757d' }}>{testimonial.role}</p>
              </div>
            </div>
            <p style={{ fontStyle: 'italic', color: '#495057' }}>{testimonial.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;