import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Cart = ({ items = [], onCheckout, isVisible = true, onUpdateQuantity, onRemoveItem }) => {
  if (!isVisible) return null;
  
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
      
      {items.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div className="flex-grow">
                  <p className="font-medium">{item.name}</p>
                  <div className="flex items-center mt-1">
                    <button 
                      onClick={() => onUpdateQuantity?.(item.id, Math.max(0, item.quantity - 1))}
                      className="p-1 text-gray-500 hover:text-gray-700"
                    >
                      -
                    </button>
                    <span className="mx-2 text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity?.(item.id, item.quantity + 1)}
                      className="p-1 text-gray-500 hover:text-gray-700"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => onRemoveItem?.(item.id)}
                      className="ml-4 text-sm text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <span className="font-medium ml-4">
                  KSH {(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">
                KSH {totalAmount.toFixed(2)}
              </span>
            </div>
            
            <button
              onClick={() => onCheckout?.()}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Checkout ({items.length} items)
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const AnimatedCartButton = ({ 
  cartItems = [], 
  showCartDropdown = false, 
  setShowCartDropdown, 
  isCheckout = false, 
  onCheckout,
  onUpdateQuantity,
  onRemoveItem,
  showCart = true
}) => {
  const totalItems = cartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  if (!showCart) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setShowCartDropdown?.(!showCartDropdown)}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
        aria-label="Shopping cart"
      >
        <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {totalItems}
          </span>
        )}
      </button>

      {showCartDropdown && !isCheckout && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50">
          <Cart 
            items={cartItems}
            onCheckout={onCheckout}
            isVisible={showCartDropdown}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
          />
        </div>
      )}
    </div>
  );
};

export default AnimatedCartButton;