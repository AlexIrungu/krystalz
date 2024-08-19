import React from 'react';
import { FaGem, FaUserFriends, FaAward } from 'react-icons/fa';
import store from './images/store1.jpg'

const FeatureCard = ({ icon, title, description }) => (
  <div id='about' className="flex items-center space-x-4">
    <div className="flex-shrink-0">
      <div className="bg-purple-100 rounded-full p-3">
        {icon}
      </div>
    </div>
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const About = () => {
  const features = [
    {
      icon: <FaGem className="h-6 w-6 text-purple-600" />,
      title: "Premium Quality",
      description: "We source only the finest, ethically mined crystals from around the world."
    },
    {
      icon: <FaUserFriends className="h-6 w-6 text-purple-600" />,
      title: "Expert Guidance",
      description: "Our team of experienced crystal healers provides personalized advice and support."
    },
    {
      icon: <FaAward className="h-6 w-6 text-purple-600" />,
      title: "Certified Authentic",
      description: "All our crystals are certified authentic and come with a guarantee of quality."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Krystalz</h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover the transformative power of crystals with Krystalz, your trusted source for premium healing stones since 2010.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={store} alt="Krystalz Store" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              Founded in 2010 by crystal enthusiast Jane Doe, Krystalz began as a small online shop and has since grown into a leading provider of high-quality crystals and healing stones. Our passion for the metaphysical properties of crystals and commitment to customer satisfaction have been the driving forces behind our success.
            </p>
            <p className="text-gray-600">
              Today, we're proud to serve a global community of crystal lovers, from beginners to experienced practitioners, helping them harness the power of nature's most beautiful creations.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Why Choose Krystalz?</h3>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;