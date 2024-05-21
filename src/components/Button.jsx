import React from 'react';

const NeonButton = ({ children }) => {
  return (
    <button
      onClick={onClick}
      className="relative px-4 py-2 text-white bg-gray-900 border-2 border-transparent rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
    >
      {children}
      <span className="absolute inset-0 rounded-full blur-sm opacity-50 mix-blend-overlay bg-gradient-to-r from-green-400 to-blue-500"></span>
    </button>
  );
};

export default NeonButton;
