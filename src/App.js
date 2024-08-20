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
// import Login from './components/Login';
// import Signup from './components/Signup';
import './css/theme.css'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);

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
    // Handle post-payment actions like clearing the cart
    setCartItems([]);
    setIsCheckout(false);
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleSignupSuccess = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <div>Welcome! You are logged in.</div>;
  }


  return (
    <div className="theme-light">
      {/* {showLogin ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Signup onSignupSuccess={handleSignupSuccess} />
      )}
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Need to sign up?' : 'Already have an account?'}
      </button> */}
       
     <Navbar />
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
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
