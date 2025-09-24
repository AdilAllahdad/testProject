import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/user';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const data = await loginUser(form);
      if (data.success) {
        if (data.userId) {
          localStorage.setItem('userId', data.userId);
        }
        navigate('/dashboard');
      } else {
        setMessage(data.message || 'Login failed.');
      }
    } catch (err) {
      setMessage('Server error.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '2rem auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Login</h2>
      <div style={{ marginBottom: 16 }}>
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>Password:</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} required style={{ width: '100%' }} />
      </div>
      <button type="submit" style={{ width: '100%', padding: 8 }}>Login</button>
      {message && <p style={{ marginTop: 16 }}>{message}</p>}
    </form>
  );
};

export default LoginForm;
