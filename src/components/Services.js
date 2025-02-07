import React, { useEffect, useRef } from 'react';
import { FaGem, FaSmile, FaHands, FaHeart, FaCalendarAlt, FaShoppingBag } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, cta, onClick }) => {
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
    <div 
      ref={cardRef} 
      className="bg-white p-6 rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300 ease-in-out opacity-0 translate-y-4 flex flex-col relative overflow-hidden"
    >
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 z-0"></div>
      
      {/* Icon with hover scale effect */}
      <div className="text-4xl text-black-600 mb-4 self-start transform transition-transform duration-300 group-hover:scale-110 z-10 relative">
        {React.cloneElement(icon, {
          className: 'transition-colors duration-300 group-hover:text-black/70'
        })}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 z-10 relative">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow z-10 relative">{description}</p>
      
      <button 
        onClick={onClick}
        className="mt-auto px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 self-start z-10 relative 
        transform hover:translate-x-1 hover:-translate-y-1 transition-transform"
      >
        {cta}
      </button>
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

  const handleNavigation = (path) => {
    // You can replace this with your preferred navigation method
    console.log(`Navigating to ${path}`);
    // Example: window.location.href = path;
  };

  const services = [
    {
      icon: <FaGem />,
      title: "Crystals and Gemstones",
      description: "Explore the world of Crystals and their healing power through our products. Each product is authentic, and made with love. We hope that they bring a positive impact to your life.",
      cta: "Find Crystals",
      path: "/crystals"
    },
    {
      icon: <FaSmile />,
      title: "Aromatherapy",
      description: "Our senses play a big role in our wellbeing. Through aromatherapy, we explore the power of plant scents in bringing healing, relaxation, energy, and even groundedness in our lives through the sense of smell.",
      cta: "Explore Aromatherapy",
      path: "/aromatherapy"
    },
    {
      icon: <FaHands />,
      title: "Reiki",
      description: "Reiki is a Japanese energy healing modality that helps people enhance wellbeing and relaxation.",
      cta: "Book a Session",
      path: "/reiki"
    },
    {
      icon: <FaHeart />,
      title: "Selfcare Products",
      description: "We create and stock the best products that can bring you closer to your self-care goals and self-love goals.",
      cta: "Browse Products",
      path: "/products"
    },
    {
      icon: <FaCalendarAlt />,
      title: "Events and Workshops",
      description: "We organize and collaborate with like-minded individuals, companies, and organizations to hold events and workshops that enhance wellbeing.",
      cta: "View Events",
      path: "/events"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 bg-gray-50 opacity-0 translate-y-4 transition-all duration-300 ease-in-out"
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
              cta={service.cta}
              onClick={() => handleNavigation(service.path)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;