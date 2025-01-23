import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import moon from './Luna/5f6181f1-41a4-4afd-9852-3d10ae65fac3.jpeg'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="home" className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen w-full relative">
        {/* Using a placeholder image for the background */}
        <img 
          src={moon}
          alt="Moon background" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex items-center justify-center">
          <div className={`w-full flex flex-col items-center justify-center space-y-6 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} 
            transition-all duration-1000 ease-out`}>
            
            {/* Welcome Text */}
            <h2 className="text-2xl md:text-4xl font-semibold text-purple-200 animate-pulse">
              Welcome to Our Krystal Sanctuary
            </h2>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center 
              bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400
              animate-gradient-x">
              DISCOVER THE POWER OF KRYSTALS
            </h1>
            
            {/* Description */}
            <p className="text-gray-200 max-w-2xl text-center text-lg md:text-xl leading-relaxed px-4">
              Embark on a journey of spiritual awakening and healing through our carefully 
              curated collection of powerful krystals. Each piece carries ancient wisdom 
              and transformative energy.
            </p>
            
            {/* CTA Button */}
            <Link
              to="shop"
              smooth={true}
              duration={500}
              className="group relative px-8 py-3 overflow-hidden rounded-full 
                bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold
                transform hover:scale-105 transition-all duration-300
                shadow-lg hover:shadow-purple-500/50"
            >
              <span className="relative z-10">Explore Our Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 
                transform scale-x-0 group-hover:scale-x-100 
                transition-transform duration-500 origin-left" />
            </Link>
          </div>
        </div>
      </section>

      {/* Information Cards */}
      <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 py-16 
        bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/10 dark:to-gray-900">
        
        {/* Selection Card */}
        <section className="p-8 rounded-2xl bg-white dark:bg-gray-800 
          shadow-xl hover:shadow-2xl transition-all duration-300
          border border-purple-100 dark:border-purple-800
          transform hover:-translate-y-1">
          <h2 className="text-3xl font-bold mb-6 text-purple-800 dark:text-purple-300">
            How to Select Your Crystal
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            First things first: Identify what you feel you're missing before looking into what 
            the stones can provide you. This will help you determine what's happening within 
            yourself before depending on outside sources. From there, just let your intuition 
            choose what's best for you. Your inner wisdom will guide you to the perfect crystal companion.
          </p>
        </section>

        {/* Care Card */}
        <section className="p-8 rounded-2xl bg-white dark:bg-gray-800 
          shadow-xl hover:shadow-2xl transition-all duration-300
          border border-purple-100 dark:border-purple-800
          transform hover:-translate-y-1">
          <h2 className="text-3xl font-bold mb-6 text-purple-800 dark:text-purple-300">
            How to Care for Your Crystal
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            When you first bring your crystal home, cleanse away any lingering energies it may have picked up. 
            Choose from these sacred cleansing methods:
          </p>
          <ul className="space-y-3">
            {['Hold it under cold, running water', 
              'Immerse it in sea salt',
              'Place it in sunlight or moonlight', 
              'Smudge your crystal with sage or other herbs'
            ].map((method, index) => (
              <li key={index} className="flex items-center space-x-2 
                text-gray-700 dark:text-gray-300 
                hover:text-purple-600 dark:hover:text-purple-400 
                transition-colors duration-200">
                <span className="text-purple-500">✧</span>
                <span>{method}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;