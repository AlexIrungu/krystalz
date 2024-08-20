import React, { useState } from 'react';
import axios from 'axios'


const Signup = ({ onSignupSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:5000/api/auth/signup', { name, email, password });
        setMessage(res.data.message);
      } catch (error) {
        setMessage(error.response.data.message);
      }
    // if (password !== confirmPassword) {
    //   alert("Passwords don't match");
    //   return;
    }

    // Store user data in localStorage
    // const userData = { name, email, password, verified: false };
    // localStorage.setItem(email, JSON.stringify(userData));
    
    // setIsSignedUp(true);

    // // Simulate email verification after 5 seconds
    // setTimeout(() => {
    //     const user = JSON.parse(localStorage.getItem(email));
    //     user.verified = true;
    //     localStorage.setItem(email, JSON.stringify(user));
    //     console.log('User verified:', email);
    //   }, 5000);
    // };

    // if (isSignedUp) {
    //     return (
    //       <div className="text-center">
    //         <h2 className="text-2xl font-bold mb-4">Signup Successful!</h2>
    //         <p>Please wait 5 seconds for your account to be verified before logging in.</p>
    //       </div>
    //     );
    //   }

    // Here you would typically handle the signup logic
    // console.log('Signup attempted with:', name, email, password);
    // // For now, we'll just simulate a successful signup
    // onSignupSuccess();
//   };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div> */}
          </div>

          <div>
          <button type="submit">Sign Up</button>
          {message && <p>{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;