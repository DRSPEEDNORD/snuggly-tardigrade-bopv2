"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const ActionCards = () => {
  return (
    <div className="flex flex-col gap-6 px-8">
      <a 
        href="https://t.me/votre_canal" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group flex items-center justify-between py-8 border-b border-white/10 hover:border-white/40 transition-all duration-500"
      >
        <div className="space-y-1">
          <h3 className="text-xl font-light tracking-widest uppercase group-hover:pl-2 transition-all duration-500">Telegram</h3>
          <p className="text-[9px] text-white/30 tracking-[0.2em] uppercase">Accès au canal officiel</p>
        </div>
        <ArrowRight size={18} className="text-white/20 group-hover:text-white group-hover:translate-x-2 transition-all" />
      </a>

      <a 
        href="https://votre-autre-app.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group flex items-center justify-between py-8 border-b border-white/10 hover:border-white/40 transition-all duration-500"
      >
        <div className="space-y-1">
          <h3 className="text-xl font-light tracking-widest uppercase group-hover:pl-2 transition-all duration-500">Services</h3>
          <p className="text-[9px] text-white/30 tracking-[0.2em] uppercase">Plateforme de commande</p>
        </div>
        <ArrowRight size={18} className="text-white/20 group-hover:text-white group-hover:translate-x-2 transition-all" />
      </a>
    </div>
  );
};

export default ActionCards;