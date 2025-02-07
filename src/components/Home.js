import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import aroma from "./images/Aromatherapy.png";
import crystals from "./images/Crystals.png";
import Other from './images/Other products.png';
import reiki from './images/Reiki.png';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('charging');

  const sectionContent = {
    healing: {
      title: "Crystal Healing",
      description: "Embark on a healing journey with our carefully selected crystals. Each stone carries unique energetic properties to support your physical, emotional, and spiritual well-being.",
      image: aroma
    },
    cleansing: {
      title: "Crystal Cleansing",
      description: "Purify and reset the energy of your crystals. Learn essential techniques to maintain the powerful vibrations of your sacred stones.",
      image: crystals
    },
    charging: {
      title: "Crystal Charging",
      description: "In the same way that you need a sense of direction to be the best you can be, so do your crystals. Give them purpose and amplify their natural energies.",
      image: Other
    },
    reiki: {
      title: "Reiki Healing",
      description: "Experience the ancient healing art of Reiki. Our practitioners channel universal life force energy to promote relaxation, balance, and well-being.",
      image: reiki
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden p-0 m-0">
      {/* Background Image */}
      <img
        src={sectionContent[activeSection].image}
        alt={`${activeSection} background`}
        className="absolute top-0 left-0 w-full h-full object-cover p-0 m-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center p-0 m-0">
        <div
          className={`w-full flex flex-col items-center justify-center space-y-6 text-center px-4
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } 
            transition-all duration-1000 ease-out`}
        >
          {/* Welcome Text */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-200">
            Welcome to Our Krystal Sanctuary
          </h2>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            {sectionContent[activeSection].title}
          </h1>

          {/* Description */}
          <p className="text-gray-200 max-w-2xl text-lg md:text-xl leading-relaxed">
            {sectionContent[activeSection].description}
          </p>

          {/* CTA Button */}
          <Link
            to="shop"
            smooth={true}
            duration={500}
            className="group relative px-8 py-3 overflow-hidden rounded-full 
              bg-white/20 text-white font-semibold
              transform hover:scale-105 transition-all duration-300
              shadow-lg hover:shadow-gray-500/50"
          >
            <span className="relative z-10">Explore Our Collection</span>
            <div
              className="absolute inset-0 bg-white/30 
              transform scale-x-0 group-hover:scale-x-100 
              transition-transform duration-500 origin-left"
            />
          </Link>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center space-x-4">
        {Object.keys(sectionContent).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-6 py-2 rounded-full text-white transition-all duration-300 
              ${
                activeSection === section 
                  ? 'bg-white/30' 
                  : 'bg-transparent hover:bg-white/20 border border-white/20'
              }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;