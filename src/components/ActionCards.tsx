"use client";

import React from 'react';
import { Send, ShoppingBag, ChevronRight, Sparkles } from 'lucide-react';

const ActionCards = () => {
  return (
    <div className="flex flex-col gap-4 px-8 w-full max-w-md mx-auto">
      <a 
        href="https://t.me/votre_canal" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="action-button group"
      >
        <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
          <Send size={24} strokeWidth={1.5} />
        </div>
        <div className="ml-5 flex-1 text-left">
          <h3 className="text-lg font-semibold text-white/90 tracking-tight">Canal Telegram</h3>
          <p className="text-xs text-white/30">Rejoignez notre communauté privée</p>
        </div>
        <ChevronRight size={18} className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
      </a>

      <a 
        href="https://votre-autre-app.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="action-button group"
      >
        <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
          <ShoppingBag size={24} strokeWidth={1.5} />
        </div>
        <div className="ml-5 flex-1 text-left">
          <h3 className="text-lg font-semibold text-white/90 tracking-tight">Boutique Officielle</h3>
          <p className="text-xs text-white/30">Consultez nos produits exclusifs</p>
        </div>
        <ChevronRight size={18} className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
      </a>
    </div>
  );
};

export default ActionCards;