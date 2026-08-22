"use client";

import React from 'react';
import Header from '@/components/Header';
import ActionCards from '@/components/ActionCards';

const Index = () => {
  return (
    <div className="min-h-screen pb-12">
      <Header />
      
      <div className="px-4 mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
            Accès Rapides
          </h2>
        </div>
        <ActionCards />
      </div>

      <div className="px-4 mt-10">
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-6 border border-white/5">
          <h3 className="text-purple-400 font-bold mb-2 italic uppercase tracking-wider">Nouveautés</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Découvrez les dernières mises à jour de Dr Speed Nord directement sur notre canal Telegram.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;