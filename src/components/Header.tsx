"use client";

import React from 'react';

const Header = () => {
  return (
    <header className="w-full pt-16 pb-12 px-6 flex flex-col items-center text-center relative overflow-hidden">
      {/* Logo Circulaire avec Glow */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full scale-150"></div>
        <div className="relative w-36 h-36 rounded-full p-[2px] bg-gradient-to-b from-emerald-500 via-emerald-500/20 to-transparent">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#020604] flex items-center justify-center border border-white/5">
            <img 
              src="/logo.jpg" 
              alt="Dr Speed Nord" 
              className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-1000"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.innerHTML = '<span class="text-4xl font-black text-emerald-400 italic glow-text">DSN</span>';
                }
              }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3 relative z-10">
        <h1 className="text-5xl font-black italic tracking-tighter text-white uppercase leading-none">
          DR SPEED <span className="text-emerald-400 glow-text">NORD</span>
        </h1>
        
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-emerald-500/50"></div>
          <p className="text-[10px] font-black tracking-[0.5em] text-emerald-500/80 uppercase">
            Premium Selection
          </p>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-emerald-500/50"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;