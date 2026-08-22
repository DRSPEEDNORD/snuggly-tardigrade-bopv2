"use client";

import React from 'react';

const Header = () => {
  return (
    <header className="w-full pt-16 pb-8 px-6 flex flex-col items-center text-center">
      {/* Logo Container avec Masquage Avancé */}
      <div className="relative w-full max-w-[380px] aspect-[16/9] mb-6 flex items-center justify-center group">
        
        {/* Lueur diffuse très large derrière */}
        <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-[100px] scale-150 opacity-30"></div>
        
        <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
          {/* L'image avec un masque d'opacité radial pour des bords invisibles */}
          <img 
            src="/logo.jpg" 
            alt="Dr Speed Nord" 
            className="w-full h-full object-contain opacity-80 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-105"
            style={{
              maskImage: 'radial-gradient(circle, black 30%, rgba(0, 0, 0, 0.5) 60%, transparent 95%)',
              WebkitMaskImage: 'radial-gradient(circle, black 30%, rgba(0, 0, 0, 0.5) 60%, transparent 95%)'
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = '<span class="text-6xl font-black text-emerald-400 italic tracking-tighter">DSN</span>';
              }
            }}
          />
          
          {/* Overlay de couleur pour harmoniser les tons de l'image avec le site */}
          <div className="absolute inset-0 bg-[#050c0a]/20 pointer-events-none"></div>
        </div>

        {/* Effet de reflet qui passe sur le logo au survol */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] duration-[1500ms]"></div>
      </div>

      <div className="space-y-2 relative z-10">
        <h1 className="text-4xl font-black italic tracking-tighter text-white cyber-glow-text uppercase">
          DR SPEED <span className="text-emerald-400">NORD</span>
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-emerald-500/40"></div>
          <p className="text-[10px] font-bold tracking-[0.5em] text-emerald-500/70 uppercase">
            PREMIUM SELECTION
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-emerald-500/40"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;