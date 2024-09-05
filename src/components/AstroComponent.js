import React, { useState, useEffect } from 'react';
import { Moon, Star, Sun } from 'lucide-react';

const AstroComponent = () => {
  const [moonPhase, setMoonPhase] = useState('');
  const [moonFraction, setMoonFraction] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentZodiac, setCurrentZodiac] = useState({ sign: 'Virgo', startDate: 'August 23', endDate: 'September 22' });

  const zodiacs = [
    { sign: 'Aries', startDate: 'March 21', endDate: 'April 19' },
    { sign: 'Taurus', startDate: 'April 20', endDate: 'May 20' },
    { sign: 'Gemini', startDate: 'May 21', endDate: 'June 20' },
    { sign: 'Cancer', startDate: 'June 21', endDate: 'July 22' },
    { sign: 'Leo', startDate: 'July 23', endDate: 'August 22' },
    { sign: 'Virgo', startDate: 'August 23', endDate: 'September 22' },
    { sign: 'Libra', startDate: 'September 23', endDate: 'October 22' },
    { sign: 'Scorpio', startDate: 'October 23', endDate: 'November 21' },
    { sign: 'Sagittarius', startDate: 'November 22', endDate: 'December 21' },
    { sign: 'Capricorn', startDate: 'December 22', endDate: 'January 19' },
    { sign: 'Aquarius', startDate: 'January 20', endDate: 'February 18' },
    { sign: 'Pisces', startDate: 'February 19', endDate: 'March 20' }
  ];

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
      'First quarter': 'Half of the moon\'s lit surface is visible from Earth.',
      'Waxing gibbous': 'The lit area continues to increase, but isn\'t yet a full moon.',
      'Full moon': 'The entire face of the moon is illuminated by the Sun\'s rays.',
      'Waning gibbous': 'The lit area starts to decrease after the full moon.',
      'Third quarter': 'Also known as the last quarter, half of the moon\'s lit surface is visible.',
      'Waning crescent': 'A small crescent remains as the moon moves toward the new moon phase.'
    };
    return descriptions[phase] || 'Description not available.';
  };

  const getZodiacDescription = (sign) => {
    const descriptions = {
      'Aries': 'Aries season is characterized by energy, initiative, and new beginnings.',
      'Taurus': 'Taurus season brings a focus on stability, sensuality, and material comforts.',
      'Gemini': 'Gemini season is a time of communication, curiosity, and intellectual pursuits.',
      'Cancer': 'Cancer season emphasizes emotions, home, and family connections.',
      'Leo': 'Leo season brings creativity, self-expression, and a desire for recognition.',
      'Virgo': 'Virgo season focuses on practicality, attention to detail, and self-improvement.',
      'Libra': 'Libra season highlights relationships, harmony, and aesthetic appreciation.',
      'Scorpio': 'Scorpio season delves into intensity, transformation, and deep emotional connections.',
      'Sagittarius': 'Sagittarius season encourages exploration, optimism, and philosophical thinking.',
      'Capricorn': 'Capricorn season emphasizes ambition, responsibility, and long-term goals.',
      'Aquarius': 'Aquarius season brings focus to innovation, social causes, and unconventional thinking.',
      'Pisces': 'Pisces season is a time of intuition, creativity, and spiritual connection.'
    };
    return descriptions[sign] || 'Description not available.';
  };

  const handleZodiacChange = (event) => {
    const selectedZodiac = zodiacs.find(zodiac => zodiac.sign === event.target.value);
    setCurrentZodiac(selectedZodiac);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden relative">
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
        <div className="sticky top-0 z-10 bg-opacity-70 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg mb-8 bg-gradient-to-r from-indigo-800 to-purple-800">
          <h1 className="text-4xl font-bold mb-2">Astro Explorer</h1>
          <p className="text-xl">Current Zodiac: {currentZodiac.sign} | Moon Phase: {moonPhase}</p>
        </div>
        <div className="space-y-16">
          <section className="flex flex-col items-center">
            <div className="relative w-64 h-64 mb-8">
              <div className="absolute inset-0 bg-yellow-200 rounded-full shadow-inner"></div>
              <div 
                className="absolute inset-0 bg-indigo-900 rounded-full transition-all duration-500 ease-in-out"
                style={{
                  clipPath: `inset(0 ${100 - moonFraction * 100}% 0 0)`,
                  transform: `rotate(${scrollPosition / 10}deg)`
                }}
              ></div>
              <Moon className="absolute inset-0 m-auto text-yellow-300" size={128} />
            </div>
            <div className="text-2xl mb-4">
              Moon: {Math.round(moonFraction * 100)}% Illuminated
            </div>
            <div className="text-lg text-center max-w-2xl">
              {getMoonPhaseDescription(moonPhase)}
            </div>
          </section>
          <section className="bg-opacity-50 bg-purple-800 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <Sun className="mr-2" size={32} />
              Current Zodiac: {currentZodiac.sign}
            </h2>
            <p className="text-lg mb-4">
              {currentZodiac.startDate} - {currentZodiac.endDate}
            </p>
            <select 
              onChange={handleZodiacChange} 
              value={currentZodiac.sign}
              className="bg-purple-700 text-white border border-purple-600 rounded p-2 mb-4"
            >
              {zodiacs.map(zodiac => (
                <option key={zodiac.sign} value={zodiac.sign}>{zodiac.sign}</option>
              ))}
            </select>
            <p className="text-lg">
              {getZodiacDescription(currentZodiac.sign)}
            </p>
          </section>
          <section className="bg-opacity-50 bg-indigo-800 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Astro Insights</h2>
            <p className="text-lg mb-4">
              The current {moonPhase.toLowerCase()} phase in {currentZodiac.sign} season may influence:
            </p>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Increased focus on {currentZodiac.sign}-related traits and activities</li>
              <li>A blend of {moonPhase.toLowerCase()} energy and {currentZodiac.sign} characteristics</li>
              <li>Heightened awareness of {currentZodiac.sign} themes in daily life</li>
              <li>Potential for personal growth aligned with {currentZodiac.sign} qualities</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AstroComponent;