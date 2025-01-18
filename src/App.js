import { useState } from 'react';
import './App.css';
import { ThemeProvider, useTheme} from './context/ThemeContext'
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
import Cart from './components/Cart';

function AppContent() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showAstronomy, setShowAstronomy] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState(null);
  const [showDashboardPopup, setShowDashboardPopup] = useState(false);
  const [email, setEmail] = useState(null);

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
    if (!isLoggedIn) {
      setShowAuthModal(true);
      return;
    }
    setIsCheckout(true);
  };

  const handlePaymentSuccess = () => {
    alert('Payment Successful!');
    setCartItems([]);
    setIsCheckout(false);
  };

  const handleShowPopup = () => {
    setShowAstronomy(true);
    setIsPopup(true);
  };

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setEmail(user.email);
    setUsername(user.name || user.email.split('@')[0]);
    setShowDashboardPopup(true);
    setShowAuthModal(false);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername(null);
    setEmail(null);
  };

  const handleSignupSuccess = (user) => {
    setIsLoggedIn(true);
    setUsername(user.name || user.email);
    setShowDashboardPopup(true);
    setShowAuthModal(false);
  };

  const handleSwitchForm = () => {
    setShowLogin(!showLogin);
  };

  const handleCloseDashboardPopup = () => {
    setShowDashboardPopup(false);
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="relative z-10 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark transition-colors duration-200">
        <Navbar 
          isLoggedIn={isLoggedIn} 
          username={username} 
          email={email}
          onLogout={handleLogout}
          onShowAuth={() => setShowAuthModal(true)}
          onToggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
        />

        {/* Add Cart component here */}
<Cart 
  items={cartItems} 
  onCheckout={handleCheckout} 
/>
        
        {showAuthModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-primary-light dark:bg-secondary-dark rounded-lg p-8 w-full max-w-md">
              <button 
                onClick={() => setShowAuthModal(false)}
                className="float-right text-gray-500 hover:text-gray-700"
              >
                
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
            username={username} 
            email={email}
            onClose={handleCloseDashboardPopup} 
          />
        )}

        <main className="container mx-auto px-4 pb-16">
          <Home />
          {!isCheckout ? (
            <Shop onAddToCart={handleAddToCart} />
          ) : (
            <Checkout totalAmount={totalAmount} onPaymentSuccess={handlePaymentSuccess}  onClose={() => setIsCheckout(false)} />
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
      <AppContent />
    </ThemeProvider>
  );
}


export default App;