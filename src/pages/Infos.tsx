"use client";

import React, { useState } from 'react';
import { 
  Smartphone, 
  Bell, 
  Zap, 
  ArrowRight,
  Download,
  ShieldCheck,
  ShoppingBag,
  PlayCircle,
  Apple
} from 'lucide-react';
import BackgroundEffects from '@/components/BackgroundEffects';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from '@/lib/utils';

const StepCard = ({ 
  number, 
  title, 
  description, 
  icon: Icon, 
  colorClass,
  delay,
  children
}: { 
  number: string, 
  title: string, 
  description: string, 
  icon: any,
  colorClass: string,
  delay: number,
  children?: React.ReactNode
}) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="relative overflow-hidden rounded-[2rem] bg-black/40 border border-white/5 hover:border-white/10 transition-all duration-500 p-6 group"
  >
    <div className={`absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500`}>
      <Icon size={120} />
    </div>
    
    <div className="flex items-start gap-4 relative z-10">
      <div className={`w-12 h-12 rounded-xl ${colorClass} flex items-center justify-center shrink-0 shadow-lg`}>
        <Icon size={24} className="text-white" />
      </div>
      <div className="space-y-3 flex-1">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-black text-emerald-500/50 tracking-widest">{number}</span>
            <h3 className="text-sm font-black uppercase italic tracking-tight text-white">{title}</h3>
          </div>
          <p className="text-[11px] text-white/40 leading-relaxed font-bold uppercase tracking-wide">
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  </motion.div>
);

const Infos = () => {
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios');

  return (
    <div className="min-h-screen flex flex-col items-center pb-40 relative bg-[#010402] overflow-x-hidden">
      <BackgroundEffects />
      
      <div className="w-full max-w-md px-6 pt-16 z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[1px] w-8 bg-emerald-500"></div>
            <span className="text-[9px] font-black text-emerald-500 tracking-[0.3em] uppercase">Innovation Dr. Speed</span>
          </div>
          <h1 className="text-4xl font-black italic tracking-tighter uppercase leading-none text-white">
            ÉCOSYSTÈME <br />
            <span className="text-emerald-400 glow-emerald">DR SPEED NORD</span>
          </h1>
          <p className="text-[10px] text-white/20 font-black mt-4 uppercase tracking-[0.2em]">
            GUIDE D'UTILISATION DES SERVICES
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="space-y-4">
          <StepCard 
            number="ÉTAPE 01"
            title="Le Portail (Ici)"
            description="Cette application est votre accès sécurisé. Elle sert de pont pour installer l'app principale."
            icon={Zap}
            colorClass="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            delay={0.1}
          />

          <div className="flex justify-center py-1">
            <ArrowRight size={16} className="text-white/10 animate-pulse" />
          </div>

          <StepCard 
            number="ÉTAPE 02"
            title="Installation de l'app"
            description="Cliquez sur 'Installer' à l'accueil. Ajoutez-la à votre écran d'accueil pour un accès optimisé."
            icon={Download}
            colorClass="bg-blue-500/10 text-blue-400 border border-blue-500/20"
            delay={0.2}
          >
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/btn">
                  <PlayCircle size={16} className="text-blue-400 group-hover/btn:scale-110 transition-transform" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-white">Voir les tutos vidéos</span>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-[#010402] border-white/10 text-white max-w-[90vw] sm:max-w-[400px] rounded-[2.5rem] p-0 overflow-hidden">
                <DialogHeader className="p-6 pb-4">
                  <DialogTitle className="text-sm font-black uppercase italic tracking-widest text-blue-400 flex items-center gap-2">
                    <PlayCircle size={16} /> Tutoriels d'installation
                  </DialogTitle>
                  
                  <div className="flex gap-2 mt-4">
                    <button 
                      onClick={() => setPlatform('ios')}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border transition-all text-[10px] font-black uppercase tracking-widest",
                        platform === 'ios' 
                          ? "bg-white/10 border-white/20 text-white" 
                          : "bg-transparent border-white/5 text-white/30 hover:text-white/50"
                      )}
                    >
                      <Apple size={14} /> iOS
                    </button>
                    <button 
                      onClick={() => setPlatform('android')}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border transition-all text-[10px] font-black uppercase tracking-widest",
                        platform === 'android' 
                          ? "bg-white/10 border-white/20 text-white" 
                          : "bg-transparent border-white/5 text-white/30 hover:text-white/50"
                      )}
                    >
                      <Smartphone size={14} /> Android
                    </button>
                  </div>
                </DialogHeader>
                
                <div className="w-full bg-black flex items-center justify-center overflow-hidden" style={{ height: '60vh' }}>
                  <video 
                    key={platform}
                    className="w-full h-full object-contain"
                    controls
                    playsInline
                    src={platform === 'ios' ? "/assets/tuto-ios.mp4" : "/assets/tuto-android.mp4"}
                  />
                </div>
                
                <div className="p-4 bg-white/5 text-center">
                  <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">DR SPEED NORD PROTOCOL</p>
                </div>
              </DialogContent>
            </Dialog>
          </StepCard>

          <div className="flex justify-center py-1">
            <ArrowRight size={16} className="text-white/10 animate-pulse" />
          </div>

          <StepCard 
            number="ÉTAPE 03"
            title="Notifications"
            description="Activer les alertes sur l'app pour le suivi de vos commandes et les nouveaux stocks."
            icon={Bell}
            colorClass="bg-purple-500/10 text-purple-400 border border-purple-500/20"
            delay={0.3}
          />

          <div className="flex justify-center py-1">
            <ArrowRight size={16} className="text-white/10 animate-pulse" />
          </div>

          <StepCard 
            number="ÉTAPE 04"
            title="Menu & Produits"
            description="Explorez tout notre catalogue et passez vos commandes en toute simplicité sur l'app."
            icon={ShoppingBag}
            colorClass="bg-orange-500/10 text-orange-400 border border-orange-500/20"
            delay={0.4}
          />
        </div>

        {/* Security Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 rounded-[2.5rem] bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldCheck size={40} className="text-emerald-400" />
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Confidentialité Totale</span>
          </div>
          <p className="text-[10px] text-white/40 leading-relaxed font-bold uppercase tracking-wider">
            L'utilisation de l'app garantit un anonymat complet et une sécurité renforcée hors des stores classiques.
          </p>
        </motion.div>

        <div className="text-center mt-16 opacity-10">
          <p className="text-[8px] font-black tracking-[0.6em] uppercase text-white">Dr Speed Nord Ecosystem</p>
        </div>
      </div>
    </div>
  );
};

export default Infos;