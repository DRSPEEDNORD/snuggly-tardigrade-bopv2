"use client";

import React from 'react';
import { 
  MapPin, 
  Truck, 
  Send, 
  Clock, 
  CreditCard, 
  Globe,
  AlertCircle,
  UserCheck
} from 'lucide-react';

const InfoSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-[11px] font-bold text-emerald-500/50 uppercase tracking-[0.2em] mb-4 px-1">
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
        <div className="space-y-1">
          <h1 className="text-2xl font-black italic tracking-tight uppercase">Informations</h1>
          <p className="text-[10px] font-bold text-white/30 tracking-widest uppercase">Dr Speed Bot Service</p>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <AlertCircle size={20} className="text-emerald-500" />
        </div>
      </div>

      <InfoSection title="LIVRAISON LOCALE 🏎️">
        <div className="druid-card flex items-start gap-4 border-emerald-500/20">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
            <MapPin size={20} className="text-emerald-500" />
          </div>
          <div>
            <p className="text-[13px] font-bold leading-tight mb-1">Secteur 59 / 62</p>
            <p className="text-[11px] text-white/50 font-medium">Minimum de commande : <span className="text-emerald-400">150€</span></p>
          </div>
        </div>
      </InfoSection>

      <InfoSection title="ENVOI POSTAL 📦">
        <div className="druid-card space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
              <Clock size={20} className="text-blue-400" />
            </div>
            <div>
              <p className="text-[13px] font-bold leading-tight mb-1">Préparation Rapide</p>
              <p className="text-[11px] text-white/50 font-medium">Soignée sous 24h. Envois du Lundi au Vendredi.</p>
            </div>
          </div>
          
          <div className="h-px bg-white/5 w-full" />

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
              <Truck size={20} className="text-purple-400" />
            </div>
            <div>
              <p className="text-[13px] font-bold leading-tight mb-1">Frais d'envois</p>
              <p className="text-[11px] text-white/50 font-medium">Lettre suivie ou Mondial Relay (48-72h).</p>
              <p className="text-[11px] text-emerald-400 font-bold mt-1">France : Gratuit / Inclus selon montant</p>
            </div>
          </div>

          <div className="h-px bg-white/5 w-full" />

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
              <Globe size={20} className="text-orange-400" />
            </div>
            <div>
              <p className="text-[13px] font-bold leading-tight mb-1">International</p>
              <p className="text-[11px] text-white/50 font-medium">Sur devis via le SAV.</p>
            </div>
          </div>
        </div>
      </InfoSection>

      <InfoSection title="PAIEMENT 💳">
        <div className="druid-card flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center shrink-0">
            <CreditCard size={20} className="text-yellow-500" />
          </div>
          <p className="text-[13px] font-bold leading-snug">Cryptomonnaies & Virements acceptés</p>
        </div>
      </InfoSection>

      <InfoSection title="CONTACTS OFFICIELS 📱">
        <div className="grid grid-cols-1 gap-3">
          <a 
            href="https://t.me/DrSpeednord1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="druid-card flex items-center justify-between group hover:border-cyan-500/30"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Send size={22} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-sm font-black italic uppercase">COMMANDER</p>
                <p className="text-[11px] text-white/40 font-bold">@DrSpeednord1</p>
              </div>
            </div>
            <div className="text-[10px] font-black text-cyan-500/50 group-hover:text-cyan-400 transition-colors">CONTACTER</div>
          </a>

          <a 
            href="https://t.me/Drspeednordthc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="druid-card flex items-center justify-between group hover:border-purple-500/30"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                <UserCheck size={22} className="text-purple-400" />
              </div>
              <div>
                <p className="text-sm font-black italic uppercase">SAV / GROS</p>
                <p className="text-[11px] text-white/40 font-bold">@Drspeednordthc</p>
              </div>
            </div>
            <div className="text-[10px] font-black text-purple-500/50 group-hover:text-purple-400 transition-colors">CONTACTER</div>
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