import React from 'react';
import { motion } from 'framer-motion';

const Cart = ({ items, onCheckout, isVisible = true }) => {
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isVisible) return null;

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Your Cart</h3>
      
      {items.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Qty: {item.quantity}</p>
                </div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  KSH {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-gray-800 dark:text-gray-200">Total:</span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                KSH {totalAmount.toFixed(2)}
              </span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCheckout}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-md font-medium shadow-md transition-all duration-300"
            >
              Checkout
            </motion.button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;