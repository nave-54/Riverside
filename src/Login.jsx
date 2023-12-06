// Login.js
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './login.css'; // Assuming you have a separate CSS file for the Login component

const Login = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === 'demo' && password === 'password') {
      console.log('Login successful!');
      onClose(); // Close the Login component upon successful login
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  const handleClose = () => {
    onClose(); // Close the Login component when the close icon is clicked
  };

  return (
    <div className="login-overlay">
      <div className="login-box">
        <button className="close-icon" onClick={handleClose}>
          <FaTimes />
        </button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className='l' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
