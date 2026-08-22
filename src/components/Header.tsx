"use client";

import React from 'react';

const Header = () => {
  return (
    <div className="w-full pt-12 pb-8 px-6 flex flex-col items-center">
      <div className="relative group cursor-pointer">
        {/* Effet de halo derrière le logo */}
        <div className="absolute -inset-1 bg-white/20 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        
        <div className="relative w-40 h-40 rounded-3xl p-[1px] bg-gradient-to-b from-white/20 to-transparent rotate-3 group-hover:rotate-0 transition-transform duration-500">
          <div className="w-full h-full rounded-[22px] bg-black flex items-center justify-center overflow-hidden border border-white/10">
            <img 
              src="/src/assets/logo.jpg" 
              alt="Dr Speed Nord" 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
            />
          </div>
        </div>
        
        {/* Badge Online */}
        <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-green-500 text-black text-[10px] font-black uppercase rounded-full shadow-lg">
          Online
        </div>
      </div>

      <div className="mt-10 text-center">
        <h1 className="text-5xl font-black tracking-tighter italic text-white neon-text">
          DR SPEED <span className="text-white/40">NORD</span>
        </h1>
        <p className="mt-2 text-gray-500 text-[10px] tracking-[0.5em] uppercase font-bold">
          Premium Quality Only
        </p>
      </div>
    </div>
  );
};

export default Header;