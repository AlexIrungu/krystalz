import React, { useState, useEffect } from 'react';
import { Moon, Star } from 'lucide-react';

const AstronomyComponent = () => {
  const [moonPhase, setMoonPhase] = useState('');
  const [moonFraction, setMoonFraction] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const calculateMoonPhase = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      const c = Math.floor(365.25 * year);
      const e = Math.floor(30.6 * month);
      const jd = c + e + day - 694039.09;
      const daysPerCycle = 29.53;
      const phase = ((jd % daysPerCycle) / daysPerCycle) * 100;

      setMoonFraction(phase / 100);

      if (phase < 1.84566) setMoonPhase('New moon');
      else if (phase < 5.53699) setMoonPhase('Waxing crescent');
      else if (phase < 9.22831) setMoonPhase('First quarter');
      else if (phase < 12.91963) setMoonPhase('Waxing gibbous');
      else if (phase < 16.61096) setMoonPhase('Full moon');
      else if (phase < 20.30228) setMoonPhase('Waning gibbous');
      else if (phase < 23.99361) setMoonPhase('Third quarter');
      else if (phase < 27.68493) setMoonPhase('Waning crescent');
      else setMoonPhase('New moon');
    };

    calculateMoonPhase();
  }, []);

  const getMoonPhaseDescription = (phase) => {
    const descriptions = {
      'New moon': 'The moon is between the Earth and the Sun, so the side facing us is in complete darkness.',
      'Waxing crescent': 'A sliver of the moon becomes visible as it moves away from the Sun.',
      'First quarter': 'Half of the moon/s lit surface is visible from Earth.',
      'Waxing gibbous': 'The lit area continues to increase, but isn/t yet a full moon.',
      'Full moon': 'The entire face of the moon is illuminated by the Sun/s rays.',
      'Waning gibbous': 'The lit area starts to decrease after the full moon.',
      'Third quarter': 'Also known as the last quarter, half of the moon/s lit surface is visible.',
      'Waning crescent': 'A small crescent remains as the moon moves toward the new moon phase.'
    };
    return descriptions[phase] || 'Description not available.';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {[...Array(50)].map((_, i) => (
        <Star 
          key={i}
          size={Math.random() * 4 + 1}
          className="text-white absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 5 + 2}s linear infinite`
          }}
        />
      ))}
      <div className="container mx-auto px-4 py-16">
        <div className="sticky top-0 z-10 bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold mb-2">Moon Phase Explorer</h1>
          <p className="text-xl">Current phase: {moonPhase}</p>
        </div>
        <div className="space-y-16">
          <section className="flex flex-col items-center">
            <div className="relative w-64 h-64 mb-8">
              <div className="absolute inset-0 bg-gray-300 rounded-full shadow-inner"></div>
              <div 
                className="absolute inset-0 bg-gray-900 rounded-full transition-all duration-500 ease-in-out"
                style={{
                  clipPath: `inset(0 ${100 - moonFraction * 100}% 0 0)`,
                  transform: `rotate(${scrollPosition / 10}deg)`
                }}
              ></div>
              <Moon className="absolute inset-0 m-auto text-yellow-300" size={128} />
            </div>
            <div className="text-2xl mb-4">
              {Math.round(moonFraction * 100)}% Illuminated
            </div>
            <div className="text-lg text-center max-w-2xl">
              {getMoonPhaseDescription(moonPhase)}
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-4">About {moonPhase}</h2>
            <p className="text-lg mb-4">
              The {moonPhase.toLowerCase()} phase occurs when {moonFraction < 0.5 ? 'less' : 'more'} than half of the moon's 
              visible surface is illuminated by the sun. During this phase, the moon appears to be {moonFraction < 0.5 ? 'growing' : 'shrinking'} 
              in the sky.
            </p>
            <p className="text-lg">
              This phase is part of the moon's approximately 29.5-day cycle, also known as the synodic month. 
              As the moon orbits around the Earth, different amounts of its illuminated surface become visible to us, 
              creating the various lunar phases we observe.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-4">Observation Details</h2>
            <p className="text-lg">Date: {new Date().toLocaleDateString()}</p>
            <p className="text-lg mt-2">Note: This is a simulated moon phase based on the current date.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AstronomyComponent;