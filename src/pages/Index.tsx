"use client";

import React from 'react';
import Header from '@/components/Header';
import ActionCards from '@/components/ActionCards';

const Index = () => {
  return (
    <div className="min-h-screen max-w-lg mx-auto pb-24">
      <Header />
      
      <main className="mt-4 space-y-16">
        <ActionCards />

        <div className="px-8">
          <div className="p-10 border border-white/5 bg-white/[0.01] relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-white/10"></div>
            <h4 className="text-[10px] tracking-[0.5em] text-white/60 uppercase mb-6 font-bold">Note de service</h4>
            <p className="text-sm text-white/40 leading-relaxed font-light tracking-wide italic">
              "La qualité n'est pas un acte, c'est une habitude. Notre catalogue est mis à jour quotidiennement pour garantir l'excellence."
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-32 text-center opacity-20">
        <p className="text-[8px] tracking-[0.6em] uppercase">
          Établi en 2024 — Dr Speed Nord
        </p>
      </footer>
    </div>
  );
};

export default Index;