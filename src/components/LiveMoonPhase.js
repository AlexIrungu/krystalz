// import React, { useState, useEffect } from 'react';

// const LiveMoonPhase = ({ size = 200 }) => {
//   const [phase, setPhase] = useState(0);

//   useEffect(() => {
//     const calculateMoonPhase = () => {
//       const date = new Date();
//       const year = date.getFullYear();
//       const month = date.getMonth() + 1;
//       const day = date.getDate();
      
//       const c = e = jd = b = 0;
      
//       if (month < 3) {
//         year--;
//         month += 12;
//       }
      
//       ++month;
//       c = 365.25 * year;
//       e = 30.6 * month;
//       jd = c + e + day - 694039.09; // jd is total days elapsed
//       jd /= 29.5305882; // divide by the moon cycle
//       b = parseInt(jd); // int(jd) -> b, take integer part of jd
//       jd -= b; // subtract integer part to leave fractional part of original jd
//       b = Math.round(jd * 8); // scale fraction from 0-8 and round
//       if (b >= 8) b = 0; // 0 and 8 are the same so turn 8 into 0
      
//       setPhase(b);
//     };

//     calculateMoonPhase();
//     const timer = setInterval(calculateMoonPhase, 60000); // Update every minute

//     return () => clearInterval(timer);
//   }, []);

//   const moonPhases = [
//     "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"
//   ];

//   return (
//     <div className="flex flex-col items-center">
//       <div style={{ fontSize: `${size}px`, lineHeight: 1 }}>
//         {moonPhases[phase]}
//       </div>
//       <div className="mt-2 text-center">
//         Current Moon Phase: {["New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full Moon", "Waning Gibbous", "Last Quarter", "Waning Crescent"][phase]}
//       </div>
//     </div>
//   );
// };

// export default LiveMoonPhase;