"use client";

import React from 'react';
import { 
  Share, 
  Compass, 
  MoreHorizontal, 
  ArrowUp, 
  Smartphone,
  AlertCircle
} from 'lucide-react';
import BackgroundEffects from '@/components/BackgroundEffects';
import { motion } from 'framer-motion';

const SnapGuide = () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <div className="min-h-screen flex flex-col items-center pb-40 relative bg-[#010402] overflow-x-hidden">
      <BackgroundEffects />
      
      <div className="w-full max-w-md px-6 pt-16 z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col mb-10 text-center"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 self-center">
            <AlertCircle size={14} className="text-yellow-400" />
            <span className="text-[9px] font-black text-yellow-400 tracking-widest uppercase">Action Requise</span>
          </div>
          <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none text-white">
            OUVRIR DANS <br />
            <span className="text-emerald-400 glow-emerald">VOTRE NAVIGATEUR</span>
          </h1>
          <p className="text-[10px] text-white/40 font-black mt-4 uppercase tracking-[0.2em] leading-relaxed">
            Snapchat bloque l'installation. Suivez ces étapes pour accéder à Dr Speed Nord.
          </p>
        </motion.div>

        {/* Instructions Container */}
        <div className="space-y-6">
          {isIOS ? (
            // Instructions iOS (Safari)
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 p-8 flex flex-col items-center text-center gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <Compass size={32} />
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-black text-emerald-500/50 tracking-widest uppercase">Étape 01</span>
                  <h3 className="text-lg font-black text-white uppercase italic">Appuyez sur les 3 points</h3>
                  <p className="text-[11px] text-white/40 font-bold uppercase">En haut à droite de votre écran Snapchat</p>
                  <div className="mt-2 p-2 bg-white/5 rounded-lg">
                    <MoreHorizontal size={24} className="text-white/60" />
                  </div>
                </div>

                <div className="w-full h-[1px] bg-white/5"></div>

                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-black text-emerald-500/50 tracking-widest uppercase">Étape 02</span>
                  <h3 className="text-lg font-black text-white uppercase italic">Ouvrir dans Safari</h3>
                  <p className="text-[11px] text-white/40 font-bold uppercase">Sélectionnez l'option pour quitter Snapchat</p>
                  <div className="mt-2 p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                    <Share size={24} className="text-emerald-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            // Instructions Android (Navigateur)
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 p-8 flex flex-col items-center text-center gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <Smartphone size={32} />
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-black text-blue-500/50 tracking-widest uppercase">Étape 01</span>
                  <h3 className="text-lg font-black text-white uppercase italic">Appuyez sur les 3 points</h3>
                  <p className="text-[11px] text-white/40 font-bold uppercase">Situés en haut à droite de Snapchat</p>
                  <div className="mt-2 p-2 bg-white/5 rounded-lg">
                    <MoreHorizontal size={24} className="text-white/60" />
                  </div>
                </div>

                <div className="w-full h-[1px] bg-white/5"></div>

                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-black text-blue-500/50 tracking-widest uppercase">Étape 02</span>
                  <h3 className="text-lg font-black text-white uppercase italic">Ouvrir dans le navigateur</h3>
                  <p className="text-[11px] text-white/40 font-bold uppercase">Sélectionnez l'option pour quitter Snapchat</p>
                  <div className="mt-2 p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                    <Share size={24} className="text-blue-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Visual Indicator */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <ArrowUp size={24} className="text-emerald-400" />
          <span className="text-[8px] font-black text-white/20 tracking-[0.5em] uppercase">Regardez en haut</span>
        </motion.div>

        <div className="mt-20 text-center opacity-10">
          <p className="text-[8px] font-black tracking-[0.6em] uppercase text-white">Dr Speed Nord Security Protocol</p>
        </div>
      </div>
    </div>
  );
};

export default SnapGuide;