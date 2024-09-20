import React, { useState } from 'react';
import { ShoppingCart, ChevronRight } from 'lucide-react';
import Cart from './Cart';
import Checkout from './Checkout';

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const categories = ['All', 'Chakras', 'Crystals', 'Essential Oils', 'Reiki', 'Smudging And Cleansing', 'Spirituality', 'Workbooks', 'Worksheets'];

  const crystalProducts = [
    {
      id: 1,
      name: 'Rose Quartz Necklace',
      image: '/api/placeholder/300/200',
      description: 'A beautiful rose quartz necklace, known for its calming and loving energy.',
      price: 29.99,
      category: 'Crystals',
      onSale: true,
    },
    {
      id: 2,
      name: 'Amethyst Bracelet',
      image: '/api/placeholder/300/200',
      description: 'An amethyst bracelet, said to promote peace, balance, and spiritual awareness.',
      price: 19.99,
      category: 'Crystals',
    },
    {
      id: 3,
      name: 'Lavender Essential Oil',
      image: '/api/placeholder/300/200',
      description: 'Pure lavender essential oil for relaxation and aromatherapy.',
      price: 15.99,
      category: 'Essential Oils',
      onSale: true,
    },
    {
      id: 4,
      name: 'Chakra Balancing Guide',
      image: '/api/placeholder/300/200',
      description: 'A comprehensive workbook for understanding and balancing your chakras.',
      price: 24.99,
      category: 'Workbooks',
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

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const filteredProducts = activeCategory === 'All' 
    ? crystalProducts 
    : crystalProducts.filter(product => product.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low-high') return a.price - b.price;
    if (sortBy === 'price-high-low') return b.price - a.price;
    return 0;
  });

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div id="shop" className="py-12">
      <h1 className='text-white'>SHOP</h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full ${
                  activeCategory === category
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center">
            <select
              onChange={handleSortChange}
              className="border rounded-md px-2 py-1"
            >
              <option value="default">SORT BY</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
            <ChevronRight className="ml-1" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.onSale && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    On sale
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-gray-800">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center"
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