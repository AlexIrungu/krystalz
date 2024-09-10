import React, { useEffect, useState } from 'react';

const Star = ({ x, y }) => (
  <div 
    className="absolute rounded-full bg-white" 
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: '2px',
      height: '2px',
      animation: `twinkle ${Math.random() * 4 + 2}s linear infinite`
    }}
  />
);

const RealisticMoon = ({ style }) => (
  <svg
    viewBox="0 0 100 100"
    className="fixed transition-all duration-300 ease-out"
    style={style}
  >
    <defs>
      <radialGradient id="moonGradient" cx="50%" cy="50%" r="50%" fx="20%" fy="20%">
        <stop offset="0%" stopColor="#fff6e6" />
        <stop offset="50%" stopColor="#ffeaad" />
        <stop offset="100%" stopColor="#ffd54f" />
      </radialGradient>
      <filter id="moonShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
        <feOffset in="blur" dx="2" dy="2" result="offsetBlur" />
        <feMerge>
          <feMergeNode in="offsetBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#moonGradient)" filter="url(#moonShadow)" />
    <ellipse cx="28" cy="30" rx="8" ry="10" fill="#ffd54f" opacity="0.3" />
    <ellipse cx="60" cy="70" rx="12" ry="8" fill="#ffd54f" opacity="0.3" />
  </svg>
);

const NightSkyTheme = () => {
  const [stars, setStars] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
        });
      }
      setStars(newStars);
    };
    generateStars();

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const moonPosition = {
    top: `${10 + (scrollPosition / 20)}%`,
    right: `${10 - (scrollPosition / 40)}%`,
    width: '150px',
    height: '150px',
    transform: `rotate(${scrollPosition / 10}deg)`,
  };

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {stars.map((star) => (
        <Star key={star.id} x={star.x} y={star.y} />
      ))}
      <RealisticMoon style={moonPosition} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-[300vh]" /> {/* Placeholder content for scrolling */}
      </div>
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default NightSkyTheme;