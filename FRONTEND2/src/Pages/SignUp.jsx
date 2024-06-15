// src/pages/SignUp.jsx
import React, { useState } from 'react';
import { signUp } from '../api'; // Make sure this path is correct according to your project structure
import '../App.css';

const SignUp = ({ onClose, onSignUp }) => {
  const [form, setForm] = useState({ name: '', surname: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUp(form);
      console.log('Sign Up Success:', response);
      onSignUp(response); // Call the onSignUp prop with the response
      // Handle success (e.g., redirect to another page or show a success message)
    } catch (error) {
      console.error('Sign Up Error:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input name="surname" placeholder="Surname" value={form.surname} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
