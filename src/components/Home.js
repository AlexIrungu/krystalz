import React from 'react';
import { Link } from 'react-scroll';
import moon from './images/d6069b77-b862-43ef-b6f6-04183622008e.jpg';
import moonpha from './Luna/moonpha.mp4'

const Home = () => {
  return (
    <div id='home' className="min-h-screen overflow-x-hidden">
      {/* Hero Section with Full Background */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${moon})`,
          backgroundAttachment: 'fixed' // This creates a parallax effect
        }}
      >
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
          <div className="h-full flex flex-col justify-center items-center px-4 md:px-8">
            {/* Animated Welcome Text */}
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-purple-200 animate-fadeIn">
              Welcome to Our Krystal Sanctuary
            </h2>
            
            {/* Main Heading with Glowing Effect */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-center 
                         bg-clip-text text-transparent bg-gradient-to-r 
                         from-purple-400 via-pink-300 to-purple-400
                         animate-gradient-x">
              Discover the Power of Krystals
            </h1>
            
            {/* Descriptive Text */}
            <p className="text-gray-200 max-w-2xl text-center mb-8 text-lg md:text-xl
                         leading-relaxed animate-fadeIn">
              Embark on a journey of spiritual awakening and healing through our carefully 
              curated collection of powerful krystals. Each piece carries ancient wisdom 
              and transformative energy.
            </p>
            
            {/* CTA Button with Hover Effects */}
            <Link
              to="shop"
              smooth={true}
              duration={500}
              className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 
                         text-white font-bold py-4 px-10 rounded-full transform 
                         hover:scale-105 transition-all duration-300 cursor-pointer
                         shadow-lg hover:shadow-purple-500/50"
            >
              <span className="relative z-10">Explore Our Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 
                            transform scale-x-0 group-hover:scale-x-100 
                            transition-transform duration-500 origin-left"></div>
            </Link>
          </div>
        </div>
      </section>

     {/* Information Cards with Enhanced Dark Mode Styling */}
<div className="flex flex-col md:flex-row gap-8 px-4 md:px-8 py-16 
                bg-gradient-to-b from-purple-50 to-primary-light 
                dark:from-purple-900/10 dark:to-primary-dark
                transition-colors duration-200">
  <section className="flex-1 p-8 rounded-2xl 
                    bg-primary-light dark:bg-secondary-dark
                    shadow-xl hover:shadow-2xl dark:shadow-purple-900/20
                    transform hover:-translate-y-1 transition-all duration-300
                    border border-purple-100 dark:border-purple-900/20">
    <h2 className="text-3xl font-bold mb-6 text-purple-800 dark:text-purple-300">
      How to Select Your Crystal
    </h2>
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
      First things first: Identify what you feel you're missing before looking into what the stones can provide you. 
      This will help you determine what's happening within yourself before depending on outside sources. From there, 
      just let your intuition choose what's best for you. Your inner wisdom will guide you to the perfect crystal companion.
    </p>
  </section>

  <section className="flex-1 p-8 rounded-2xl 
                    bg-primary-light dark:bg-secondary-dark
                    shadow-xl hover:shadow-2xl dark:shadow-purple-900/20
                    transform hover:-translate-y-1 transition-all duration-300
                    border border-purple-100 dark:border-purple-900/20">
    <h2 className="text-3xl font-bold mb-6 text-purple-800 dark:text-purple-300">
      How to Care for Your Crystal
    </h2>
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
      When you first bring your crystal home, cleanse away any lingering energies it may have picked up. 
      Choose from these sacred cleansing methods:
    </p>
    <ul className="space-y-3 text-lg">
      {[
        'Hold it under cold, running water',
        'Immerse it in sea salt',
        'Place it in sunlight or moonlight',
        'Smudge your crystal with sage or other herbs'
      ].map((item, index) => (
        <li key={index} 
            className="flex items-center space-x-2 
                      text-gray-700 dark:text-gray-300 
                      hover:text-purple-600 dark:hover:text-purple-400 
                      transition-colors duration-200">
          <span className="text-purple-500 dark:text-purple-400">✧</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </section>
</div>
    </div>
  );
};

export default Home;