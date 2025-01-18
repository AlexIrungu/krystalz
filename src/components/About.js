import React, { useState } from 'react';
import { FaGem, FaUserFriends, FaAward, FaArrowRight, FaTimes, FaYinYang, FaMoon } from 'react-icons/fa';
import about from './images/joanna-kosinska-K_OzFXOcQX8-unsplash.jpg';
import AboutMore from './AboutMore';
import Reiki from './Reiki';
import AstrologyComponent from './AstrologyComponent';
import { 
  GiLibra, // For zodiac representation
  GiStarsStack, // For celestial/astrology elements
  GiCrystalBall // For readings/guidance
} from 'react-icons/gi';
import { Sparkles } from 'lucide-react';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        ></div>
        
        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <FaTimes size={24} />
            </button>
            {children}
          </div>
        </div>
      </div>
    );
  };

  // Feature-specific content components
  const PremiumQualityContent = () => (
    <div className="p-8">
     <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Chakras</h2>
<div className="space-y-6">
  <p className="text-lg text-gray-600">
    Chakras are powerful energy centers within our body that influence our physical, emotional, and spiritual well-being. 
    Each chakra represents different aspects of our consciousness and serves unique purposes:
  </p>
  <ul className="space-y-4 text-gray-600">
    <li className="flex items-start">
      <FaGem className="text-purple-600 mt-1 mr-3" />
      <span>From Root to Crown, these seven energy centers govern different aspects of our life journey</span>
    </li>
    <li className="flex items-start">
      <FaGem className="text-purple-600 mt-1 mr-3" />
      <span>When balanced, chakras promote harmony between mind, body, and spirit</span>
    </li>
    <li className="flex items-start">
      <FaGem className="text-purple-600 mt-1 mr-3" />
      <span>Each chakra resonates with specific crystals that can help maintain their alignment</span>
    </li>
    <li className="flex items-start">
      <FaGem className="text-purple-600 mt-1 mr-3" />
      <span>Regular chakra work can enhance personal growth and spiritual development</span>
    </li>
    <li className="flex items-start">
      <FaGem className="text-purple-600 mt-1 mr-3" />
      <span>Understanding your chakras helps identify areas needing attention and healing</span>
    </li>
  </ul>
        <div className="mt-8">
          <AboutMore />
        </div>
      </div>
    </div>
  );

  const ExpertGuidanceContent = () => (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Astrological Guidance</h2>
<div className="space-y-6">
  <p className="text-lg text-gray-600">
    Explore the cosmic influences and celestial energies that shape your journey through expert astrological guidance:
  </p>
  <ul className="space-y-4 text-gray-600">
    <li className="flex items-start">
      <GiLibra className="text-purple-600 mt-1 mr-3" />
      <span>Personalized birth chart readings and zodiac sign compatibility analysis</span>
    </li>
    <li className="flex items-start">
      <GiStarsStack className="text-purple-600 mt-1 mr-3" />
      <span>Monthly planetary transitions and their impact on your sun, moon, and rising signs</span>
    </li>
    <li className="flex items-start">
      <GiCrystalBall className="text-purple-600 mt-1 mr-3" />
      <span>Guidance through retrogrades, full moons, and astrological events</span>
    </li>
  </ul>
        <div className="mt-8">
          <AstrologyComponent />
        </div>
      </div>
    </div>
  );

  const CertificationContent = () => (
    <div className="p-8">
       <h2 className="text-3xl font-bold text-gray-900 mb-6">Certified Reiki Master Services</h2>
      <div className="space-y-6">
        <p className="text-lg text-gray-600">
          Every Reiki session is provided with the highest level of expertise and care:
        </p>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-start">
            <Sparkles className="text-purple-600 mt-1 mr-3" />
            <span>Certified Usui Reiki Master Teacher training</span>
          </li>
          <li className="flex items-start">
            <Sparkles className="text-purple-600 mt-1 mr-3" />
            <span>Personalized healing sessions tailored to your needs</span>
          </li>
          <li className="flex items-start">
            <Sparkles className="text-purple-600 mt-1 mr-3" />
            <span>Sacred space with traditional Reiki principles</span>
          </li>
          <li className="flex items-start">
            <Sparkles className="text-purple-600 mt-1 mr-3" />
            <span>Commitment to your spiritual and energetic wellbeing</span>
          </li>
        </ul>
        <div className="mt-8">
          <Reiki />
        </div>
      </div>
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description, onClick }) => (
    <div className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100 dark:border-purple-900/20">
      <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
        <Icon className="text-3xl text-purple-600 dark:text-purple-400" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      <button 
        onClick={onClick}
        className="mt-4 group bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center hover:bg-purple-700 transition-all duration-300"
      >
        <span>Learn more</span>
        <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  );
  
  const handleFeatureClick = (title) => {
    setSelectedFeature(title);
    setIsModalOpen(true);
  };

  const getModalContent = () => {
    switch (selectedFeature) {
      case "Chakra Healing":
        return <PremiumQualityContent />;
      case "Astrological Insights":
        return <ExpertGuidanceContent />;
      case "Certified Reiki Master":
        return <CertificationContent />;
      default:
        return null;
    }
  };
  
  const features = [
    {
      icon: FaYinYang,
      title: "Chakra Healing",
      description: "Discover the seven energy centers of your body - from Root to Crown chakra - and learn how to maintain their balance for optimal physical and spiritual wellbeing."
    },
    {
      icon: FaMoon, // or could use FaStarAndCrescent or FaSun from 'react-icons/fa'
      title: "Astrological Insights",
      description: "Discover your celestial path with personalized birth chart readings and planetary transit interpretations by our expert astrologers."
    },
    {
      icon: Sparkles,
      title: "Certified Reiki Master",
      description: "All our Reiki sessions are provided by certified masters trained in authentic Usui Reiki traditions."
    }
  ];

  return (
    <div id="about" className="bg-primary dark:bg-primary-dark transition-colors duration-200">
    <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
    <div className="text-center mb-20">
  <div className="inline-block bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-4">
    <span className="text-purple-600 dark:text-purple-300 font-medium">About Us</span>
  </div>
</div>

      {/* Modified layout to match the design */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 mb-24">
        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
          <img
            src={about}
            alt="Krystalz Store"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">Our Story</h2>
<div className="space-y-6">
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-full bg-purple-600"></div>
    <p className="text-gray-600 dark:text-gray-300">Online shop based in Kenya</p>
    <div className="w-2 h-2 rounded-full bg-purple-600"></div>
    <p className="text-gray-600 dark:text-gray-300">Sourced and made with love</p>
  </div>
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-full bg-purple-600"></div>
    <p className="text-gray-600 dark:text-gray-300">Inspired by the waxing stage of the moon, representing growth</p>
  </div>
  <p className="text-gray-600 dark:text-gray-300 mt-6">
              Today, we're proud to serve a global community of crystal lovers, from beginners to experienced practitioners, helping them harness the power of nature's most beautiful creations.
            </p>
          </div>
        </div>
      </div>


      <div className="text-center mb-16">
  <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Why Choose Krystalz?</h2>
  <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-4 rounded-full"></div>
</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              {...feature} 
              onClick={() => handleFeatureClick(feature.title)}
            />
          ))}
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setSelectedFeature(null);
        }}
      >
        {getModalContent()}
      </Modal>
    </div>
  );
};

export default About;