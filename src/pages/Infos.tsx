"use client";

import React from 'react';
import { 
  Smartphone, 
  Bell, 
  Zap, 
  ArrowRight,
  Download,
  ShieldCheck,
  ShoppingBag
} from 'lucide-react';

const StepCard = ({ 
  number, 
  title, 
  description, 
  icon: Icon, 
  colorClass 
}: { 
  number: string, 
  title: string, 
  description: string, 
  icon: any,
  colorClass: string 
}) => (
  <div className="druid-card relative overflow-hidden group border-white/5 hover:border-white/10 transition-all duration-500">
    <div className={`absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500`}>
      <Icon size={120} />
    </div>
    
    <div className="flex items-start gap-4 relative z-10">
      <div className={`w-12 h-12 rounded-2xl ${colorClass} flex items-center justify-center shrink-0 shadow-lg`}>
        <Icon size={24} className="text-white" />
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black text-emerald-500/50 tracking-widest">{number}</span>
          <h3 className="text-sm font-black uppercase italic tracking-wide">{title}</h3>
        </div>
        <p className="text-[12px] text-white/60 leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Infos = () => {
  return (
    <div className="min-h-screen pb-36 pt-8 px-5 max-w-md mx-auto">
      {/* Header */}
      <div className="flex flex-col mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-[2px] w-8 bg-emerald-500"></div>
          <span className="text-[10px] font-black text-emerald-500 tracking-[0.3em] uppercase">Innovation Dr. Speed</span>
        </div>
        <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">
          ÉCOSYSTÈME <span className="text-emerald-400">DR SPEED NORD</span>
        </h1>
        <p className="text-[11px] text-white/30 font-bold mt-2 uppercase tracking-wider">
          Comment utiliser nos services
        </p>
      </div>

      {/* Steps Container */}
      <div className="space-y-4">
        <StepCard 
          number="ÉTAPE 01"
          title="Le Portail (Ici)"
          description="Cette application est votre accès sécurisé. Elle sert de pont pour installer la plateforme principale sans passer par les stores classiques."
          icon={Zap}
          colorClass="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
        />

        <div className="flex justify-center py-1">
          <ArrowRight size={20} className="text-white/10 animate-pulse" />
        </div>

        <StepCard 
          number="ÉTAPE 02"
          title="Installation PWA"
          description="Cliquez sur 'Installer' à l'accueil. Une fois ajoutée à votre écran d'accueil, vous aurez accès à notre plateforme optimisée."
          icon={Download}
          colorClass="bg-blue-500/20 text-blue-400 border border-blue-500/30"
        />

        <div className="flex justify-center py-1">
          <ArrowRight size={20} className="text-white/10 animate-pulse" />
        </div>

        <StepCard 
          number="ÉTAPE 03"
          title="Notifications"
          description="Activez les notifications sur la PWA pour recevoir les alertes de stock, les nouveaux produits et le suivi de vos commandes en temps réel."
          icon={Bell}
          colorClass="bg-purple-500/20 text-purple-400 border border-purple-500/30"
        />

        <div className="flex justify-center py-1">
          <ArrowRight size={20} className="text-white/10 animate-pulse" />
        </div>

        <StepCard 
          number="ÉTAPE 04"
          title="Menu & Produits"
          description="Explorez tout notre menu, passez vos commandes et gérez votre profil en toute simplicité sur votre nouvelle application."
          icon={ShoppingBag}
          colorClass="bg-orange-500/20 text-orange-400 border border-orange-500/30"
        />
      </div>

      {/* Security Note */}
      <div className="mt-10 p-5 rounded-[2rem] bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10">
        <div className="flex items-center gap-3 mb-3">
          <ShieldCheck size={18} className="text-emerald-400" />
          <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400">Confidentialité Totale</span>
        </div>
        <p className="text-[11px] text-white/50 leading-relaxed font-medium">
          L'utilisation de la PWA permet de contourner les restrictions des stores tout en garantissant un anonymat complet et une sécurité renforcée.
        </p>
      </div>

      <div className="text-center mt-12 opacity-10">
        <p className="text-[9px] font-black tracking-[0.5em] uppercase">Dr Speed Nord Ecosystem</p>
      </div>
    </div>
  );
};

export default Infos;