import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import log from './images/log.jpg'
import Login from './Login';
import Signup from './Signup';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Contact', to: 'contact' },
  ];

  const handleLoginSuccess = () => {
    // Handle successful login
    setShowLogin(false);
  };

  const handleSignupSuccess = () => {
    // Handle successful signup
    setShowSignup(false);
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-50 theme-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <div className="flex items-center space-x-2">
  <p>LUNA KRYSTALZ</p>
  <img className="h-8 w-8" src={log} alt="Logo" />
</div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    activeClass="bg-gray-900 text-white"
                    spy={true}
                    offset={-64} // Adjust this value based on your navbar height
                  >
                    {item.name}
                  </ScrollLink>
                ))}
                 <button
            onClick={() => setShowLogin(true)}
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => setShowSignup(true)}
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
          >
            Signup
          </button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
  <div className="md:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {navItems.map((item) => (
        <ScrollLink
          key={item.name}
          to={item.to}
          smooth={true}
          duration={500}
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
          activeClass="bg-gray-900 text-white"
          spy={true}
          offset={-64}
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </ScrollLink>
      ))}
      <button
        onClick={() => {
          setShowLogin(true);
          setIsOpen(false);
        }}
        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
      >
        Login
      </button>
      <button
        onClick={() => {
          setShowSignup(true);
          setIsOpen(false);
        }}
        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
      >
        Signup
      </button>
    </div>
  </div>
)}
      {showLogin && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <Login onLoginSuccess={handleLoginSuccess} />
            <button onClick={() => setShowLogin(false)}>Close</button>
          </div>
        </div>
      )}

      {showSignup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <Signup onSignupSuccess={handleSignupSuccess} />
            <button onClick={() => setShowSignup(false)}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;