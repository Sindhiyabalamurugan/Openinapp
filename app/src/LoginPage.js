import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css'; // Add CSS for styling
import image from './2.jpg';
import { Link } from 'react-router-dom';


const LoginPage = () => {
    const [repoData, setRepoData] = useState(null);
    const repoUrl = 'https://openinapp.co/fmqjn'; // Replace with your GitHub username and repository
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSignIn = async () => {
      try {
        // Perform authentication using Axios and navigate to the next page
        // You'll need to replace this with your authentication logic
        console.log('Email:', email);
        console.log('Password:', password);
  
        // Fetch GitHub repository data when signing in
        const response = await axios.get(repoUrl);
        setRepoData(response.data);
      } catch (error) {
        console.error('Error during authentication:', error);
      }
    };
  
  return (
    <div className="login-container">
      <div className="left-side">
        {/* Image container */}
        <div className="image-container">
            <img src={image} alt="loginimage"></img>
        {repoData && (
          <div className="repository-info">
            <h2>Repository Info</h2>
            <pre>{JSON.stringify(repoData, null, 2)}</pre>
          </div>
        )}
          {/* Your full image goes here */}
         
        </div>
      </div>
      <div className="right-side">
        <h2>Sign In</h2>

        <div className="input-group">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Sign in with Google</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>Sign in with Apple</button>
       
          <legend>Email</legend>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={handleEmailChange}
          />
          
        </div>
        <div className="input-group">
          <legend>Password</legend>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="forgot-password">
          <a href="Forget">Forgot Password?</a>
        </div>
        <button onClick={handleSignIn} className="sign-in-button">
          Sign In
        </button>
        <br></br>
        <Link to="/dashboard">Go to Dashboard</Link>
        <p>Don't have an account?<a href="Forget">Register here</a></p>
        <div className="alternative-signin">
          
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
