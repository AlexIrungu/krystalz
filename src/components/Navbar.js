import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun, ShoppingCart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import log from './Luna/logoo.jpeg';
import AnimatedCartButton from './Cart';

// CartButton Component - Moved outside of main component
// const CartButton = ({ totalItems, showCartDropdown, setShowCartDropdown, isCheckout, cartItems, onCheckout }) => (
//   <motion.div className="relative">
//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       onClick={() => setShowCartDropdown(!showCartDropdown)}
//       className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
//       aria-label="Shopping cart"
//     >
//       <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//       {totalItems > 0 && (
//         <motion.span
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs"
//         >
//           {totalItems}
//         </motion.span>
//       )}
//     </motion.button>

//     <AnimatePresence>
//       {showCartDropdown && !isCheckout && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50"
//         >
//           <Cart 
//             items={cartItems}
//             onCheckout={onCheckout}
//             isVisible={showCartDropdown}
//           />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   </motion.div>
// );

const Navbar = ({ isLoggedIn, username, onLogout, onShowAuth, cartItems = [],
  onCheckout, isCheckout, showCartDropdown, setShowCartDropdown, onUpdateQuantity, onRemoveItem, showCart   }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // const [showCartDropdown, setShowCartDropdown] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  // const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      
      setVisible(currentScrollPos < 10 || !isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Shop', to: 'shop' },
    { name: 'Contact', to: 'contact' },
  ];

 

  const AuthButtons = () => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onShowAuth}
      className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out shadow-md"
    >
      Sign In
    </motion.button>
  );

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-lg transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* logo section */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-3">
              <div className="flex flex-col items-start">
                <div className="relative">
                  <motion.p
                    animate={{ 
                      scale: [1, 1.02, 1],
                      rotate: [0, 1, -1, 0] 
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                    className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 tracking-wider"
                  >
                    LUNA
                  </motion.p>
                  <p className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 tracking-wider absolute top-0 left-0 transform translate-x-0.5 translate-y-0.5 opacity-50">
                    LUNA
                  </p>
                </div>
              </div>
              <motion.img 
                className="h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg"
                src={log} 
                alt="Logo"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                style={{ filter: 'brightness(1.2) contrast(1.1)' }}
              />
            </div>
          </motion.div>
                    {/* desktop navigation */}
          <div className="hidden md:block flex-grow">
            <div className="flex items-center justify-center space-x-6">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out group"
                  activeClass="text-purple-600 dark:text-purple-400"
                  spy={true}
                  offset={-80}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 dark:bg-purple-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </ScrollLink>
              ))}
            </div>
          </div>

              {/* desktop right section */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {/* theme toogle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </motion.button>

                {/* Cart Button */}
               {/* Cart Button */}
               <AnimatedCartButton 
  cartItems={cartItems || []}
  showCartDropdown={showCartDropdown}
  setShowCartDropdown={setShowCartDropdown}
  onCheckout={onCheckout}
  onUpdateQuantity={onUpdateQuantity}
  onRemoveItem={onRemoveItem}
  isCheckout={isCheckout}
  showCart={showCart}
/>

                {/* Auth section */}
              {isLoggedIn && username ? (
                <motion.div 
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <span className="text-gray-700 dark:text-gray-300 px-3 py-2 rounded-md text-sm font-medium bg-purple-100 dark:bg-purple-900">
                    Welcome, {username}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onLogout}
                    className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out shadow-md"
                  >
                    Logout
                  </motion.button>
                </motion.div>
              ) : (
                <AuthButtons />
              )}
            </div>
          </div>

          
          {/* mobile navigation */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ease-in-out"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* mobile menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/50 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-all duration-300 ease-in-out"
                  activeClass="text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/50"
                  spy={true}
                  offset={-64}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              ))}

               {/* Cart button for mobile */}
               <button
                onClick={() => {
                  setShowCartDropdown(!showCartDropdown);
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/50 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Cart ({totalItems})</span>
              </button>

              {/* mobile theme toggle */}
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/50 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-5 h-5" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
                {/* mobile auth section */}
              {isLoggedIn && username ? (
                <>
                  <span className="text-gray-700 dark:text-gray-300 block px-3 py-2 rounded-md text-base font-medium bg-purple-50 dark:bg-purple-900/50">
                    Welcome, {username}
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      onLogout();
                      setIsOpen(false);
                    }}
                    className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-all duration-300 ease-in-out"
                  >
                    Logout
                  </motion.button>
                </>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onShowAuth();
                    setIsOpen(false);
                  }}
                  className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-all duration-300 ease-in-out"
                >
                  Sign In
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;