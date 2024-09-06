import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-scroll'
import config from '../config';

const Login = ({ onLoginSuccess, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

const apiUrl = process.env.REACT_APP_API_URL || 'https://krystalz.onrender.com';

const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage('');
  try {
    const response = await axios.post(`${config.apiUrl}/auth/login`, 
      { email, password },
      { 
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.data && response.data.success) {
      setMessage('Login successful');
      onLoginSuccess();
    } else {
      setMessage(response.data.message || 'Login failed');
    }
  } catch (error) {
    console.error("Login error:", error);
    if (error.response) {
      setMessage(error.response.data.message || 'Server error');
    } else if (error.request) {
      setMessage('No response from server. Please check your connection.');
    } else {
      setMessage('An error occurred while sending the request.');
    }
  }
    
  
};


  return (
    <div id='login' className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to='forgot-password' className="font-medium text-indigo-600 hover:text-indigo-500"> 
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
    <button
      type="submit"
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Log In
    </button>
  </div>
  
  {message && <p className="mt-2 text-center text-sm text-gray-600">{message}</p>}
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={onSwitchToSignup}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;