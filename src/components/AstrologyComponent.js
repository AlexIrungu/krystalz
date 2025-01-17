import React, { useState } from 'react';
import { FaSearch, FaStar, FaMoon, FaArrowDown } from 'react-icons/fa';
import { GiEarthAmerica, GiStarsStack } from 'react-icons/gi';

const AstrologyComponent = () => {
  const [selectedSign, setSelectedSign] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('zodiac');

  const zodiacSigns = [
    {
        name: 'Aries',
        date: 'March 21 - April 19',
        element: 'Fire',
        planet: 'Mars',
        traits: ['Confident', 'Courageous', 'Enthusiastic', 'Impulsive', 'Natural leader'],
        description: 'Aries is the first sign of the zodiac, and thats exactly how they like to be viewed: as the first. Aries are natural born leaders, with a dynamic and confident personality that inspires others to follow their path.',
        compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius']
    },
    {
        name: 'Taurus',
        date: 'April 20 - May 20',
        element: 'Earth',
        planet: 'Venus',
        traits: ['Patient', 'Reliable', 'Devoted', 'Responsible', 'Stable'],
        description: 'Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.',
        compatibility: ['Virgo', 'Capricorn', 'Cancer', 'Pisces']
    },
    {
        name: 'Gemini',
        date: 'May 21 - June 20',
        element: 'Air',
        planet: 'Mercury',
        traits: ['Adaptable', 'Versatile', 'Intellectual', 'Communicative', 'Curious'],
        description: 'Gemini is represented by the celestial twins, and this air sign is known for its dualistic nature. Expressive and quick-witted, Gemini represents two different personalities in one and youll never be sure which one youll face.',
        compatibility: ['Libra', 'Aquarius', 'Aries', 'Leo']
    },
    {
        name: 'Cancer',
        date: 'June 21 - July 22',
        element: 'Water',
        planet: 'Moon',
        traits: ['Nurturing', 'Protective', 'Intuitive', 'Emotional', 'Supportive'],
        description: 'Cancer is a cardinal water sign. Represented by the crab, this crustacean seamlessly weaves between the sea and shore representing Cancers ability to exist in both emotional and material realms.',
        compatibility: ['Scorpio', 'Pisces', 'Taurus', 'Virgo']
    },
    {
        name: 'Leo',
        date: 'July 23 - August 22',
        element: 'Fire',
        planet: 'Sun',
        traits: ['Creative', 'Passionate', 'Generous', 'Warm-hearted', 'Cheerful'],
        description: 'Leo is represented by the lion, and these spirited fire signs are the kings and queens of the celestial jungle. Theyre delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight.',
        compatibility: ['Aries', 'Sagittarius', 'Gemini', 'Libra']
    },
    {
        name: 'Virgo',
        date: 'August 23 - September 22',
        element: 'Earth',
        planet: 'Mercury',
        traits: ['Analytical', 'Practical', 'Diligent', 'Perfectionist', 'Modest'],
        description: 'Virgo is an earth sign historically represented by the goddess of wheat and agriculture. This earth sign is known for its practical, methodical approach to life. They have an eye for detail and a sense of duty.',
        compatibility: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio']
    },
    {
        name: 'Libra',
        date: 'September 23 - October 22',
        element: 'Air',
        planet: 'Venus',
        traits: ['Diplomatic', 'Gracious', 'Fair-minded', 'Social', 'Harmonious'],
        description: 'Libra is represented by the scales, the only inanimate object of the zodiac, which is fitting for the most balanced sign. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life.',
        compatibility: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius']
    },
    {
        name: 'Scorpio',
        date: 'October 23 - November 21',
        element: 'Water',
        planet: 'Pluto, Mars',
        traits: ['Passionate', 'Determined', 'Magnetic', 'Intense', 'Mysterious'],
        description: 'Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm.',
        compatibility: ['Cancer', 'Pisces', 'Virgo', 'Capricorn']
    },
    {
        name: 'Sagittarius',
        date: 'November 22 - December 21',
        element: 'Fire',
        planet: 'Jupiter',
        traits: ['Optimistic', 'Adventure-seeking', 'Independent', 'Straightforward', 'Philosophical'],
        description: 'Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after adventures.',
        compatibility: ['Aries', 'Leo', 'Libra', 'Aquarius']
    },
    {
        name: 'Capricorn',
        date: 'December 22 - January 19',
        element: 'Earth',
        planet: 'Saturn',
        traits: ['Responsible', 'Disciplined', 'Self-controlled', 'Ambitious', 'Patient'],
        description: 'The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.',
        compatibility: ['Taurus', 'Virgo', 'Scorpio', 'Pisces']
    },
    {
        name: 'Aquarius',
        date: 'January 20 - February 18',
        element: 'Air',
        planet: 'Uranus, Saturn',
        traits: ['Progressive', 'Original', 'Independent', 'Humanitarian', 'Intellectual'],
        description: 'Despite the "aqua" in its name, Aquarius is actually the last air sign of the zodiac. Innovative and progressive, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land.',
        compatibility: ['Gemini', 'Libra', 'Sagittarius', 'Aries']
    },
    {
        name: 'Pisces',
        date: 'February 19 - March 20',
        element: 'Water',
        planet: 'Neptune, Jupiter',
        traits: ['Intuitive', 'Artistic', 'Compassionate', 'Gentle', 'Musical'],
        description: 'Pisces, a water sign, is represented by two fish swimming in opposite directions, symbolizing the constant division of Pisces attention between fantasy and reality. As the final sign in the zodiac, Pisces has absorbed every lesson.',
        compatibility: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn']
    }
];

// New data structure for astrological events
const astroEvents = {
  currentRetrograde: {
    planet: "Mercury",
    period: "April 21 - May 14, 2025",
    impact: "Communication delays, technology issues, and reflection periods are common during Mercury retrograde. Take extra care with important decisions and agreements.",
    recommendations: [
      "Backup important data",
      "Double-check travel plans",
      "Avoid signing contracts if possible",
      "Focus on reflection and review"
    ]
  },
  moonPhases: [
    {
      phase: "Full Moon in Scorpio",
      date: "April 23, 2025",
      meaning: "Time for transformation, emotional release, and manifesting intentions",
    },
    {
      phase: "New Moon in Taurus",
      date: "May 7, 2025",
      meaning: "Perfect time for setting new goals, especially related to material security and personal values",
    }
  ],
  planetaryTransits: [
    {
      planet: "Jupiter",
      movement: "Entering Gemini",
      date: "May 25, 2025",
      impact: {
        sun: "Enhanced communication and learning opportunities",
        moon: "Emotional expansion and mental growth",
        rising: "New social connections and intellectual pursuits"
      }
    },
    {
      planet: "Saturn",
      movement: "Retrograde in Aries",
      date: "June 29, 2025",
      impact: {
        sun: "Review of personal goals and responsibilities",
        moon: "Emotional maturity and boundary setting",
        rising: "Restructuring of self-image and approach to life"
      }
    }
  ]
};

  const filteredSigns = zodiacSigns.filter(sign =>
    sign.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">
          Celestial Guidance
        </h1>
        <p className="text-lg text-gray-600">
          Explore your zodiac sign and track important astrological events
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-4 bg-white rounded-full p-2 shadow-md">
          <button
            onClick={() => setActiveTab('zodiac')}
            className={`px-6 py-2 rounded-full ${
              activeTab === 'zodiac'
                ? 'bg-purple-500 text-white'
                : 'text-gray-600 hover:bg-purple-50'
            }`}
          >
            Zodiac Signs
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-6 py-2 rounded-full ${
              activeTab === 'events'
                ? 'bg-purple-500 text-white'
                : 'text-gray-600 hover:bg-purple-50'
            }`}
          >
            Celestial Events
          </button>
        </div>
      </div>

      {activeTab === 'zodiac' ? (
        <>

       {/* Existing Search Bar and Zodiac Grid */}
       <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search for your zodiac sign..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 pl-12"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400" />
            </div>
          </div>

      {/* Zodiac Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredSigns.map((sign) => (
          <div
            key={sign.name}
            onClick={() => setSelectedSign(sign)}
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-indigo-900">{sign.name}</h3>
              <FaStar className="text-yellow-400" />
            </div>
            <p className="text-purple-600 font-medium mb-2">{sign.date}</p>
            <p className="text-gray-600 mb-4">Element: {sign.element}</p>
            <div className="flex flex-wrap gap-2">
              {sign.traits.slice(0, 3).map((trait, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </>
       ) : (
        // New Astrological Events Section
        <div className="space-y-8">
          {/* Current Retrograde */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <GiEarthAmerica className="text-2xl text-purple-500 mr-2" />
              <h2 className="text-2xl font-bold text-indigo-900">Current Retrograde</h2>
            </div>
            <div className="space-y-4">
              <p className="text-xl text-purple-600">{astroEvents.currentRetrograde.planet} Retrograde</p>
              <p className="text-gray-600">{astroEvents.currentRetrograde.period}</p>
              <p className="text-gray-700">{astroEvents.currentRetrograde.impact}</p>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Recommendations:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  {astroEvents.currentRetrograde.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Moon Phases */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <FaMoon className="text-2xl text-purple-500 mr-2" />
              <h2 className="text-2xl font-bold text-indigo-900">Upcoming Moon Phases</h2>
            </div>
            <div className="grid gap-6">
              {astroEvents.moonPhases.map((moon, index) => (
                <div key={index} className="border-l-4 border-purple-400 pl-4">
                  <p className="text-xl text-purple-600">{moon.phase}</p>
                  <p className="text-gray-600">{moon.date}</p>
                  <p className="text-gray-700 mt-2">{moon.meaning}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Planetary Transits */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <GiStarsStack className="text-2xl text-purple-500 mr-2" />
              <h2 className="text-2xl font-bold text-indigo-900">Planetary Transits</h2>
            </div>
            <div className="space-y-6">
              {astroEvents.planetaryTransits.map((transit, index) => (
                <div key={index} className="border-b last:border-b-0 pb-6 last:pb-0">
                  <p className="text-xl text-purple-600">{transit.planet} - {transit.movement}</p>
                  <p className="text-gray-600 mb-4">{transit.date}</p>
                  <div className="space-y-2">
                    <p><span className="font-semibold">Sun Sign Impact:</span> {transit.impact.sun}</p>
                    <p><span className="font-semibold">Moon Sign Impact:</span> {transit.impact.moon}</p>
                    <p><span className="font-semibold">Rising Sign Impact:</span> {transit.impact.rising}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}


      {/* Selected Sign Modal */}
      {selectedSign && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-indigo-900">{selectedSign.name}</h2>
              <button
                onClick={() => setSelectedSign(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Birth Dates</h3>
                <p className="text-gray-600">{selectedSign.date}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Element & Planet</h3>
                <p className="text-gray-600">
                  Element: {selectedSign.element} | Ruling Planet: {selectedSign.planet}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Description</h3>
                <p className="text-gray-600">{selectedSign.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Key Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSign.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Best Compatibility</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSign.compatibility.map((sign, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full"
                    >
                      {sign}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AstrologyComponent;