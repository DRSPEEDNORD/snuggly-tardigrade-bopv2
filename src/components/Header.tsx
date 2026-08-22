"use client";

import React from 'react';

const Header = () => {
  return (
    <header className="w-full pt-12 pb-8 px-6 flex flex-col items-center text-center">
      {/* Logo Container */}
      <div className="relative w-40 h-40 mb-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-cyan-500/30 bg-black/40 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.15)]">
          <img 
            src="/logo.jpg" 
            alt="Dr Speed Nord" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = '<span class="text-4xl font-black text-cyan-400 italic">DSN</span>';
              }
            }}
          />
        </div>
      </div>

      <div className="space-y-1">
        <h1 className="text-4xl font-black italic tracking-tighter text-white cyber-glow-text uppercase">
          DR SPEED NORD
        </h1>
        <p className="text-[10px] font-bold tracking-[0.3em] text-cyan-500/60 uppercase">
          PREMIUM QUALITY ONLY
        </p>
      </div>
    </header>
  );
};

export default Header;