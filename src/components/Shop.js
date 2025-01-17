import React, { useState } from 'react';
import { ShoppingCart, ChevronRight, X, Share } from 'lucide-react';
import Cart from './Cart';
import Checkout from './Checkout';
import grounded from './Luna/Groundedonlineworkshop.jpeg'
import reiki from './Luna/ReikiEnergyHealingSession.jpeg'
import Eucalyptus from './Luna/EucalyptusEssentialoil.jpeg'
import Palo from './Luna/Palosanto.jpeg'
import white from './Luna/WhiteSageBundle.jpeg'
import jasper from './Luna/Redjasperbracelet.jpeg'
import tuqouise from './Luna/TurqoiseBracelet.jpeg'
import clearq from './Luna/ChakraBraceletClearQuartz.jpeg'
import co from './Luna/ChakraBraceletObsidian.jpeg'
import guide from './Luna/LunaGuideBalancingChakras.jpeg'
import hametite from './Luna/HametiteBracelet.jpeg'
import tiger from './Luna/TigersEye.jpeg'
import rose from './Luna/RoseQuartz.jpeg'
import cq from './Luna/ClearQuartz.jpeg'
import obsidian from './Luna/ObsidianBracelet.jpeg'
import aventurine from './Luna/AventurineBracelet.jpeg'
import amethyst from './Luna/Amethyst.jpeg'

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X size={24} />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-xl font-semibold mb-4">
              KSH {product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="flex gap-4 mt-auto">
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="flex-1 bg-black text-white py-3 rounded hover:bg-gray-800"
              >
                Add To Bag
              </button>
              <button className="flex items-center justify-center p-3 border border-gray-300 rounded hover:bg-gray-50">
                <Share size={20} />
              </button>
            </div>
            <button
              onClick={onClose}
              className="mt-4 text-center text-gray-600 hover:text-gray-800"
            >
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['All', 'Chakras', 'Crystals', 'Essential Oils', 'Reiki', 'Smudging And Cleansing', 'Spirituality', 'Workbooks', 'Worksheets', 'Workshop'];

  const crystalProducts = [
    {
      id: 1,
      name: 'GROUNDED ONLINE WORKSHOP',
      image: grounded,
      description: 'Join our online Workshop and learn how to use breathwork and meditation to keep you grounded in daily life.',
      price: 1000.00,
      category: 'Workshop',
      onSale: true,
    },
    {
      id: 2,
      name: 'REIKI ENERGY HEALING SESSION',
      image: reiki,
      description: 'Receive a one hour reiki session from a trained practicioner. Reiki is a non-invasive energy healing modality that helps you to balance your energy body. Each session entails a Reiki healer channelling Reiki energy into your body and allowing its intelligence to help balance or heal any imbalances in your body. Please note that Reiki is not a replacement for medical healing and procedures, but a complementary treatment. We look forward to serving you!',
      price: 4000.00,
      category: 'Reiki',
    },
    {
      id: 3,
      name: 'EUCALYPTUS ESSENTIAL OIL',
      image: Eucalyptus,
      description: 'Eucalyptus essential oil is often used in Aromatherapy to produce a calming effect, and is quite popular in spas, saunas and steam rooms as it helps to relax the mind and body.',
      price: 1000.00,
      category: 'Essential Oils',
      onSale: true,
    },
    {
      id: 4,
      name: 'PALO SANTO',
      image: Palo,
      description: 'Palo Santo smoke is used to help clear negative energy or an accumulation of energy in homes and in your or a loved one;s aura.',
      price: 350.00,
      category: 'Smudging And Cleansing',
    },
    {
      id: 5,
      name: 'WHITE SAGE BUNDLE',
      image: white,
      description: 'Cleanse your home, office and aura using White Sage whose smoke is a highly revered energy cleanser.',
      price: 950.00,
      category: 'Smudging And Cleansing',
    },
    {
      id: 6,
      name: 'RED JASPER BRACELET',
      image: jasper,
      description: 'Red Jasper is associated with the Root Chakra. It can help you with; Feeling grounded, Energetic protection, Enhancing stability, Feelings of safety, Being grounded in the human experience, Feelings of abundance',
      price: 1600.00,
      category: 'Crystals',
    },
    {
      id: 7,
      name: 'TURQUOISE BRACELET',
      image: tuqouise,
      description: 'Turquoise is a beautiful stone associated with the Throat Chakra. It is a great healing and protective stone. It is also used to help you discern when to follow the crowd and when to march to the beat of your own drum. Great, gentle stone with a big impact.',
      price: 1100.00,
      category: 'Crystals',
    },
    {
      id: 8,
      name: 'Chakra Bracelet with Clear Quartz',
      image: clearq,
      description: 'This chakra bracelet is created to help balance your chakras while being connected to your spiritual self and intuition through the Clear Quartz. The bracelet has a crystal for each chakra, and is complimented by Clear Quartz, a crystal that;s great for intuition and connecting to our spiritual selves. It also acts as an amplifier of energy. The crystals for each chakra are; Clear Quartz for the Crown chakra, Amethyst for the Third Eye chakra, Lapis Lazuli for the Throat chakra, Aventurine for the Heart chakra, Citrine for the Solar Plexus chakra, Carnelian for the Sacral chakra and Red Jasper for the Root chakra. All authentic crystals ❤️ Buy this bracelet as your daily companion or for occasional wear.',
      price: 1800.00,
      category: 'Crystals',
    },
    {
      id: 9,
      name: 'Chakra Bracelet with Obsidian',
      image: co,
      description: 'This chakra bracelet is created to help balance your chakras while remaining grounded and protected using the black obsidian. The bracelet has a crystal for each chakra, and is complimented by Obsidian, an amazing grounding crystal. The crystals for each chakra are; Clear Quartz for the Crown chakra, Amethyst for the Third Eye chakra, Lapis Lazuli for the Throat chakra, Aventurine for the Heart chakra, Citrine for the Solar Plexus chakra, Carnelian for the Sacral chakra and Red Jasper for the Root chakra. All authentic crystals ❤️ Buy this bracelet as your daily companion or for occasional wear.',
      price: 2500.00,
      category: 'Crystals',
    },
    {
      id: 10,
      name: 'Luna;s Guide to Balancing Your Chakras',
      image: guide,
      description: 'This beginner-friendly guide introduces you to the seven chakras of the human body. It also helps you to check if any chakra is out of balance, and how you can bring it back into balance using different tools and techniques.',
      price: 300.00,
      category: 'Chakras',
    },
    {
      id: 11,
      name: 'HAMETITE BRACELET',
      image: hametite,
      description: 'Hametite is a grounding and energy balancing stone with an other-worldy feel. It is related to the root and solar plexus chakras.',
      price: 1700.00,
      category: 'Crystals',
    },
    {
      id: 12,
      name: 'Tigers Eye Bracelet Medium',
      image: tiger,
      description: 'Tigers Eye is related to the solar plexus chakra. It is the stone of confidence, self esteem and self drive. Tiger;s eye also helps with increasing and balancing masculine energy.',
      price: 1500.00,
      category: 'Crystals',
    },
    {
      id: 13,
      name: 'Rose Quartz Bracelet - Medium',
      image: rose,
      description: 'Rose Quartz has been known to be a great heart healer and soother. It has also been known to help attract love. This gentle crystal is related to the heart chakra and is great for self love and, romantic love.',
      price: 1500.00,
      category: 'Crystals',
    },
    {
      id: 14,
      name: 'Clear Quartz Bracelet - Small',
      image: cq,
      description: 'Clear Quartz is a good crystal for intuition and spiritual connection. It also helps to amplify the energy of other crystals and would be great to have in a stack of other bracelets. Or by itself. Clear Quartz is related to the crown chakra.',
      price: 1500.00,
      category: 'Crystals',
    },
    {
      id: 15,
      name: 'OBSIDIAN BRACELET',
      image: obsidian,
      description: 'Obsidian is a great energetic protection stone. It is also great for grounding and has a nice, strong, earthy vibe.',
      price: 2500.00,
      category: 'Crystals',
    },
    {
      id: 16,
      name: 'Aventurine Bracelet - Medium',
      image: aventurine,
      description: 'Aventurine is a crystal of emotional support and abundance. It is related to the heart chakra and makes a great heart healer.',
      price: 1500.00,
      category: 'Crystals',
    },
    {
      id: 17,
      name: 'AMETHYST BRACELET',
      image: amethyst,
      description: 'Amethyst is a crystal of intuition, peacefulness, protection, grief and more. It is related to the third eye chakra.',
      price: 2000.00,
      category: 'Crystals',
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


  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div id="shop" className="py-12">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section with Shop title and sort */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold tracking-wide">SHOP</h1>
          <div className="flex items-center">
            <select
              onChange={handleSortChange}
              className="border rounded-md px-4 py-2 bg-white text-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <option value="default">SORT BY</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
            <ChevronRight className="ml-1" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto space-x-4 pb-6">
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleProductClick(product)}
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
                <p className="text-xl font-bold text-gray-800">
                  KSH {product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={closeProductModal}
          onAddToCart={handleAddToCart}
        />

        {/* Cart and Checkout */}
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