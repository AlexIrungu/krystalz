import React from 'react';
import { FaGem, FaHandHoldingHeart, FaBook, FaMagic, FaHome, FaShoppingBag } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => (
  <div id='services' className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="text-4xl text-purple-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <FaGem />,
      title: "Crystal Identification",
      description: "Expert identification and authentication of rare and valuable crystals."
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Healing Sessions",
      description: "Personalized crystal healing sessions to balance your energy and promote wellbeing."
    },
    {
      icon: <FaBook />,
      title: "Educational Workshops",
      description: "Learn about crystal properties, care, and uses in our informative workshops."
    },
    {
      icon: <FaMagic />,
      title: "Custom Crystal Grids",
      description: "Design and creation of custom crystal grids for specific intentions and goals."
    },
    {
      icon: <FaHome />,
      title: "Home & Office Consultations",
      description: "Expert advice on incorporating crystals into your living and working spaces."
    },
    {
      icon: <FaShoppingBag />,
      title: "Curated Collections",
      description: "Handpicked crystal collections tailored to your specific needs and preferences."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;