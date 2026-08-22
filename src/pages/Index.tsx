"use client";

import React from 'react';
import Header from '@/components/Header';
import ActionCards from '@/components/ActionCards';

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center">
      <Header />
      
      <main className="w-full space-y-8">
        <ActionCards />

        <div className="px-6 w-full max-w-sm mx-auto">
          <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-5 rounded-2xl">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Annonce</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Livraisons disponibles tous les jours. Pour toute question, contactez le support via Telegram.
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-10 text-center">
        <p className="text-[10px] text-gray-700 font-bold uppercase tracking-widest">
          © 2024 Dr Speed Nord
        </p>
      </footer>
    </div>
  );
};

export default Index;