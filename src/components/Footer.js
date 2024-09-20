import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-scroll'
import NewsLetter from './NewsLetter';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white theme-dark">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between">
          <NewsLetter />

 {/* Quick Links */}
 <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2"><Link to="/" className="hover:text-white transition duration-300">Home</Link></li>
              <li className="mb-2"><Link to="shop" className="hover:text-white transition duration-300">Shop</Link></li>
              <li className="mb-2"><Link to="about" className="hover:text-white transition duration-300">About Us</Link></li>
              <li className="mb-2"><Link to="contact" className="hover:text-white transition duration-300">Contact</Link></li>
              <li className="mb-2"><Link to="faq" className="hover:text-white transition duration-300">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-400 mb-2">123 Crystal Lane</p>
            <p className="text-gray-400 mb-2">Gemstone City, GS 12345</p>
            <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@krystalz.com</p>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/" target='_blank' className="text-gray-400 hover:text-white transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com/" target="_blank" className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/_luna.kenya/" target="_blank" className="text-gray-400 hover:text-white transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://pinterest.com/" target='_blank' className="text-gray-400 hover:text-white transition duration-300">
                <FaPinterest size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Krystalz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;