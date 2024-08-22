import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UserDashboard = ({ email, onLogout }) => {
  const [username, setUsername] = useState('User');

  useEffect(() => {
    if (email) {
      // Extract username from email
      const extractedUsername = email.split('@')[0];
      setUsername(extractedUsername);
    }
  }, [email]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="user-dashboard bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex flex-col items-center justify-center p-6"
    >
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full"
      >
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-6 text-gray-800 text-center"
        >
          Welcome, {username}!
        </motion.h2>
        
        <div className="space-y-4">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-100 p-4 rounded-lg"
          >
            <h3 className="font-semibold text-lg mb-2">Your Stats</h3>
            <p>Crystals collected: 5</p>
            <p>Healing sessions: 3</p>
          </motion.div>
          
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-100 p-4 rounded-lg"
          >
            <h3 className="font-semibold text-lg mb-2">Upcoming Events</h3>
            <p>Crystal Meditation: Tomorrow, 3 PM</p>
            <p>New Moon Ritual: Next Week</p>
          </motion.div>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onLogout}
          className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Logout
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default UserDashboard;