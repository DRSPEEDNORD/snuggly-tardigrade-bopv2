"use client";

import React from 'react';
import { MapPin, Truck, Package, CheckCircle2, MessageSquare, Instagram, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const InfoSection = ({ title, emoji, children }: { title: string, emoji: string, children: React.ReactNode }) => (
  <div className="space-y-4 mb-8">
    <h2 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] flex items-center gap-2 px-2">
      {title} {emoji}
    </h2>
    <div className="space-y-3">
      {children}
    </div>
  </div>
);

const Infos = () => {
  return (
    <div className="min-h-screen pb-32 pt-12 px-6 max-w-md mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Informations</h1>
        <div className="w-12 h-0.5 bg-white/10 mx-auto rounded-full"></div>
      </div>

      <InfoSection title="Zones de livraison" emoji="🌍">
        <div className="grid grid-cols-2 gap-3">
          <div className="druid-card flex items-center gap-3 p-4">
            <div className="bg-white/10 p-2 rounded-xl"><MapPin size={20} className="text-white/70" /></div>
            <span className="text-sm font-semibold">Meet-up 59</span>
          </div>
          <div className="druid-card flex items-center gap-3 p-4">
            <div className="bg-white/10 p-2 rounded-xl"><Truck size={20} className="text-white/70" /></div>
            <span className="text-sm font-semibold leading-tight">Livraison 59/62/02/80</span>
          </div>
        </div>
        <div className="druid-card flex items-center gap-4 p-4">
          <div className="bg-white/10 p-2 rounded-xl"><Package size={20} className="text-white/70" /></div>
          <p className="text-sm font-semibold">Envoi de colis dans toute la France 🇫🇷 et l'Europe 🇪🇺</p>
        </div>
      </InfoSection>

      <InfoSection title="Emballage & Assurance" emoji="🛡️">
        <div className="druid-card flex items-start gap-4">
          <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={20} />
          <p className="text-sm font-medium text-white/80">Remboursement à 100% du colis en cas de perte/saisie</p>
        </div>
        <div className="druid-card flex items-start gap-4">
          <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={20} />
          <p className="text-sm font-medium text-white/80">3x sous vide, double carton — emballage premium</p>
        </div>
      </InfoSection>

      <InfoSection title="Moyens de contact" emoji="📱">
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Telegram', icon: Send, color: 'text-sky-400' },
            { name: 'Instagram', icon: Instagram, color: 'text-pink-400' },
            { name: 'Luffa', icon: MessageSquare, color: 'text-purple-400' },
            { name: 'Support', icon: MessageSquare, color: 'text-emerald-400' },
          ].map((item) => (
            <a key={item.name} href="#" className="druid-card flex flex-col items-center gap-3 py-6 text-center group">
              <div className={cn("p-3 rounded-full bg-white/5 group-hover:scale-110 transition-transform", item.color)}>
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-sm">{item.name}</h3>
                <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">Ouvrir</span>
              </div>
            </a>
          ))}
        </div>
      </InfoSection>

      <footer className="text-center py-8 opacity-20">
        <p className="text-[10px] font-bold tracking-[0.3em]">© 2024 DR SPEED NORD</p>
      </footer>
    </div>
  );
};

export default Infos;