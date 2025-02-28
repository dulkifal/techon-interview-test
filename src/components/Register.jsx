import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';
import api from '../api/api';

function Register() {
  const [formData, setFormData] = useState({ emailOrPhone: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!formData.emailOrPhone || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const response = await api.post(
        '/register',
        formData,
      );
      console.log('Registration successful:', response.data);
      navigate('/login'); // Redirect to Login page after successful registration
    } catch (error) {
      console.error('Registration error:', error.response ? error.response.data : error.message);
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2 className="title">Create Account</h2>
        <p className="subtitle">Register to start managing your buses</p>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label htmlFor="emailOrPhone">Email or Phone</label>
            <input
              id="emailOrPhone"
              type="text"
              placeholder="Enter email or phone"
              value={formData.emailOrPhone}
              onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
              disabled={loading}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              disabled={loading}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="button" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Register;