import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import reiki from './Luna/Reiki.jpg';
import reikihelp from './Luna/ReikiHelp.jpg';
import reikisession from './Luna/ReikiSession.jpg';

function Reiki() {
    const images = [
        { src: reiki, alt: "Reiki Healing Practice" },
        { src: reikihelp, alt: "Reiki Healing Support" },
        { src: reikisession, alt: "Reiki Session" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gradient-to-b from-purple-50 to-white rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">
                Experience the Power of Reiki Healing
            </h2>
            
            {/* Image Carousel Section */}
            <div className="relative mb-8 group">
                <img 
                    src={images[currentIndex].src} 
                    alt={images[currentIndex].alt}
                    className="w-full h-[500px] object-cover rounded-lg shadow-xl transition-all duration-500"
                />
                
                {/* Navigation Buttons */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button 
                        onClick={prevImage}
                        className="bg-white/80 hover:bg-white text-purple-600 p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                        <FaChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={nextImage}
                        className="bg-white/80 hover:bg-white text-purple-600 p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                        <FaChevronRight size={24} />
                    </button>
                </div>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'bg-purple-600' : 'bg-white/70'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Reiki is a form of alternative therapy commonly referred to as energy healing. 
                    It emerged in Japan in the late 1800s and is said to involve the transfer of 
                    universal energy from the practitioner's palms to their patient.
                </p>

                <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-800 mb-4">
                        Benefits of Reiki Sessions
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            Reducing stress and promoting relaxation
                        </li>
                        <li className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            Enhancing the body's natural healing abilities
                        </li>
                        <li className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            Improving emotional and mental well-being
                        </li>
                        <li className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            Providing a sense of peace and calm
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Reiki;