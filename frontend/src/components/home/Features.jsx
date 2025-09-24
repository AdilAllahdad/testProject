import React from 'react';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div style={{
      padding: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      flex: '1',
      minWidth: '250px'
    }}>
      <div style={{
        backgroundColor: '#e9ecef',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem'
      }}>
        {icon}
      </div>
      <h3 style={{ marginBottom: '0.75rem' }}>{title}</h3>
      <p style={{ color: '#6c757d' }}>{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Easy to Use',
      description: 'Our interface is intuitive and user-friendly, making it simple for anyone to get started.',
      icon: '🚀'
    },
    {
      title: 'Secure',
      description: 'Your data is protected with enterprise-grade security to ensure privacy and safety.',
      icon: '🔒'
    },
    {
      title: 'Fast',
      description: 'Optimized performance means you can accomplish tasks quickly and efficiently.',
      icon: '⚡'
    }
  ];

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Our Features</h2>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;