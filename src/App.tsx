import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import Especialidades from "@/pages/Especialidades";
import Tecnologia from "@/pages/Tecnologia";
import AntesDepois from "@/pages/AntesDepois";
import Equipe from "@/pages/Equipe";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contato from "@/pages/Contato";
import Privacidade from "@/pages/Privacidade";
import Termos from "@/pages/Termos";
import NotFound from "@/pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";

const queryClient = new QueryClient();

const App = () => {
  const [showLoading, setShowLoading] = useState(() => {
    const hasLoadedBefore = localStorage.getItem('appHasLoadedBefore');
    return !hasLoadedBefore;
  });

  const handleLoadingComplete = () => {
    localStorage.setItem('appHasLoadedBefore', 'true');
    setShowLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showLoading && (
          <LoadingScreen
            onComplete={handleLoadingComplete}
            onVideoReady={() => {}}
          />
        )}
        <HashRouter>
          <>
            <ScrollToTop />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/especialidades" element={<Especialidades />} />
              <Route path="/tecnologia" element={<Tecnologia />} />
              <Route path="/antes-depois" element={<AntesDepois />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/privacidade" element={<Privacidade />} />
              <Route path="/termos" element={<Termos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;