import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGem, FaSmile, FaHands, FaHeart, FaCalendarAlt } from 'react-icons/fa';
import kry from './images/kry.jpg';
import aromaa from './images/Aromatherapy.png'
import reikii from './images/Reiki.png'
import store from './images/store2.jpg'
import heal from './images/healing.jpg'


const ServiceCard = ({ icon, title, description, cta, path, image }) => {
  const navigate = useNavigate();
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

  const handleNavigation = () => {
    navigate(path);
  };

  return (
    <div 
      ref={cardRef} 
      className="relative h-[500px] rounded-lg shadow-lg group hover:shadow-xl transition-all duration-500 ease-in-out opacity-0 translate-y-4 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
      </div>

      {/* Content Container */}
      <div className="relative h-full p-6 flex flex-col justify-end z-10">
        <div className="text-4xl text-white mb-4 self-start transform transition-transform duration-300 group-hover:scale-110">
          {React.cloneElement(icon)}
        </div>
        
        <h3 className="text-2xl font-semibold mb-2 text-white transform transition-transform duration-300 group-hover:translate-x-2">
          {title}
        </h3>
        
        <p className="text-gray-100 mb-6 transition-all duration-300 group-hover:text-white">
          {description}
        </p>
        
        <button 
          onClick={handleNavigation}
          className="mt-auto px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg transition-all duration-300 self-start
          hover:bg-white/30 hover:translate-x-2 hover:shadow-lg border border-white/30"
        >
          {cta}
        </button>
      </div>
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
      title: "Crystals and Gemstones",
      description: "Explore the world of Crystals and their healing power through our products. Each product is authentic, and made with love. We hope that they bring a positive impact to your life.",
      cta: "Find Crystals",
      path: "/crystals",
      image: kry // Replace with your crystal image path
    },
    {
      icon: <FaSmile />,
      title: "Aromatherapy",
      description: "Our senses play a big role in our wellbeing. Through aromatherapy, we explore the power of plant scents in bringing healing, relaxation, energy, and even groundedness in our lives through the sense of smell.",
      cta: "Explore Aromatherapy",
      path: "/aromatherapy",
      image: aromaa // Replace with your aromatherapy image path
    },
    {
      icon: <FaHands />,
      title: "Reiki",
      description: "Reiki is a Japanese energy healing modality that helps people enhance wellbeing and relaxation.",
      cta: "Book a Session",
      path: "/reiki",
      image: reikii // Replace with your reiki image path
    },
    {
      icon: <FaHeart />,
      title: "Selfcare Products",
      description: "We create and stock the best products that can bring you closer to your self-care goals and self-love goals.",
      cta: "Browse Products",
      path: "/products",
      image: store // Replace with your selfcare products image path
    },
    {
      icon: <FaCalendarAlt />,
      title: "Events and Workshops",
      description: "We organize and collaborate with like-minded individuals, companies, and organizations to hold events and workshops that enhance wellbeing.",
      cta: "View Events",
      path: "/events",
      image: heal // Replace with your events image path
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
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;