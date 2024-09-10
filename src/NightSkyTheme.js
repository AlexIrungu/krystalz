import React, { useEffect, useState } from 'react';
import { Moon } from 'lucide-react';

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

const NightSkyTheme = () => {
  const [stars, setStars] = useState([]);

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
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {stars.map((star) => (
        <Star key={star.id} x={star.x} y={star.y} />
      ))}
      <Moon 
        className="absolute text-yellow-200" 
        style={{
          top: '10%',
          right: '10%',
          width: '50px',
          height: '50px',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Welcome to the Night Sky</h1>
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