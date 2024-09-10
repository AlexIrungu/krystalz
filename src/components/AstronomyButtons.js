import React from 'react';

const StyledButton = ({ onClick, children, isPrimary }) => {
  const baseClasses = "px-4 py-2 rounded-full font-semibold text-sm shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50";
  const primaryClasses = "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500";
  const secondaryClasses = "bg-purple-500 text-white hover:bg-purple-600 focus:ring-purple-400";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses}`}
    >
      {children}
    </button>
  );
};

const AstronomyButtons = ({ onShowHalfScreen, onShowPopup }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <StyledButton onClick={onShowHalfScreen} isPrimary={true}>
        Show Astronomy (Half Screen)
      </StyledButton>
      <StyledButton onClick={onShowPopup} isPrimary={false}>
        Show Astronomy (Popup)
      </StyledButton>
    </div>
  );
};

export default AstronomyButtons;