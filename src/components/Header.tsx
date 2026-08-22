"use client";

import React from 'react';

const Header = () => {
  return (
    <div className="w-full pt-16 pb-10 px-6 flex flex-col items-center">
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 mb-6 shadow-2xl">
        <img 
          src="/src/assets/logo.jpg" 
          alt="Dr Speed Nord" 
          className="w-full h-full object-cover" 
        />
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-white">
        DR SPEED NORD
      </h1>
      <p className="text-gray-500 text-sm mt-2 font-medium">
        Qualité Supérieure • Service Client 24/7
      </p>
    </div>
  );
};

export default Header;