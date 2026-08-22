"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import ActionCards from '@/components/ActionCards';
import { supabase } from '@/integrations/supabase/client';

const Index = () => {
  const [connectionStatus, setConnectionStatus] = useState<'loading' | 'connected' | 'error'>('loading');

  useEffect(() => {
    const checkConnection = async () => {
      try {
        // We just check if we can reach the auth service or any public resource
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("[Supabase] Connection error:", error);
          setConnectionStatus('error');
        } else {
          setConnectionStatus('connected');
        }
      } catch (err) {
        console.error("[Supabase] Unexpected error:", err);
        setConnectionStatus('error');
      }
    };

    checkConnection();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center pb-32">
      <Header />
      
      <main className="w-full flex-1 flex flex-col justify-center">
        <ActionCards />
        
        <div className="mt-8 flex justify-center">
          <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-500 ${
            connectionStatus === 'connected' ? 'border-emerald-500/30 text-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.1)]' : 
            connectionStatus === 'error' ? 'border-red-500/30 text-red-500/50' : 
            'border-white/10 text-white/20 animate-pulse'
          }`}>
            Supabase: {connectionStatus}
          </div>
        </div>
      </main>

      <footer className="w-full mt-auto pt-12 opacity-20">
        <p className="text-[10px] text-white font-bold uppercase tracking-[0.4em] text-center">
          DR SPEED NORD • EST. 2024
        </p>
      </footer>
    </div>
  );
};

export default Index;