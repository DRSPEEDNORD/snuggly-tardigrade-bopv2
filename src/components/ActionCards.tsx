"use client";

import React from 'react';
import { Send, ShoppingCart, ChevronRight } from 'lucide-react';

const ActionCards = () => {
  return (
    <div className="flex flex-col gap-3 px-6 w-full max-w-sm mx-auto">
      <a 
        href="https://t.me/votre_canal" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="card-action flex items-center p-5"
      >
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mr-4">
          <Send size={24} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-white">Canal Telegram</h3>
          <p className="text-xs text-gray-500">Rejoindre la communauté</p>
        </div>
        <ChevronRight size={18} className="text-gray-700" />
      </a>

      <a 
        href="https://votre-autre-app.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="card-action flex items-center p-5"
      >
        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 mr-4">
          <ShoppingCart size={24} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-white">Boutique en ligne</h3>
          <p className="text-xs text-gray-500">Passer une commande</p>
        </div>
        <ChevronRight size={18} className="text-gray-700" />
      </a>
    </div>
  );
};

export default ActionCards;