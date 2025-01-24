import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import NewsLetter from './NewsLetter';

const Footer = () => {
  const { isDarkMode } = useTheme();
  
  const socialLinks = [
    { icon: FaFacebook, url: 'https://facebook.com/', label: 'Facebook' },
    { icon: FaTwitter, url: 'https://twitter.com/', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://www.instagram.com/_luna.kenya/', label: 'Instagram' },
    { icon: FaPinterest, url: 'https://pinterest.com/', label: 'Pinterest' }
  ];

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Shop', to: 'shop' },
    { label: 'About Us', to: 'about' },
    { label: 'Contact', to: 'contact' },
    { label: 'FAQ', to: 'faq' }
  ];

  return (
    <footer className={`
      ${isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300' 
        : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800'
      } py-12 relative`}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Newsletter Signup */}
          <div className="md:col-span-1">
            <h3 className={`
              text-xl font-bold mb-4 
              ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}
            `}>
              Stay Connected
            </h3>
            <NewsLetter />
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className={`
              text-xl font-bold mb-4 
              ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}
            `}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link 
                    to={to} 
                    smooth={true} 
                    duration={500}
                    className={`
                      ${isDarkMode 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-black'}
                      hover:pl-2 transition-all duration-300 cursor-pointer
                    `}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className={`
              text-xl font-bold mb-4 
              ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}
            `}>
              Contact Us
            </h3>
            <div className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <div className="flex items-center space-x-3">
                <FaPhone className={isDarkMode ? 'text-purple-400' : 'text-purple-600'} />
                <span>+254 702064459</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className={isDarkMode ? 'text-purple-400' : 'text-purple-600'} />
                <a 
                  href="mailto:Lunakenya88@gmail.com" 
                  className={`
                    ${isDarkMode 
                      ? 'hover:text-white text-gray-300' 
                      : 'hover:text-black text-gray-700'}
                    transition duration-300
                  `}
                >
                  Lunakenya88@gmail.com
                </a>
              </div>
              <p className="mt-2">Nairobi, Kenya</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1">
            <h3 className={`
              text-xl font-bold mb-4 
              ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}
            `}>
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a 
                  key={label}
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`
                    ${isDarkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-black'}
                    hover:scale-110 transition-all duration-300
                  `}
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`
          border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}
          mt-8 pt-6 text-center
        `}>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} Krystalz. All rights reserved.
          </p>
        </div>
      </div>

      {/* Subtle Background Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className={`
          absolute top-0 left-0 w-full h-full 
          ${isDarkMode 
            ? 'bg-gradient-to-br from-purple-900 to-pink-900' 
            : 'bg-gradient-to-br from-purple-200 to-pink-200'}
          mix-blend-overlay
        `}></div>
      </div>
    </footer>
  );
};

export default Footer;