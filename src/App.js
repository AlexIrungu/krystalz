
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
import ExploreCrystals from './components/ExploreCrystals';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <ExploreCrystals />
     <About />
     <Services />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
