import React, { useState } from 'react';
import Root from './Luna/Root.jpg';
import balancing from './Luna/BalancingRoot.jpg';
import brtwo from './Luna/BRTWO.jpg';
import { FaChevronLeft, FaChevronRight, FaGem } from 'react-icons/fa';

function AboutMore() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const crystals = [
    {
      image: Root,
      name: "The Root Chakra",
      description: "Known for its powerful healing and cleansing properties. This crystal promotes spiritual growth, inner peace, and emotional balance.",
      benefits: ["Enhances meditation", "Promotes restful sleep", "Reduces anxiety"]
    },
    {
      image: balancing,
      name: "Balancing The Root Chakra",
      description: "The stone of universal love. This gentle pink crystal opens the heart chakra and promotes all forms of love, including self-love.",
      benefits: ["Attracts love", "Heals emotional wounds", "Promotes self-care"]
    },
    {
      image: brtwo,
      name: "Clear Quartz",
      description: "The master healer crystal. It amplifies energy and thought, and helps with concentration and memory.",
      benefits: ["Amplifies intentions", "Clarity of mind", "Energy cleansing"]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === crystals.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? crystals.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id='about-more' className="bg-white rounded-2xl shadow-lg p-8 mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Discover Our Crystals</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 relative">
          <img
            src={crystals[currentIndex].image}
            alt={crystals[currentIndex].name}
            className="rounded-lg w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prevSlide}
              className="bg-white/80 hover:bg-white text-purple-600 p-2 rounded-full shadow-lg transition-all duration-300"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/80 hover:bg-white text-purple-600 p-2 rounded-full shadow-lg transition-all duration-300"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">{crystals[currentIndex].name}</h3>
          <p className="text-gray-600 leading-relaxed">{crystals[currentIndex].description}</p>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Key Benefits:</h4>
            <ul className="space-y-2">
              {crystals[currentIndex].benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <FaGem className="text-purple-600 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {crystals.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-purple-600' : 'bg-purple-200'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutMore;