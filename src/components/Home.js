import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div id='home'>
    
    <section
      id="/"
      className="relative h-screen text-white"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Our Krystal Sanctuary</h2>
        <p className="text-gray-300 max-w-2xl text-center mb-8">
          Krystals are nature's gift, offering healing, balance, and spiritual growth. Each krystal carries
          unique properties and energies that can enhance various aspects of your life. Explore our
          collection and find the perfect krystal companion for your journey.
        </p>
        <h1 className="text-5xl font-bold mb-4">Discover the Power of Krystals</h1>
        <p className="text-xl mb-8">Harness the energy of nature's most beautiful gems</p>
        <Link
          to="shop"
          smooth={true}
          duration={500}
          className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 cursor-pointer"
        >
          Explore Crystals
        </Link>
      </div>
    </section>
    <div className="flex flex-col md:flex-row gap-8 my-8">
      <section className="select-your-crystal flex-1 p-8  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-white mb-4">How to Select Your Crystal</h2>
        <p className="text-gray-700 leading-relaxed">
          First things first: Identify what you feel you're missing before looking into what the stones can provide you. 
          This will help you determine what's happening within yourself before depending on outside sources. From there, 
          just let your intuition choose what's best for you. Whether a crystal catches your eye or you feel a pull toward one, 
          your inner subconscious can help guide you to the crystal that's right for you. Once it's picked out, you can create 
          the connection you need.
        </p>
      </section>

      <section className="care-for-your-crystal flex-1 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-white mb-4">How to Care for Your Crystal</h2>
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
</div>
  );
};

export default Home;