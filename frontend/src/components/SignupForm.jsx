import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../api/user';

const SignupForm = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const data = await signupUser(form);
      if (data.message === 'User registered successfully.') {
        setMessage('Sign up successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 1200);
      } else {
        setMessage(data.message || 'Sign up failed.');
      }
    } catch (err) {
      setMessage('Server error.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '2rem auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Sign Up</h2>
      <div style={{ marginBottom: 16 }}>
        <label>Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>Password:</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} required style={{ width: '100%' }} />
      </div>
      <button type="submit" style={{ width: '100%', padding: 8 }}>Sign Up</button>
      {message && <p style={{ marginTop: 16 }}>{message}</p>}
    </form>
  );
};

export default SignupForm;
