import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import moon from './images/d6069b77-b862-43ef-b6f6-04183622008e.jpg';


const Home = () => {
  const recommendedStones = [
    { name: "Amethyst", benefit: "Stress Relief & Spiritual Growth", price: "$24.99" },
    { name: "Rose Quartz", benefit: "Love & Inner Healing", price: "$19.99" },
    { name: "Clear Quartz", benefit: "Energy & Clarity", price: "$22.99" },
    { name: "Black Tourmaline", benefit: "Protection & Grounding", price: "$27.99" }
  ];
  return (
    <div id='home'>
    
    <section id="/" className="relative h-screen" style={{
    backgroundImage: `url(${moon})`  // Replace with your image path
  }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-semibold mb-4 text-purple-200">Welcome to Our Krystal Sanctuary</h2>
          <p className="text-gray-300 max-w-2xl text-center mb-8 px-4">
            Krystals are nature's gift, offering healing, balance, and spiritual growth. Each krystal carries
            unique properties and energies that can enhance various aspects of your life.
          </p>
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            Discover the Power of Krystals
          </h1>
          <p className="text-xl mb-8">Harness the energy of nature's most beautiful gems</p>
          <Link
            to="shop"
            smooth={true}
            duration={500}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300 cursor-pointer"
          >
            Explore Crystals
          </Link>
        </div>
      </section>

       {/* Featured Images Grid */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        <div className="relative h-64 rounded-lg overflow-hidden">
          <img
            src="/api/placeholder/400/300"
            alt="Crystal Collection"
            className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">Healing Collection</h3>
          </div>
        </div>
        <div className="relative h-64 rounded-lg overflow-hidden">
          <img
            src="/api/placeholder/400/300"
            alt="Meditation Space"
            className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">Sacred Spaces</h3>
          </div>
        </div>
        <div className="relative h-64 rounded-lg overflow-hidden">
          <img
            src="/api/placeholder/400/300"
            alt="Crystal Grid"
            className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">Crystal Grids</h3>
          </div>
        </div>
      </div>

    <div className="flex flex-col md:flex-row gap-8 my-8">
      <section className="select-your-crystal flex-1 p-8  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-4">How to Select Your Crystal</h2>
        <p className="text-gray-700 leading-relaxed">
          First things first: Identify what you feel you're missing before looking into what the stones can provide you. 
          This will help you determine what's happening within yourself before depending on outside sources. From there, 
          just let your intuition choose what's best for you. Whether a crystal catches your eye or you feel a pull toward one, 
          your inner subconscious can help guide you to the crystal that's right for you. Once it's picked out, you can create 
          the connection you need.
        </p>
      </section>

      <section className="care-for-your-crystal flex-1 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-4">How to Care for Your Crystal</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          When you first bring your crystal home, experts say you'll want to cleanse away any negativity it may have picked up. 
          Depending on the kind of stone, you can:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li className="hover:text-indigo-600 transition-colors duration-200">Hold it under cold, running water</li>
          <li className="hover:text-indigo-600 transition-colors duration-200">Immerse it in sea salt</li>
          <li className="hover:text-indigo-600 transition-colors duration-200">Place it in sunlight or moonlight</li>
          <li className="hover:text-indigo-600 transition-colors duration-200">Smudge your crystal with sage or other herbs</li>
        </ul>
      </section>
    </div>

          {/* Recommendations Section */}
          <section className="p-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-purple-200 mb-12">Recommended Stones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendedStones.map((stone, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={`/api/placeholder/300/300`}
                  alt={stone.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-purple-200 mb-2">{stone.name}</h3>
              <p className="text-gray-300 mb-4">{stone.benefit}</p>
              <p className="text-purple-300 font-bold">{stone.price}</p>
            </div>
          ))}
        </div>
      </section>
    

</div>
  );
};

export default Home;