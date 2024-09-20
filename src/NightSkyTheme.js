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

const RealisticMoon = ({ phase, style }) => {
  const moonPhase = phase % 30; // Normalize to 0-29
  const illumination = Math.abs(15 - moonPhase) / 15;
  const isWaxing = moonPhase <= 15;

  return (
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
        <mask id="moonMask">
          <rect x="0" y="0" width="100" height="100" fill="white" />
          <ellipse 
            cx={isWaxing ? "50" : "50"} 
            cy="50" 
            rx={50 * illumination} 
            ry="50" 
            fill="black"
          />
        </mask>
      </defs>
      <circle 
        cx="50" 
        cy="50" 
        r="48" 
        fill="url(#moonGradient)" 
        mask="url(#moonMask)"
      />
      {/* Craters */}
      <circle cx="30" cy="35" r="4" fill="#e6e6e6" opacity="0.3" />
      <circle cx="70" cy="65" r="6" fill="#e6e6e6" opacity="0.3" />
      <circle cx="55" cy="25" r="3" fill="#e6e6e6" opacity="0.3" />
    </svg>
  );
};

const NightSkyTheme = () => {
  const [stars, setStars] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [moonPhase, setMoonPhase] = useState(0);

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

    // Calculate current moon phase
    const calculateMoonPhase = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      
      const c = Math.floor((year - 1900) / 100);
      const y = year - 1900 - c * 100;
      const m = month;
      const b = Math.floor((3 * (c + 1) / 4)) - 12;
      const a = (8 * c + 5) / 25;
      const jd = 365 * y + Math.floor(y / 4) + b - a + Math.floor(30.6 * m) + day + 1720995;
      const phase = (jd + 4.867) % 29.53059;
      setMoonPhase(phase);
    };
    calculateMoonPhase();

    const interval = setInterval(calculateMoonPhase, 86400000); // Update every 24 hours

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const calculateMoonPosition = () => {
    const scrollPercentage = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const angle = (scrollPercentage / 100) * 2 * Math.PI; // Convert scroll percentage to radians

    const radius = Math.min(window.innerWidth, window.innerHeight) * 0.4; // 40% of the smaller dimension
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const x = centerX + radius * Math.cos(angle) - 75; // 75 is half the moon's width
    const y = centerY + radius * Math.sin(angle) - 75; // 75 is half the moon's height

    return {
      left: `${x}px`,
      top: `${y}px`,
      width: '150px',
      height: '150px',
      transform: `rotate(${scrollPosition / 10}deg)`,
    };
  };

  const moonPosition = calculateMoonPosition();

  return (
    <div className="fixed inset-0 w-full h-full bg-black overflow-hidden">
      {stars.map((star) => (
        <Star key={star.id} x={star.x} y={star.y} />
      ))}
      <RealisticMoon phase={moonPhase} style={moonPosition} />
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