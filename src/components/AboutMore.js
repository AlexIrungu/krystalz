import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaGem } from 'react-icons/fa';
import Root from './Luna/Root.jpg';
import balancing from './Luna/BalancingRoot.jpg';
import brtwo from './Luna/BRTWO.jpg';

const CrystalSection = ({ crystals, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
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
};

const AboutMore = () => {
  const rootChakraCrystals = [
    {
      image: Root,
      name: "The Root Chakra",
      description: "Known for its powerful healing and cleansing properties. This crystal promotes spiritual growth, inner peace, and emotional balance.",
      benefits: ["Enhances meditation", "Promotes restful sleep", "Reduces anxiety"]
    },
    // Add more root chakra crystals here
  ];

  const throatChakraCrystals = [
    {
      image: balancing, // Replace with throat chakra image
      name: "Throat Chakra Crystal",
      description: "Enhances communication and self-expression. This crystal helps in speaking your truth and expressing yourself clearly.",
      benefits: ["Improves communication", "Enhances self-expression", "Promotes clarity"]
    },
    // Add more throat chakra crystals here
  ];

  const crownChakraCrystals = [
    {
      image: brtwo, // Replace with crown chakra image
      name: "Crown Chakra Crystal",
      description: "Connected to spiritual awareness and enlightenment. This crystal helps in achieving higher consciousness and divine wisdom.",
      benefits: ["Spiritual connection", "Enhanced intuition", "Mental clarity"]
    },
    // Add more crown chakra crystals here
  ];

  return (
    <div id="about-more" className="space-y-8">
      <CrystalSection 
        crystals={rootChakraCrystals} 
        title="Root Chakra Crystals" 
      />
      <CrystalSection 
        crystals={throatChakraCrystals} 
        title="Throat Chakra Crystals" 
      />
      <CrystalSection 
        crystals={crownChakraCrystals} 
        title="Crown Chakra Crystals" 
      />
    </div>
  );
};

export default AboutMore;