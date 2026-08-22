"use client";

import React from 'react';
import { Send, ShoppingBag, ChevronRight } from 'lucide-react';

const ActionCards = () => {
  return (
    <div className="flex flex-col gap-4 px-6">
      <a 
        href="https://t.me/votre_canal" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-premium group flex items-center p-6 rounded-3xl"
      >
        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
          <Send size={24} />
        </div>
        <div className="ml-5 flex-1">
          <h3 className="text-lg font-bold text-white tracking-tight">TELEGRAM</h3>
          <p className="text-xs text-gray-500 font-medium">Rejoindre le canal privé</p>
        </div>
        <ChevronRight size={20} className="text-gray-700 group-hover:text-white transition-colors" />
      </a>

      <a 
        href="https://votre-autre-app.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-premium group flex items-center p-6 rounded-3xl"
      >
        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
          <ShoppingBag size={24} />
        </div>
        <div className="ml-5 flex-1">
          <h3 className="text-lg font-bold text-white tracking-tight">BOUTIQUE</h3>
          <p className="text-xs text-gray-500 font-medium">Passer une commande</p>
        </div>
        <ChevronRight size={20} className="text-gray-700 group-hover:text-white transition-colors" />
      </a>
    </div>
  );
};

export default ActionCards;