import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
import ExploreCrystals from './components/ExploreCrystals';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Signup from './components/Signup';
import './css/theme.css'
import Shop from './components/Shop'
import FAQ from './components/FAQ';
import DashboardPopup from './components/DashboardPopup';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [showDashboardPopup, setShowDashboardPopup] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

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

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setUsername(user.name || user.email);
    setShowDashboardPopup(true);
  };

  const handleSignupSuccess = (user) => {
    setIsLoggedIn(true);
    setUsername(user.name || user.email);
    setShowDashboardPopup(true);
  };

  const handleSwitchForm = () => {
    setShowLogin(!showLogin);
  };

  const handleCloseDashboardPopup = () => {
    setShowDashboardPopup(false);
    setShowMainContent(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setShowMainContent(false);
  };

  if (!isLoggedIn && !showMainContent) {
    return (
      <div className="theme-light">
        {showLogin ? (
          <Login onLoginSuccess={handleLoginSuccess} onSwitchToSignup={handleSwitchForm} />
        ) : (
          <Signup onSignupSuccess={handleSignupSuccess} onSwitchToLogin={handleSwitchForm} />
        )}
      </div>
    );
  }

  return (
    <div className="theme-light">
      {showDashboardPopup && (
        <DashboardPopup username={username} onClose={handleCloseDashboardPopup} />
      )}
      
      <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />
      <Home />
      {!isCheckout ? (
        <>
          <ExploreCrystals onAddToCart={handleAddToCart} />
          <Cart items={cartItems} onCheckout={handleCheckout} />
        </>
      ) : (
        <Checkout totalAmount={totalAmount} onPaymentSuccess={handlePaymentSuccess} />
      )}
      <About />
      <Services />
      <Shop />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;