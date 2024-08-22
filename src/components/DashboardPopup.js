import React from 'react';
import { motion } from 'framer-motion';

const DashboardPopup = ({ username, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Welcome, {username}!</h2>
        <p>You've successfully logged in.</p>
        <button 
          onClick={onClose} 
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Go to Home
        </button>
      </div>
    </motion.div>
  );
};

export default DashboardPopup;