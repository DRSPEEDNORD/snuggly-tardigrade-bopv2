"use client";

import React from 'react';
import { MapPin, Truck, Package, ShieldCheck, MessageSquare, Instagram, Send, Headphones } from 'lucide-react';
import { cn } from '@/lib/utils';

const InfoSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-[11px] font-bold text-white/30 uppercase tracking-[0.15em] mb-4 px-1">
      {title}
    </h2>
    <div className="space-y-3">
      {children}
    </div>
  </div>
);

const Infos = () => {
  return (
    <div className="min-h-screen pb-36 pt-8 px-5 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Informations</h1>
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
          <span className="text-xs">✨</span>
        </div>
      </div>

      <InfoSection title="ZONES DE LIVRAISON 🌍">
        <div className="grid grid-cols-2 gap-3">
          <div className="druid-card flex flex-col items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <MapPin size={20} className="text-emerald-500" />
            </div>
            <span className="text-[13px] font-bold leading-tight">Meet-up 59<br/><span className="text-white/40 font-medium">Lille & alentours</span></span>
          </div>
          <div className="druid-card flex flex-col items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Truck size={20} className="text-blue-500" />
            </div>
            <span className="text-[13px] font-bold leading-tight">Livraison<br/><span className="text-white/40 font-medium">59 / 62 / 02 / 80</span></span>
          </div>
        </div>
        <div className="druid-card flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
            <Package size={20} className="text-orange-500" />
          </div>
          <p className="text-[13px] font-bold leading-snug">Envoi de colis dans toute la France 🇫🇷 et l'Europe 🇪🇺</p>
        </div>
      </InfoSection>

      <InfoSection title="EMBALLAGE & ASSURANCE 🛡️">
        <div className="druid-card flex items-start gap-4">
          <div className="mt-0.5">
            <ShieldCheck className="text-emerald-500" size={20} />
          </div>
          <p className="text-[13px] font-bold text-white/90 leading-snug">
            Remboursement à 100% du colis en cas de perte ou de saisie.
          </p>
        </div>
        <div className="druid-card flex items-start gap-4">
          <div className="mt-0.5">
            <ShieldCheck className="text-emerald-500" size={20} />
          </div>
          <p className="text-[13px] font-bold text-white/90 leading-snug">
            3x sous vide, double carton — emballage premium et discret.
          </p>
        </div>
      </InfoSection>

      <InfoSection title="MOYENS DE CONTACT 📱">
        <div className="grid grid-cols-2 gap-3">
          <a href="#" className="druid-card flex flex-col items-center text-center py-6">
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-3">
              <Send size={24} className="text-sky-400" />
            </div>
            <span className="text-sm font-bold">Telegram</span>
            <span className="text-[10px] text-white/20 font-bold mt-1 uppercase tracking-widest">Rejoindre</span>
          </a>
          <a href="#" className="druid-card flex flex-col items-center text-center py-6">
            <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-3">
              <Instagram size={24} className="text-pink-400" />
            </div>
            <span className="text-sm font-bold">Instagram</span>
            <span className="text-[10px] text-white/20 font-bold mt-1 uppercase tracking-widest">Suivre</span>
          </a>
          <a href="#" className="druid-card flex flex-col items-center text-center py-6">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-3">
              <MessageSquare size={24} className="text-purple-400" />
            </div>
            <span className="text-sm font-bold">Luffa</span>
            <span className="text-[10px] text-white/20 font-bold mt-1 uppercase tracking-widest">Message</span>
          </a>
          <a href="#" className="druid-card flex flex-col items-center text-center py-6">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-3">
              <Headphones size={24} className="text-emerald-400" />
            </div>
            <span className="text-sm font-bold">Support</span>
            <span className="text-[10px] text-white/20 font-bold mt-1 uppercase tracking-widest">Aide</span>
          </a>
        </div>
      </InfoSection>

      <div className="text-center py-4 opacity-10">
        <p className="text-[9px] font-black tracking-[0.5em] uppercase">Dr Speed Nord Premium</p>
      </div>
    </div>
  );
};

export default Infos;