import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import kry from './images/kry.jpg'
import kry2 from './images/kry2.jpg'
// import kry3 from './images/kry3.jpeg'

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    kry,
    kry2,
    // kry3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section
      id="/"
      className="relative h-screen bg-black text-white"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Our Krystal Sanctuary</h2>
        <p className="text-gray-300 max-w-2xl text-center mb-8">
          Krystals are nature's gift, offering healing, balance, and spiritual growth. Each krystal carries
          unique properties and energies that can enhance various aspects of your life. Explore our
          collection and find the perfect krystal companion for your journey.
        </p>
        <h1 className="text-5xl font-bold mb-4">Discover the Power of Krystals</h1>
        <p className="text-xl mb-8">Harness the energy of nature's most beautiful gems</p>
        <Link
          to="explore-crystals"
          smooth={true}
          duration={500}
          className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 cursor-pointer"
        >
          Explore Crystals
        </Link>
      </div>
      {/* <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-gray-300 transition duration-300"
        onClick={handlePrevClick}
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-gray-300 transition duration-300"
        onClick={handleNextClick}
      >
        <FaArrowRight size={24} />
      </button> */}
    </section>
  );
};

export default Home;