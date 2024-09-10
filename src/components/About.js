import React from 'react';
import { FaGem, FaUserFriends, FaAward } from 'react-icons/fa';
import about from './images/joanna-kosinska-K_OzFXOcQX8-unsplash.jpg'

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <Icon className="text-4xl text-purple-600 mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About = () => {
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
    <div id='about' className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          About <span className="text-purple-600">Krystalz</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl">
          Discover the transformative power of crystals with Krystalz, your trusted source for premium healing stones since 2010.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={about}
            alt="Krystalz Store"
            className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2010 by crystal enthusiast Jane Doe, Krystalz began as a small online shop and has since grown into a leading provider of high-quality crystals and healing stones. Our passion for the metaphysical properties of crystals and commitment to customer satisfaction have been the driving forces behind our success.
          </p>
          <p className="text-gray-600">
            Today, we're proud to serve a global community of crystal lovers, from beginners to experienced practitioners, helping them harness the power of nature's most beautiful creations.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Krystalz?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;