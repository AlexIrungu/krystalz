import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingAnimation = () => {
  const stoneRefs = useRef([]);

  // Healing stones mapped to Infinity Stone colors and meanings
  const healingStones = [
    { 
      color: 'bg-red-500', 
      name: 'Power Stone', 
      healing: 'Jasper - Strength & Vitality',
      avenger: 'Power Stone Red'
    },
    { 
      color: 'bg-blue-500', 
      name: 'Space Stone', 
      healing: 'Blue Lace Agate - Calm & Communication',
      avenger: 'Space Stone Blue'
    },
    { 
      color: 'bg-purple-500', 
      name: 'Reality Stone', 
      healing: 'Amethyst - Spiritual Awareness',
      avenger: 'Reality Stone Purple'
    },
    { 
      color: 'bg-green-500', 
      name: 'Time Stone', 
      healing: 'Malachite - Transformation',
      avenger: 'Time Stone Green'
    },
    { 
      color: 'bg-yellow-500', 
      name: 'Mind Stone', 
      healing: 'Citrine - Mental Clarity',
      avenger: 'Mind Stone Yellow'
    },
    { 
      color: 'bg-orange-500', 
      name: 'Soul Stone', 
      healing: 'Carnelian - Emotional Healing',
      avenger: 'Soul Stone Orange'
    }
  ];

  useEffect(() => {
    const stones = stoneRefs.current;
    
    const masterTimeline = gsap.timeline({ repeat: -1 });

    stones.forEach((stone, index) => {
      const stoneTimeline = gsap.timeline({ repeat: -1, yoyo: true });
      
      stoneTimeline
        .to(stone, {
          scale: 1.2,
          rotation: 360,
          opacity: 0.8,
          duration: 1.5,
          ease: 'power2.inOut',
          delay: index * 0.2
        })
        .to(stone, {
          boxShadow: '0 0 20px rgba(255,255,255,0.5)',
          duration: 0.5
        });

      masterTimeline.add(stoneTimeline, index * 0.1);
    });

    return () => masterTimeline.kill();
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-purple-300 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="grid grid-cols-3 gap-4 mb-8">
        {healingStones.map((stone, index) => (
          <div 
            key={stone.name}
            ref={el => stoneRefs.current[index] = el}
            className={`
              ${stone.color} 
              w-24 h-24 rounded-xl shadow-lg 
              flex items-center justify-center 
              transform transition-all duration-300
              hover:scale-110 cursor-pointer
            `}
            style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            }}
          >
            <span className="text-white text-xs text-center px-2">{stone.healing}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-purple-800 dark:text-purple-300 mb-2">
          Healing Your Crystals
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Channeling the power of cosmic healing stones...
        </p>
      </div>
    </div>
  );
};

export default LoadingAnimation;