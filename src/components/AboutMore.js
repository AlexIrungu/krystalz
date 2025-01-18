import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaGem } from 'react-icons/fa';
import Root from './Luna/Root.jpg';
import balancing from './Luna/BalancingRoot.jpg';
import brtwo from './Luna/BRTWO.jpg';
import bthroat from './Luna/bthroat.jpg'
import bthroatt from './Luna/bthroatt.jpg'
import imthroat from './Luna/imthroat.jpg'
import throat from './Luna/throat.jpg'
import whatthroat from './Luna/whatthroat.jpg'
import crown from './Luna/crown.jpg'
import bcrown from './Luna/bcrown.jpg'
import bcrownn from './Luna/bcrownn.jpg'
import imcrown from './Luna/imcrown.jpg'
import whatcrown from './Luna/whatcrown.jpg'
import sacral from './Luna/sacral.jpg'
import bsacral from './Luna/bsacral.jpg'
import bsacrall from './Luna/bsacrall.jpg'
import imsacral from './Luna/imsacral.jpg'
import whatsacral from './Luna/whatsacral.jpg'
import solar from './Luna/solarplexus.jpg'
import bsolar from './Luna/bsolar.jpg'
import bsollar from './Luna/bsollar.jpg'
import imsolar from './Luna/imsolar.jpg'
import whatsolar from './Luna/whatsolar.jpg'
import heart from './Luna/heart.jpg'
import bheart from './Luna/bheart.jpg'
import bheartt from './Luna/bheartt.jpg'
import imheart from './Luna/imheart.jpg'
import whatheart from './Luna/whatheart.jpg'
import third from './Luna/third.jpg'
import bthird from './Luna/bthird.jpg'
import bthirdd from './Luna/bthirdd.jpg'
import imthird from './Luna/imthird.jpg'
import whatthird from './Luna/whatthird.jpg'

const CrystalSection = ({ crystals, title }) => {
  const [currentCrystalIndex, setCurrentCrystalIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const currentCrystal = crystals[currentCrystalIndex];
    if (currentCrystal.images.length > 1) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === currentCrystal.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    const currentCrystal = crystals[currentCrystalIndex];
    if (currentCrystal.images.length > 1) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? currentCrystal.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 relative">
          <img
            src={crystals[currentCrystalIndex].images[currentImageIndex]}
            alt={crystals[currentCrystalIndex].name}
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
          <h3 className="text-2xl font-bold text-gray-900">{crystals[currentCrystalIndex].name}</h3>
          <p className="text-gray-600 leading-relaxed">{crystals[currentCrystalIndex].description}</p>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Key Benefits:</h4>
            <ul className="space-y-2">
              {crystals[currentCrystalIndex].benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <FaGem className="text-purple-600 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Optional: Add image navigation dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {crystals[currentCrystalIndex].images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-purple-600' : 'bg-purple-200'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const AboutMore = () => {
  const rootChakraCrystals = [
    {
      images: [Root, balancing, brtwo], 
      name: "The Root Chakra",
      description: "Known for its powerful healing and cleansing properties. This crystal promotes spiritual growth, inner peace, and emotional balance.",
      benefits: ["Enhances meditation", "Promotes restful sleep", "Reduces anxiety"]
    },
    // Add more root chakra crystals here
  ];

  const throatChakraCrystals = [
    {
      images: [throat, whatthroat, bthroat, bthroatt, imthroat], // Replace with throat chakra image
      name: "Throat Chakra Crystal",
      description: "Enhances communication and self-expression. This crystal helps in speaking your truth and expressing yourself clearly.",
      benefits: ["Improves communication", "Enhances self-expression", "Promotes clarity"]
    },
    // Add more throat chakra crystals here
  ];

  const crownChakraCrystals = [
    {
      images: [crown, whatcrown, bcrown, bcrownn, imcrown], // Replace with crown chakra image
      name: "Crown Chakra Crystal",
      description: "Connected to spiritual awareness and enlightenment. This crystal helps in achieving higher consciousness and divine wisdom.",
      benefits: ["Spiritual connection", "Enhanced intuition", "Mental clarity"]
    },
   ];

   const sacralChakraCrystals = [
    {
      images: [sacral, whatsacral, bsacral, bsacrall, imsacral],
      name: "The Sacral Chakra (Svadhisthana)",
      description: "Located in the lower abdomen, the Sacral Chakra governs creativity, pleasure, and emotional well-being. It's connected to our ability to accept change and experience joy.",
      benefits: ["Enhances creativity and artistic expression", "Balances emotional energy", "Improves relationships and intimacy"]
    }
  ];

  const solarPlexusChakraCrystals = [
    {
      images: [solar, whatsolar, bsolar, bsollar, imsolar],
      name: "The Solar Plexus Chakra (Manipura)",
      description: "Located in the upper abdomen, the Solar Plexus Chakra is the center of personal power and self-esteem. It governs confidence, decision-making, and personal identity.",
      benefits: ["Boosts self-confidence and personal power", "Enhances motivation and drive", "Improves decision-making abilities"]
    }
  ];

  const heartChakraCrystals = [
    {
      images: [heart, whatheart, bheart, bheartt, imheart],
      name: "The Heart Chakra (Anahata)",
      description: "Located at the heart center, this chakra governs love, compassion, and connection. It bridges the physical and spiritual chakras, promoting balance and harmony.",
      benefits: ["Opens capacity for love and compassion", "Promotes emotional healing", "Enhances relationships and empathy"]
    }
  ];
  const thirdEyeChakraCrystals = [
    {
      images: [third, whatthird, bthird, bthirdd, imthird],
      name: "The Third Eye Chakra (Ajna)",
      description: "Located between the eyebrows, the Third Eye Chakra is the center of intuition and foresight. It governs our ability to see beyond the physical realm.",
      benefits: ["Enhances intuition and psychic abilities", "Improves visualization and imagination", "Deepens meditation practice"]
    }
  ];

  return (
    <div id="about-more" className="space-y-8 ">
       <CrystalSection crystals={rootChakraCrystals} title="Root Chakra Crystals" />
      <CrystalSection crystals={sacralChakraCrystals} title="Sacral Chakra Crystals" />
      <CrystalSection crystals={solarPlexusChakraCrystals} title="Solar Plexus Chakra Crystals" />
      <CrystalSection crystals={heartChakraCrystals} title="Heart Chakra Crystals" />
      <CrystalSection crystals={throatChakraCrystals} title="Throat Chakra Crystals" />
      <CrystalSection crystals={thirdEyeChakraCrystals} title="Third Eye Chakra Crystals" />
      <CrystalSection crystals={crownChakraCrystals} title="Crown Chakra Crystals" />
    </div>
  );
};

export default AboutMore;