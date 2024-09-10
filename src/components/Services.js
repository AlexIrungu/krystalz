import React, { useEffect, useRef } from 'react';
import { FaGem, FaHandHoldingHeart, FaBook, FaMagic, FaHome, FaShoppingBag } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div id='services'
      ref={cardRef} 
      className="bg-gray p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out opacity-0 translate-y-4"
    >
      <div className="text-4xl text-black-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <section
      ref={sectionRef}
      id="services"
      className="py-20 bg-black text-white opacity-0 translate-y-4 transition-all duration-300 ease-in-out"
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12 opacity-0 translate-y-4 transition-all duration-300 ease-in-out"
          ref={(el) => {
            if (el) {
              setTimeout(() => {
                el.classList.add('opacity-100', 'translate-y-0');
              }, 100);
            }
          }}
        >
          Our Services
        </h2>
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