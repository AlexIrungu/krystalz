import React from 'react';
import { Moon, Stars } from 'lucide-react';

const StyledButton = ({ onClick, children, isPrimary }) => {
  const baseClasses = "relative px-6 py-3 rounded-full font-medium text-sm shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50 hover:scale-105 active:scale-95 flex items-center gap-2";
  
  const primaryClasses = "bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white focus:ring-indigo-500 hover:shadow-indigo-500/25";
  
  const secondaryClasses = "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white focus:ring-purple-400 hover:shadow-purple-500/25";

  return (
    <button
      onClick={onClick}
      className={`group ${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses}`}
    >
      <Moon className="w-4 h-4 transition-transform group-hover:rotate-12" />
      <span>{children}</span>
      <Stars className="w-4 h-4 absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

const AstronomyButtons = ({ onShowHalfScreen, onShowPopup }) => {
  return (
    <div className="flex space-x-4 mb-4">
      {/* <StyledButton onClick={onShowHalfScreen} isPrimary={true}>
        Show Astronomy (Half Screen)
      </StyledButton> */}
      <StyledButton onClick={onShowPopup} isPrimary={false}>
        Show Astronomy
      </StyledButton>
    </div>
  );
};

export default AstronomyButtons;