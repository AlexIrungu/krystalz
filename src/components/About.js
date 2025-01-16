import React, { useState } from 'react';
import { FaGem, FaUserFriends, FaAward, FaArrowRight, FaTimes } from 'react-icons/fa';
import about from './images/joanna-kosinska-K_OzFXOcQX8-unsplash.jpg';
import AboutMore from './AboutMore';
import Reiki from './Reiki';

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
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Quality Crystals</h2>
      <div className="space-y-6">
        <p className="text-lg text-gray-600">
          Our crystals are carefully selected from the most reputable mines worldwide. Each piece undergoes 
          rigorous quality control to ensure:
        </p>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-start">
            <FaGem className="text-purple-600 mt-1 mr-3" />
            <span>Exceptional clarity and natural formation</span>
          </li>
          <li className="flex items-start">
            <FaGem className="text-purple-600 mt-1 mr-3" />
            <span>Optimal energetic properties and vibrations</span>
          </li>
          <li className="flex items-start">
            <FaGem className="text-purple-600 mt-1 mr-3" />
            <span>Ethical and sustainable sourcing practices</span>
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
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Crystal Guidance</h2>
      <div className="space-y-6">
        <p className="text-lg text-gray-600">
          Our team of certified crystal healers and practitioners are here to support your journey:
        </p>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-start">
            <FaUserFriends className="text-purple-600 mt-1 mr-3" />
            <span>Personalized crystal recommendations</span>
          </li>
          <li className="flex items-start">
            <FaUserFriends className="text-purple-600 mt-1 mr-3" />
            <span>Crystal healing sessions and workshops</span>
          </li>
          <li className="flex items-start">
            <FaUserFriends className="text-purple-600 mt-1 mr-3" />
            <span>Energy cleansing and charging guidance</span>
          </li>
        </ul>
        <div className="mt-8">
          <AboutMore />
        </div>
      </div>
    </div>
  );

  const CertificationContent = () => (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Certified Authentic Crystals</h2>
      <div className="space-y-6">
        <p className="text-lg text-gray-600">
          Every crystal comes with our guarantee of authenticity:
        </p>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-start">
            <FaAward className="text-purple-600 mt-1 mr-3" />
            <span>Certificate of authenticity with each purchase</span>
          </li>
          <li className="flex items-start">
            <FaAward className="text-purple-600 mt-1 mr-3" />
            <span>Detailed origin and sourcing information</span>
          </li>
          <li className="flex items-start">
            <FaAward className="text-purple-600 mt-1 mr-3" />
            <span>100% satisfaction guarantee</span>
          </li>
        </ul>
        <div className="mt-8">
          <Reiki />
        </div>
      </div>
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description, onClick }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100">
      <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
        <Icon className="text-3xl text-purple-600" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
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
      case "Premium Quality":
        return <PremiumQualityContent />;
      case "Expert Guidance":
        return <ExpertGuidanceContent />;
      case "Certified Authentic":
        return <CertificationContent />;
      default:
        return null;
    }
  };
  
  const features = [
    {
      icon: FaGem,
      title: "Premium Quality",
      description: "We source only the finest, ethically mined crystals from around the world."
    },
    {
      icon: FaUserFriends,
      title: "Expert Guidance",
      description: "Our team of experienced crystal healers provides personalized advice and support."
    },
    {
      icon: FaAward,
      title: "Certified Authentic",
      description: "All our crystals are certified authentic and come with a guarantee of quality."
    }
  ];

  return (
    <div id="about" className="bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-purple-100 px-4 py-2 rounded-full mb-4">
            <span className="text-purple-600 font-medium">About Us</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 transform rotate-3 rounded-2xl opacity-20"></div>
            <img
              src={about}
              alt="Krystalz Store"
              className="relative rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover w-full h-[500px]"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                🌒 Online shop based in Kenya 🌒 Sourced and made with love 🌒 Inspired by the waxing stage of the moon, representing growth
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Today, we're proud to serve a global community of crystal lovers, from beginners to experienced practitioners, helping them harness the power of nature's most beautiful creations.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose Krystalz?</h2>
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