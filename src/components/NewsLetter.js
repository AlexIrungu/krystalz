import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, UserCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const NewsLetter = () => {
  const { user, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    contact: ''
  });
  const [subscriptionStatus, setSubscriptionStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  useEffect(() => {
    // Open newsletter for authenticated users who haven't subscribed
    const hasSubscribed = localStorage.getItem('newsletterSubscribed');
    if (isAuthenticated && !hasSubscribed) {
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubscriptionStatus({ loading: true, success: false, error: null });

    try {
      // Simulated API call - replace with actual newsletter signup logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store subscription status
      localStorage.setItem('newsletterSubscribed', 'true');
      
      setSubscriptionStatus({
        loading: false, 
        success: true, 
        error: null
      });
      
      // Close after 2 seconds
      setTimeout(() => setIsOpen(false), 2000);
    } catch (error) {
      setSubscriptionStatus({
        loading: false,
        success: false,
        error: 'Subscription failed. Please try again.'
      });
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl max-w-md w-full relative transform transition-all duration-300 ease-in-out">
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <UserCircle 
            size={64} 
            className="mx-auto mb-4 text-purple-600 dark:text-purple-400"
          />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Stay Connected
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Subscribe to our newsletter for exclusive offers and updates!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <UserCircle 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              disabled={!!user?.name}
              className="w-full pl-10 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="relative">
            <Mail 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              disabled={!!user?.email}
              className="w-full pl-10 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="relative">
            <Phone 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full pl-10 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={subscriptionStatus.loading}
            className={`
              w-full py-3 rounded-md text-white font-semibold transition-colors duration-300
              ${subscriptionStatus.loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : subscriptionStatus.success 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-purple-600 hover:bg-purple-700'
              }
            `}
          >
            {subscriptionStatus.loading 
              ? 'Processing...' 
              : subscriptionStatus.success 
                ? 'Subscribed Successfully!' 
                : 'Subscribe Now'
            }
          </button>

          {subscriptionStatus.error && (
            <p className="text-red-500 text-sm mt-2 text-center">
              {subscriptionStatus.error}
            </p>
          )}
        </form>

        <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            We respect your privacy. Unsubscribe at any time.
          </p>
          <a 
            href="mailto:Lunakenya88@gmail.com" 
            className="text-purple-600 hover:underline dark:text-purple-400"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;