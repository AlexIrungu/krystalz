import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Cart from './Cart';
import Checkout from './Checkout';

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);

  const crystalProducts = [
    {
      id: 1,
      name: 'Rose Quartz Necklace',
      image: '/api/placeholder/300/200',
      description: 'A beautiful rose quartz necklace, known for its calming and loving energy.',
      price: 29.99,
    },
    {
      id: 2,
      name: 'Amethyst Bracelet',
      image: '/api/placeholder/300/200',
      description: 'An amethyst bracelet, said to promote peace, balance, and spiritual awareness.',
      price: 19.99,
    },
    {
      id: 3,
      name: 'Citrine Earrings',
      image: '/api/placeholder/300/200',
      description: 'Citrine earrings, believed to bring joy, creativity, and personal power.',
      price: 24.99,
    },
    {
      id: 4,
      name: 'Obsidian Pendant',
      image: '/api/placeholder/300/200',
      description: 'An obsidian pendant, known for its grounding and protective properties.',
      price: 14.99,
    },
  ];

  const handleAddToCart = (crystal) => {
    const existingItem = cartItems.find(item => item.id === crystal.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === crystal.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...crystal, quantity: 1 }]);
    }
  };

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const handlePaymentSuccess = () => {
    alert('Payment Successful!');
    setCartItems([]);
    setIsCheckout(false);
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div id="shop" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-indigo-800 mb-8 text-center">
          Crystal Shop
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {crystalProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-indigo-600">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center"
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!isCheckout ? (
          <Cart items={cartItems} onCheckout={handleCheckout} />
        ) : (
          <Checkout totalAmount={totalAmount} onPaymentSuccess={handlePaymentSuccess} />
        )}
      </div>
    </div>
  );
};

export default Shop;