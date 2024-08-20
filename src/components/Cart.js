import React, { useState } from 'react';

const Cart = ({ items, onCheckout }) => {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
        <button
          onClick={onCheckout}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
