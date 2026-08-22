"use client";

import React from 'react';

const Header = () => {
  return (
    <header className="w-full pt-12 pb-8 px-6 flex flex-col items-center text-center">
      {/* Logo Circuit */}
      <div className="relative w-48 h-48 mb-6">
        <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <img 
          src="/src/assets/logo.jpg" 
          alt="Dr Speed Nord Logo" 
          className="relative w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]"
        />
      </div>

      <div className="space-y-1">
        <h1 className="text-4xl font-black italic tracking-tighter text-white cyber-glow-text uppercase">
          DR SPEED NORD
        </h1>
        <p className="text-sm font-serif italic tracking-[0.1em] text-gray-400">
          PREMIUM QUALITY ONLY
        </p>
      </div>
    </header>
  );
};

export default Header;