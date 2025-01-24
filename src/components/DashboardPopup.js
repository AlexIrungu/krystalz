import React from 'react';
import { motion } from 'framer-motion';

const DashboardPopup = ({ username, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-80 flex items-center justify-center z-50"
    >
      <div className="bg-white dark:bg-dim-dark rounded-lg p-8 max-w-md w-full shadow-lg dark:shadow-none">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Welcome, {username}!</h2>
        <p className="text-gray-700 dark:text-gray-400">You've successfully logged in.</p>
        <button 
          onClick={onClose} 
          className="mt-4 bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Go to Home
        </button>
      </div>
    </motion.div>
  );
};

export default DashboardPopup;