"use client";

import React from 'react';
import Header from '@/components/Header';
import ActionCards from '@/components/ActionCards';
import BackgroundEffects from '@/components/BackgroundEffects';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pb-40 relative bg-[#010402]">
      <BackgroundEffects />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full z-10"
      >
        <Header />
      </motion.div>
      
      <main className="w-full flex-1 flex flex-col justify-center z-10">
        <ActionCards />
      </main>

      <footer className="w-full mt-auto pt-16 pb-8 z-10">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-emerald-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></div>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-emerald-500/50"></div>
          </div>
          <p className="text-[9px] text-white/20 font-black uppercase tracking-[0.8em] text-center">
            DR SPEED NORD • SECURED ECOSYSTEM
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;