import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import log from './images/log.jpg'

const Navbar = ({ isLoggedIn, username, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Shop', to: 'shop' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className=" sticky top-0 z-50 theme-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="flex flex-col items-start">
                <div className="relative">
                  <p className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 tracking-wider">
                    LUNA
                  </p>
                  <p className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 tracking-wider absolute top-0 left-0 transform translate-x-0.5 translate-y-0.5 opacity-50">
                    LUNA
                  </p>
                </div>
                <div className="relative">
                  <p className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 tracking-wider">
                    KRYSTALZ
                  </p>
                  <p className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 tracking-wider absolute top-0 left-0 transform translate-x-0.5 translate-y-0.5 opacity-50">
                    KRYSTALZ
                  </p>
                </div>
              </div>
              <img className="h-8 w-8 md:h-10 md:w-10 animate-spin-slow animate-pulse" src={log} alt="Logo" />
            </div>
          </div>

          <div className="hidden md:block flex-grow">
            <div className="flex items-center justify-center space-x-4">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition duration-300 ease-in-out"
                  activeClass="bg-gray-700 text-white"
                  spy={true}
                  offset={-80}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  Welcome, {username}
                </span>
                <button
                  onClick={onLogout}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition duration-300 ease-in-out"
                >
                  Logout
                </button>
              </div>
            ) : null}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300 ease-in-out"
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
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition duration-300 ease-in-out"
                activeClass="bg-gray-700 text-white"
                spy={true}
                offset={-64}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}
            {isLoggedIn && (
              <>
                <span className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
                  Welcome, {username}
                </span>
                <button
                  onClick={() => {
                    onLogout();
                    setIsOpen(false);
                  }}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition duration-300 ease-in-out"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;