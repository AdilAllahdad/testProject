import React from 'react';

const About = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>About Us</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2>Our Story</h2>
        <p style={{ lineHeight: '1.6', color: '#444' }}>
          Founded in 2020, our company began with a simple mission: to create innovative solutions 
          that make people's lives easier. What started as a small team of passionate developers 
          has grown into a thriving company dedicated to excellence in software development.
        </p>
        <p style={{ lineHeight: '1.6', color: '#444' }}>
          We believe in building products that not only solve problems but also provide an exceptional 
          user experience. Our commitment to quality and innovation has allowed us to grow and expand 
          our offerings to serve clients across various industries.
        </p>
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2>Our Mission</h2>
        <p style={{ lineHeight: '1.6', color: '#444' }}>
          Our mission is to empower individuals and organizations with intuitive, powerful software 
          solutions that transform how they work and connect. We strive to be at the forefront of 
          technology, constantly exploring new ways to innovate and improve.
        </p>
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2>Our Team</h2>
        <p style={{ lineHeight: '1.6', color: '#444' }}>
          Our team consists of talented professionals from diverse backgrounds, united by a shared 
          passion for technology and innovation. We foster a collaborative environment where creativity 
          flourishes and every voice is heard.
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          flexWrap: 'wrap',
          marginTop: '2rem'
        }}>
          {/* Team members could be added here */}
          <div style={{ textAlign: 'center', margin: '1rem' }}>
            <div style={{ 
              width: '120px', 
              height: '120px', 
              backgroundColor: '#e9ecef',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '3rem'
            }}>
              👨‍💻
            </div>
            <h3 style={{ margin: '0.5rem 0' }}>John Doe</h3>
            <p style={{ color: '#6c757d' }}>CEO & Founder</p>
          </div>
          <div style={{ textAlign: 'center', margin: '1rem' }}>
            <div style={{ 
              width: '120px', 
              height: '120px', 
              backgroundColor: '#e9ecef',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '3rem'
            }}>
              👩‍💻
            </div>
            <h3 style={{ margin: '0.5rem 0' }}>Jane Smith</h3>
            <p style={{ color: '#6c757d' }}>CTO</p>
          </div>
          <div style={{ textAlign: 'center', margin: '1rem' }}>
            <div style={{ 
              width: '120px', 
              height: '120px', 
              backgroundColor: '#e9ecef',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '3rem'
            }}>
              👨‍🎨
            </div>
            <h3 style={{ margin: '0.5rem 0' }}>Mike Johnson</h3>
            <p style={{ color: '#6c757d' }}>Lead Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;