import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RefreshCw } from "lucide-react";
import Index from "./pages/Index";
import Infos from "./pages/Infos";
import SnapGuide from "./pages/SnapGuide";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import BottomNav from "./components/BottomNav";

const queryClient = new QueryClient();

const App = () => {
  const [showRefresh, setShowRefresh] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowRefresh(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const forceUpdate = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('reload', Date.now().toString());
    window.location.href = url.toString();
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="relative min-h-screen">
            {showRefresh && (
              <button 
                onClick={forceUpdate}
                className="fixed top-4 right-4 z-[100] p-2 bg-white/5 border border-white/10 rounded-full text-white/20 hover:text-emerald-400 transition-colors"
              >
                <RefreshCw size={14} />
              </button>
            )}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/infos" element={<Infos />} />
              <Route path="/snap" element={<SnapGuide />} />
              <Route path="/admin-secret-portal" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <BottomNav />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;