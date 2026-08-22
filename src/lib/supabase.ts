import { createClient } from '@supabase/supabase-js';

// Récupération des variables d'environnement
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Initialisation sécurisée : si les clés manquent, on ne crée pas le client immédiatement
// pour éviter l'erreur 'supabaseUrl is required'
export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase : Les variables d'environnement VITE_SUPABASE_URL ou VITE_SUPABASE_ANON_KEY sont manquantes.");
}