import { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider, useTheme} from './context/ThemeContext'
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Signup from './components/Signup';
import './css/theme.css'
import Shop from './components/Shop'
import FAQSection from './components/FAQ';
import DashboardPopup from './components/DashboardPopup';
import AstronomyComponent from './components/AstronomyComponent';
import AstronomyButtons from './components/AstronomyButtons';
import { X } from 'lucide-react';
import { AuthProvider } from './context/AuthContext';

function AppContent() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, loading, login, logout, signup, isAuthenticated } = useAuth();
  const [showAstronomy, setShowAstronomy] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showDashboardPopup, setShowDashboardPopup] = useState(false);
  const [showCart, setShowCart] = useState(true);
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  useEffect(() => {
    if (user) {
      setShowDashboardPopup(true);
    }
  }, [user]);

  const handleAddToCart = (crystal) => {
    const existingItem = cartItems.find(item => item.id === crystal.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === crystal.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...crystal, quantity: 1 }]);
    }
    setShowCart(true); // Show cart when item is added
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }
    setIsCheckout(true);
    setShowCart(false); // Hide cart when checkout is shown
  };

  const handleCloseCheckout = () => {
    setIsCheckout(false);
    setShowCart(true);
  };


  const handlePaymentSuccess = () => {
    setCartItems([]); // Clear cart
    setIsCheckout(false); // Close checkout
    setShowCart(true); // Show empty cart
    alert('Payment Successful!');
    
  };

  const handleShowPopup = () => {
    setShowAstronomy(true);
    setIsPopup(true);
  };

  const handleLoginSuccess = async (credentials) => {
    const result = await login(credentials.email, credentials.password);
    if (result.success) {
      setShowAuthModal(false);
      if (cartItems.length > 0) {
        setIsCheckout(true);
      }
    }
  };
  

  const handleSignupSuccess = async (userData) => {
    const result = await signup(userData.name, userData.email, userData.password);
    if (result.success) {
      setShowAuthModal(false);
    }
  };

  const handleSwitchForm = () => {
    setShowLogin(!showLogin);
  };

  const handleCloseDashboardPopup = () => {
    setShowDashboardPopup(false);
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      ).filter(item => item.quantity > 0)
    );
  };
  
  const handleRemoveItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="relative z-10 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark transition-colors duration-200">
        <Navbar 
           isLoggedIn={isAuthenticated}
           username={user?.name}
           email={user?.email}
           onLogout={logout}
           onShowAuth={() => setShowAuthModal(true)}
           onToggleTheme={toggleTheme}
           isDarkMode={isDarkMode}
           cartItems={cartItems}
           onCheckout={handleCheckout}
           showCart={showCart}
           isCheckout={isCheckout}
           showCartDropdown={showCartDropdown}
           setShowCartDropdown={setShowCartDropdown}
           onUpdateQuantity={(itemId, newQuantity) => {
            setCartItems(cartItems.map(item =>
              item.id === itemId 
                ? { ...item, quantity: newQuantity }
                : item
            ).filter(item => item.quantity > 0));
          }}
          onRemoveItem={(itemId) => {
            setCartItems(cartItems.filter(item => item.id !== itemId));
          }}
        />
          
        
       


        
        {showAuthModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-primary-light dark:bg-secondary-dark rounded-lg p-8 w-full max-w-md">
              <button 
                onClick={() => setShowAuthModal(false)}
                className="float-right text-gray-500 hover:text-gray-700"
              >
                 <X size={24} />
              </button>
              {showLogin ? (
                <Login 
                  onLoginSuccess={handleLoginSuccess} 
                  onSwitchToSignup={handleSwitchForm} 
                />
              ) : (
                <Signup 
                  onSignupSuccess={handleSignupSuccess} 
                  onSwitchToLogin={handleSwitchForm} 
                />
              )}
            </div>
          </div>
        )}

        {showDashboardPopup && (
          <DashboardPopup 
          username={user?.name}
          email={user?.email}
            onClose={handleCloseDashboardPopup} 
          />
        )}

        <main className="container mx-auto px-4 pb-16">
          <Home />
          {!isCheckout ? (
            <Shop onAddToCart={handleAddToCart} />
          ) : (
            <Checkout 
              totalAmount={cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
              onPaymentSuccess={handlePaymentSuccess}
              onClose={handleCloseCheckout}
            />
          )}

          <AstronomyButtons onShowPopup={handleShowPopup} />
          {showAstronomy && (
            <AstronomyComponent isPopup={isPopup} onClose={() => setShowAstronomy(false)} />
          )}
          <About />
          <Services />
          <Contact />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
      <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}


export default App;