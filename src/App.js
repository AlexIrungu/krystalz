
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <Services />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
