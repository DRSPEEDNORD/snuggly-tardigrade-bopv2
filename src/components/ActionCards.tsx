"use client";

import React from 'react';
import { Download, ArrowUpRight, Zap, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ActionCards = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 px-6 w-full max-w-md mx-auto"
    >
      {/* Carte Installer l'App */}
      <motion.a
        variants={item}
        href="https://electric-walrus-rest-b0jr0t.dappling.network/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group overflow-hidden rounded-[2rem] bg-black/40 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 p-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10 flex flex-col gap-5">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/5 text-emerald-400 border border-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
              <Download size={24} strokeWidth={1.5} />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[8px] font-black text-emerald-500 tracking-widest uppercase">EXCLUSIVITÉ DRSPEEDNORD</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-white tracking-tight uppercase italic leading-none flex items-center gap-2">
                INSTALLER L'APP <Zap size={18} className="text-emerald-400 fill-emerald-400/20" />
              </h3>
              <ArrowUpRight size={18} className="text-white/10 group-hover:text-emerald-400 transition-colors" />
            </div>
            <p className="text-[9px] text-white/30 font-bold uppercase tracking-wider">
              ACCÈS DIRECT À NOTRE PLATEFORME SÉCURISÉE.
            </p>
          </div>
        </div>
      </motion.a>

      {/* Carte Tutoriel Vidéo */}
      <Dialog>
        <DialogTrigger asChild>
          <motion.button 
            variants={item}
            className="relative group overflow-hidden rounded-[2rem] bg-black/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500 p-6 text-left w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 flex items-center gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/5 text-blue-400 border border-blue-500/10 group-hover:border-blue-500/30 transition-all shrink-0">
                <PlayCircle size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              </div>
              
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-white tracking-tight uppercase italic leading-none">
                    TUTO INSTALLATION
                  </h3>
                  <ArrowUpRight size={18} className="text-white/10 group-hover:text-blue-400 transition-colors" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse"></div>
                  <span className="text-[9px] font-black text-blue-400/70 uppercase tracking-widest">GUIDE VIDÉO RAPIDE</span>
                </div>
              </div>
            </div>
          </motion.button>
        </DialogTrigger>
        <DialogContent className="bg-[#010402] border-white/10 text-white max-w-[90vw] rounded-[2.5rem] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="text-sm font-black uppercase italic tracking-widest text-blue-400 flex items-center gap-2">
              <PlayCircle size={16} /> Tutoriel d'installation
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-[9/16] w-full bg-black relative">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/votre_id_video" 
              title="Tuto Installation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4 bg-white/5 text-center">
            <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">DR SPEED NORD PROTOCOL</p>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default ActionCards;