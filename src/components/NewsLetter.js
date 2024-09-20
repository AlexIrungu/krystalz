import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const NewsLetter = ({ isLoggedIn, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });

  useEffect(() => {
    if (isLoggedIn) {
      setIsOpen(true);
    }
  }, [isLoggedIn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Submitted data:', formData);
    handleClose();
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-purple-800">Subscribe to Our Newsletter</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <p className="mb-4 text-gray-600">
          Stay updated with the latest news on healing stones and exclusive offers!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact number"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500">
          You can also reach us at{' '}
          <a
            href="mailto:Lunakenya88@gmail.com"
            className="text-purple-600 hover:underline"
          >
            Lunakenya88@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};


// Wrapper component to handle authentication state
const NewsLetterWrapper = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    // Simulating a login process
    // Replace this with your actual authentication logic
    const checkLoginStatus = async () => {
      // Simulating an API call or checking local storage
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoggedIn(true);
      setShowNewsletter(true);
    };

    checkLoginStatus();
  }, []);

  return (
    <>
      {/* Your main app content */}
      <div>
        <h1>Welcome to our website!</h1>
        {/* Other components */}
      </div>

      {/* Newsletter popup */}
      <NewsLetter 
        isLoggedIn={isLoggedIn && showNewsletter} 
        onClose={() => setShowNewsletter(false)}
      />
    </>
  );
};

export default NewsLetterWrapper;