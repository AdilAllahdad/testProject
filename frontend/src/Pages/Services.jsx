import React from 'react';

const ServiceCard = ({ title, description, icon, price }) => {
  return (
    <div style={{
      border: '1px solid #dee2e6',
      borderRadius: '8px',
      padding: '2rem',
      margin: '1rem',
      flex: '1 1 300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    }}>
      <div style={{
        fontSize: '3rem',
        marginBottom: '1rem'
      }}>
        {icon}
      </div>
      <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ 
        color: '#6c757d', 
        flex: '1',
        marginBottom: '1.5rem'
      }}>
        {description}
      </p>
      <div style={{
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#007bff',
        marginBottom: '1rem'
      }}>
        {price}
      </div>
      <button style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '0.6rem 1.2rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: '500'
      }}>
        Learn More
      </button>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built using modern technologies to meet your specific business needs.',
      icon: '💻',
      price: '$999'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      icon: '📱',
      price: '$1,299'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that enhances user experience and drives engagement.',
      icon: '🎨',
      price: '$799'
    },
    {
      title: 'Cloud Solutions',
      description: 'Secure, scalable cloud infrastructure and migration services.',
      icon: '☁️',
      price: '$1,499'
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence and reach your target audience.',
      icon: '📈',
      price: '$599'
    },
    {
      title: 'Technical Support',
      description: '24/7 technical support and maintenance for your applications and systems.',
      icon: '🔧',
      price: '$399/mo'
    }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Our Services</h1>
      <p style={{ 
        textAlign: 'center', 
        maxWidth: '800px', 
        margin: '0 auto 3rem',
        color: '#6c757d'
      }}>
        We offer a comprehensive range of services designed to help your business grow and succeed in the digital world.
      </p>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '0 -1rem'
      }}>
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            price={service.price}
          />
        ))}
      </div>
      
      <div style={{ 
        marginTop: '4rem', 
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Need a Custom Solution?</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 1.5rem', color: '#6c757d' }}>
          We understand that every business is unique. Contact us to discuss your specific requirements and how we can help.
        </p>
        <button style={{
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          padding: '0.8rem 1.5rem',
          borderRadius: '4px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Services;