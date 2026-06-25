"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-theme-brown text-theme-base py-12 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-serif text-3xl mb-2 text-theme-salmon-light">Sou Amada</h2>
          <p className="font-sans text-theme-base/60 font-light max-w-sm">
            Descubra o amor que cura de dentro para fora. Um testemunho de fé, adoção e propósito na África.
          </p>
        </div>

        {/* Links & Socials */}
        <div className="flex items-center gap-6">
          <a 
            href="https://www.instagram.com/amandasena.souamada" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-theme-base/80 hover:text-theme-salmon transition-colors"
            aria-label="Instagram de Amanda Sena"
          >
            {/* Custom Instagram SVG since it's not in lucide-react */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
        </div>

        {/* Direitos Autorais e Topo */}
        <div className="flex flex-col md:items-end items-center gap-4">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-theme-base/60 hover:text-theme-salmon text-sm font-sans uppercase tracking-widest transition-colors cursor-pointer"
          >
            Voltar ao topo <ArrowUp className="w-4 h-4" />
          </button>
          
          <div className="flex gap-4">
            <a href="/politica-de-privacidade" className="font-sans text-theme-base/60 text-sm hover:text-theme-salmon transition-colors">
              Política de Privacidade
            </a>
            <span className="text-theme-base/20">•</span>
            <a href="/termos-de-uso" className="font-sans text-theme-base/60 text-sm hover:text-theme-salmon transition-colors">
              Termos de Uso
            </a>
          </div>

          <p className="font-sans text-theme-base/60 text-sm">
            © {new Date().getFullYear()} Amanda Sena. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
