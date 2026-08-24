"use client";

import React from 'react';
import { 
  Smartphone, 
  Bell, 
  Zap, 
  ArrowRight,
  Download,
  ShieldCheck,
  ShoppingBag,
  ChevronRight
} from 'lucide-react';
import BackgroundEffects from '@/components/BackgroundEffects';
import { motion } from 'framer-motion';

const StepCard = ({ 
  number, 
  title, 
  description, 
  icon: Icon, 
  delay 
}: { 
  number: string, 
  title: string, 
  description: string, 
  icon: any,
  delay: number
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="relative group overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-emerald-500/10 backdrop-blur-2xl p-8 transition-all duration-500 hover:border-emerald-500/30"
  >
    <div className="flex flex-col gap-6 relative z-10">
      <div className="flex justify-between items-start">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/5 flex items-center justify-center text-emerald-400 border border-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
          <Icon size={28} strokeWidth={1.5} />
        </div>
        <span className="text-[10px] font-black text-emerald-500/40 tracking-[0.3em] uppercase">{number}</span>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-black italic uppercase tracking-tight text-white flex items-center gap-2">
          {title}
          <ChevronRight size={18} className="text-emerald-500/50 group-hover:translate-x-1 transition-transform" />
        </h3>
        <p className="text-[11px] text-white/30 leading-relaxed font-bold uppercase tracking-wider">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const Infos = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pb-40 relative bg-[#010402] overflow-x-hidden">
      {/* Background avec Halo et Grille Subtile */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98105_1px,transparent_1px),linear-gradient(to_bottom,#10b98105_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#064e3b44_0%,#010402_70%)]" />
        <div className="scanline opacity-10" />
      </div>
      
      <div className="w-full max-w-md px-6 pt-20 z-10">
        {/* Header Section - Style "RESTEZ INFORMÉ" */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <Zap size={32} className="text-emerald-400 fill-emerald-400/20" />
          </div>
          
          <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-[0.85] text-white drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
            GUIDE <br />
            <span className="text-emerald-400">SYSTÈME</span>
          </h1>
          
          <div className="mt-6 space-y-1">
            <p className="text-[10px] text-emerald-500/60 font-black uppercase tracking-[0.3em]">
              Optimisation & Performance
            </p>
            <p className="text-[9px] text-white/20 font-bold uppercase tracking-[0.1em]">
              Suivez les étapes pour une expérience totale
            </p>
          </div>
        </motion.div>

        {/* Steps Container */}
        <div className="space-y-6">
          <StepCard 
            number="STEP 01"
            title="Installation PWA"
            description="Ajoutez l'application à votre écran d'accueil pour un accès instantané et sécurisé."
            icon={Download}
            delay={0.1}
          />

          <StepCard 
            number="STEP 02"
            title="Alertes Push"
            description="Activez les notifications pour ne manquer aucun arrivage ou exclusivité."
            icon={Bell}
            delay={0.2}
          />

          <StepCard 
            number="STEP 03"
            title="Navigation"
            description="Explorez le catalogue complet et profitez de la rapidité Dr Speed Nord."
            icon={ShoppingBag}
            delay={0.3}
          />
        </div>

        {/* Bouton Action Style "MENU OFFICIEL" */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <button className="w-full py-6 rounded-[2rem] bg-gradient-to-b from-emerald-400 to-emerald-600 text-black font-black italic uppercase tracking-tighter text-xl shadow-[0_15px_30px_-10px_rgba(16,185,129,0.5)] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
            RETOUR ACCUEIL <ArrowRight size={22} />
          </button>
        </motion.div>

        {/* Footer Note */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-emerald-500/20"></div>
            <ShieldCheck size={14} className="text-emerald-500/40" />
            <div className="h-[1px] w-8 bg-emerald-500/20"></div>
          </div>
          <p className="text-[8px] font-black tracking-[0.5em] uppercase text-white/10">
            DR SPEED NORD ECOSYSTEM v2.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default Infos;