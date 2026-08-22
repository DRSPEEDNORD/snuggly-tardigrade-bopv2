"use client";

import React from 'react';
import { Send, Smartphone, Heart } from 'lucide-react';

const ActionCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 mt-8">
      <a href="https://t.me/votre_canal" target="_blank" rel="noopener noreferrer" className="group relative bg-[#161622] rounded-3xl p-6 border border-white/5 overflow-hidden transition-all hover:border-purple-500/50">
        <div className="absolute top-3 right-3 bg-pink-500/20 p-1.5 rounded-full text-pink-500">
          <Heart size={14} fill="currentColor" />
        </div>
        <div className="bg-blue-500/20 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-400 mb-4">
          <Send size={24} />
        </div>
        <h3 className="font-bold text-lg">Telegram</h3>
        <p className="text-xs text-gray-500 mt-1">Rejoindre le canal</p>
      </a>

      <a href="https://votre-autre-app.com" target="_blank" rel="noopener noreferrer" className="group relative bg-[#161622] rounded-3xl p-6 border border-white/5 overflow-hidden transition-all hover:border-purple-500/50">
        <div className="bg-purple-500/20 w-12 h-12 rounded-2xl flex items-center justify-center text-purple-400 mb-4">
          <Smartphone size={24} />
        </div>
        <h3 className="font-bold text-lg">Mon App</h3>
        <p className="text-xs text-gray-500 mt-1">Accéder au service</p>
      </a>
    </div>
  );
};

export default ActionCards;