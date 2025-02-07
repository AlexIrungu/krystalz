import React, { useState } from 'react';

const CrystalInfoPage = () => {
  const [activeTab, setActiveTab] = useState('charging');

  const content = {
    healing: {
      title: "Crystal Healing",
      subtitle: "Natural energy healing",
      description: "Crystals have been used for centuries to promote physical, emotional, and spiritual healing. Each crystal carries unique vibrations that can help restore balance and harmony.",
      image: "/api/placeholder/800/500"
    },
    cleansing: {
      title: "Crystal Cleansing",
      subtitle: "Purifying energies",
      description: "Regular cleansing of your crystals is essential to maintain their powerful energies. Learn the various methods to keep your crystals clear and energetically pure.",
      image: "/api/placeholder/800/500"
    },
    charging: {
      title: "Crystal Charging",
      subtitle: "Boosting energies",
      description: "In the same way that you need a sense of direction in order to be the best you can be, so does your crystal. Crystals want to work for you, but you need to give them a job.",
      image: "/api/placeholder/800/500"
    }
  };

  const active = content[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 via-teal-400 to-green-400">
      <div className="container mx-auto px-4 py-12">
        {/* Content Section */}
        <div className="bg-white/20 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px]">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-2 text-white/80">{active.subtitle}</div>
              <h2 className="text-4xl font-bold text-white mb-4">{active.title}</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                {active.description}
              </p>
              <button className="mt-6 inline-flex items-center text-white border-2 border-white/50 px-6 py-2 rounded-full hover:bg-white/10 transition-colors">
                How to {activeTab} crystals
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          {Object.keys(content).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300
                ${activeTab === tab 
                  ? 'bg-white text-teal-600 shadow-lg' 
                  : 'bg-white/20 text-white hover:bg-white/30'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrystalInfoPage;