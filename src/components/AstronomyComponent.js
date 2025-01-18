import React, { useState, useEffect } from 'react';
import { Moon, Star, X } from 'lucide-react';

const AstronomyComponent = ({ isPopup, onClose }) => {
  const [moonData, setMoonData] = useState({
    phase: '',
    illumination: 0,
    age: 0
  });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    calculateMoonPhase();
  }, []);

  const calculateMoonPhase = () => {
    const date = new Date();
    // Julian date calculation
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    // Meeus/Astronomical Algorithms
    const Y = year - Math.floor((12 - month) / 10);
    const M = month + 9;
    if (M >= 12) M = M - 12;
    
    // Julian Day
    const K1 = Math.floor(365.25 * (Y + 4712));
    const K2 = Math.floor(30.6 * M + 0.5);
    const K3 = Math.floor(Math.floor((Y / 100) + 49) * 0.75) - 38;
    const JD = K1 + K2 + day + 59;
    
    // Calculate days since known new moon (2000-01-06)
    const daysSinceNewMoon = JD - 2451550.1;
    const newMoons = daysSinceNewMoon / 29.530588853;
    const moonAge = (newMoons - Math.floor(newMoons)) * 29.530588853;
    
    // Calculate illumination
    const illumination = (1 - Math.cos((moonAge / 29.530588853) * 2 * Math.PI)) / 2;
    
    // Determine phase name
    const getPhaseFromAge = (age) => {
      if (age < 1.84566) return 'New moon';
      if (age < 5.53699) return 'Waxing crescent';
      if (age < 9.22831) return 'First quarter';
      if (age < 12.91963) return 'Waxing gibbous';
      if (age < 16.61096) return 'Full moon';
      if (age < 20.30228) return 'Waning gibbous';
      if (age < 23.99361) return 'Last quarter';
      if (age < 27.68493) return 'Waning crescent';
      return 'New moon';
    };

    setMoonData({
      phase: getPhaseFromAge(moonAge),
      illumination: illumination,
      age: moonAge
    });
  };

  const getMoonPhaseDescription = (phase) => {
    const descriptions = {
      'New moon': 'The moon is directly between Earth and Sun, making it invisible from Earth.',
      'Waxing crescent': 'A slim crescent of illumination appears on the right side.',
      'First quarter': 'The right half of the moon is illuminated from our view.',
      'Waxing gibbous': 'Most of the moon is illuminated, approaching full moon.',
      'Full moon': 'The entire visible face of the moon is illuminated.',
      'Waning gibbous': 'Illumination starts decreasing from the right side.',
      'Last quarter': 'The left half of the moon is illuminated from our view.',
      'Waning crescent': 'Only a slim crescent remains visible on the left side.'
    };
    return descriptions[phase] || 'Description not available.';
  };

  if (!isPopup) {
    return (
      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        {/* Full screen content */}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm flex items-center justify-center z-50" onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className="bg-gray-900 text-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative m-4">
        <div className="sticky top-0 z-10 flex justify-between items-center bg-gray-800 p-4 rounded-t-xl border-b border-gray-700">
          <h1 className="text-2xl font-bold">Moon Phase Explorer</h1>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg p-2 transition-colors"
            aria-label="Close moon phase explorer"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Star background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(50)].map((_, i) => (
        <Star 
        key={i}
        size={Math.random() * 2 + 1}
        className="text-white absolute animate-twinkle"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.3,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${Math.random() * 4 + 2}s`
        }}
      />
    ))}
  </div>
      
       {/* Moon visualization */}
       <div className="flex flex-col items-center relative z-10">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-gray-300 rounded-full shadow-inner"></div>
              <div 
                className="absolute inset-0 bg-gray-900 rounded-full transition-transform duration-1000"
                style={{
                  clipPath: `inset(0 ${(1 - moonData.illumination) * 100}% 0 0)`,
                  transform: `rotate(${scrollPosition / 20}deg)`
                }}
              ></div>
              <Moon 
                className="absolute inset-0 m-auto text-yellow-300/90" 
                size={96}
              />
            </div>

            <div className="mt-4 text-center">
              <div className="text-xl font-semibold">
                {Math.round(moonData.illumination * 100)}% Illuminated
              </div>
              <div className="text-gray-300">
                Current Phase: {moonData.phase}
              </div>
            </div>
          </div>

          {/* Phase description */}
          <div className="bg-gray-800/50 rounded-lg p-4">
            <p className="text-gray-200">
              {getMoonPhaseDescription(moonData.phase)}
            </p>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Lunar Age</h3>
              <p>{moonData.age.toFixed(1)} days</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Observation Date</h3>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstronomyComponent;