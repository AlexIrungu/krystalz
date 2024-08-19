import React from 'react';

const Home = () => {
    const featuredKrystals = [
        { name: 'Amethyst', color: 'Purple', benefit: 'Calming and intuitive', image: '/images/amethyst.jpg' },
        { name: 'Rose Quartz', color: 'Pink', benefit: 'Love and emotional healing', image: '/images/rose-quartz.jpg' },
        { name: 'Citrine', color: 'Yellow', benefit: 'Abundance and positivity', image: '/images/citrine.jpg' },
        { name: 'Clear Quartz', color: 'Transparent', benefit: 'Amplifies energy and healing', image: '/images/clear-quartz.jpg' },
        { name: 'Obsidian', color: 'Black', benefit: 'Protection and grounding', image: '/images/obsidian.jpg' },
        { name: 'Lapis Lazuli', color: 'Blue', benefit: 'Wisdom and truth', image: '/images/lapis-lazuli.jpg' },
        { name: 'Jade', color: 'Green', benefit: 'Harmony and good luck', image: '/images/jade.jpg' },
        { name: 'Moonstone', color: 'White/Pearly', benefit: 'New beginnings and inner growth', image: '/images/moonstone.jpg' },
        { name: 'Tiger/s Eye', color: 'Golden Brown', benefit: 'Confidence and willpower', image: '/images/tigers-eye.jpg' },
      ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Discover the Power of Krystals</h1>
          <p className="text-xl mb-8">Harness the energy of nature's most beautiful gems</p>
          <button className="bg-white text-purple-500 font-bold py-2 px-4 rounded-full hover:bg-purple-100 transition duration-300">
            Explore Krystals
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Welcome to Our Krystal Sanctuary</h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            Krystals are nature's gift, offering healing, balance, and spiritual growth. 
            Each krystal carries unique properties and energies that can enhance various 
            aspects of your life. Explore our collection and find the perfect krystal companion 
            for your journey.
          </p>
        </div>
      </section>

      {/* Featured Krystals Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Featured Krystals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredKrystals.map((krystal, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <img src={krystal.image} alt={krystal.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{krystal.name}</h3>
                <p className="text-gray-600 mb-2">Color: {krystal.color}</p>
                <p className="text-gray-700">{krystal.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;