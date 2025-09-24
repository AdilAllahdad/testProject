import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Simulate a successful submission
    setFormStatus('success');
    
    // Reset the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Clear the success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };
  
  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #ced4da',
    fontSize: '1rem'
  };
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact Us</h1>
      
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ marginBottom: '1rem' }}>Get in Touch</h2>
          <p style={{ marginBottom: '2rem', color: '#6c757d', lineHeight: '1.6' }}>
            Have questions or need assistance? Fill out the form or contact us directly using the information below.
          </p>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📍</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.1rem' }}>Address</h3>
                <p style={{ margin: '0.25rem 0 0', color: '#6c757d' }}>123 Business Ave, Suite 456, City, Country</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📞</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.1rem' }}>Phone</h3>
                <p style={{ margin: '0.25rem 0 0', color: '#6c757d' }}>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ fontSize: '1.5rem', marginRight: '1rem' }}>✉️</div>
              <div>
                <h3 style={{ margin: '0', fontSize: '1.1rem' }}>Email</h3>
                <p style={{ margin: '0.25rem 0 0', color: '#6c757d' }}>info@example.com</p>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Follow Us</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ 
                width: '40px', 
                height: '40px',
                backgroundColor: '#3b5998',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                f
              </div>
              <div style={{ 
                width: '40px', 
                height: '40px',
                backgroundColor: '#1da1f2',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                t
              </div>
              <div style={{ 
                width: '40px', 
                height: '40px',
                backgroundColor: '#0077b5',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                in
              </div>
              <div style={{ 
                width: '40px', 
                height: '40px',
                backgroundColor: '#ff0000',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                yt
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ marginBottom: '1rem' }}>Send us a Message</h2>
          
          {formStatus === 'success' && (
            <div style={{
              backgroundColor: '#d4edda',
              color: '#155724',
              padding: '1rem',
              borderRadius: '4px',
              marginBottom: '1rem'
            }}>
              Your message has been sent successfully! We'll get back to you soon.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              style={{
                ...inputStyle,
                minHeight: '150px',
                resize: 'vertical'
              }}
              required
            ></textarea>
            
            <button type="submit" style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div style={{
        height: '300px',
        backgroundColor: '#e9ecef',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        color: '#6c757d'
      }}>
        Map will be displayed here
      </div>
    </div>
  );
};

export default Contact;