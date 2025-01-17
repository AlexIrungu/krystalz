import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import reiki from './Luna/Reiki.jpg';
import reikihelp from './Luna/ReikiHelp.jpg';
import reikisession from './Luna/ReikiSession.jpg';
import { RiEBikeFill } from 'react-icons/ri';

export default function Reiki() {
    const images = [
        { 
            src: reiki,
            alt: "Reiki Healing Practice",
            
        },
        { 
            src: reikihelp,
            alt: "Reiki Healing Support",
            
        },
        { 
            src: reikisession,
            alt: "Reiki Session",
            
        }
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
            
            {/* Enhanced Image Carousel Section */}
            <div className="relative mb-12">
                {/* Container with fixed aspect ratio */}
                <div className="relative w-full aspect-[16/9] mb-8">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt}
                                className="w-full h-full object-contain rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
                                <p className="text-center text-lg">{image.caption}</p>
                            </div>
                        </div>
                    ))}
                    
                    {/* Navigation Buttons */}
                    <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-purple-600 p-3 rounded-full shadow-lg transition-all duration-300 z-20 hover:scale-110"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-purple-600 p-3 rounded-full shadow-lg transition-all duration-300 z-20 hover:scale-110"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Image Indicators */}
                <div className="flex justify-center space-x-4 mt-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex 
                                    ? 'bg-purple-600 scale-125' 
                                    : 'bg-purple-200 hover:bg-purple-300'
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-white p-8 rounded-lg shadow-md space-y-8">
                <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Reiki is a gentle yet powerful form of energy healing that originated in Japan. 
                        This holistic practice channels universal life force energy through the practitioner's 
                        hands to promote physical, emotional, and spiritual well-being. Our certified Reiki 
                        masters create a peaceful, nurturing environment for your healing journey.
                    </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-800 mb-4">
                        Benefits of Reiki Healing
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-center space-x-3 text-gray-700">
                            <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                            <span>Deep relaxation and stress reduction</span>
                        </li>
                        <li className="flex items-center space-x-3 text-gray-700">
                            <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                            <span>Enhanced natural healing abilities</span>
                        </li>
                        <li className="flex items-center space-x-3 text-gray-700">
                            <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                            <span>Emotional and mental balance</span>
                        </li>
                        <li className="flex items-center space-x-3 text-gray-700">
                            <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                            <span>Improved sleep and anxiety reduction</span>
                        </li>
                        <li className="flex items-center space-x-3 text-gray-700">
                            <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                            <span>Support for chronic pain management</span>
                        </li>
                        <li className="flex items-center space-x-3 text-gray-700">
                            <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                            <span>Spiritual growth and awareness</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}