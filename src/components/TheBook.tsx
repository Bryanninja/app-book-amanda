"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useCheckoutStore } from "@/store/checkoutStore";
import { MoveRight } from "lucide-react";

export default function TheBook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const { openModal } = useCheckoutStore();

  useGSAP(() => {
    // Efeito Flutuante (Yoyo) do Livro
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    
    tl.to(bookRef.current, {
      y: -20,
      duration: 2.5,
      ease: "power1.inOut",
    });

    // Sombra encolhendo conforme o livro sobe
    const shadowTl = gsap.timeline({ repeat: -1, yoyo: true });
    shadowTl.to(shadowRef.current, {
      scale: 0.8,
      opacity: 0.3,
      duration: 2.5,
      ease: "power1.inOut",
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-24 md:px-16 bg-theme-base overflow-hidden"
    >
      <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-theme-salmon-light/30 to-transparent" />
      
      {/* Background Decorativo - Logo MARROM.png bem suave */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none -z-10">
        <img src="/MARROM.png" alt="Logo Sou Amada" className="w-[40vw] max-w-[600px] grayscale object-contain" />
      </div>

      <div className="w-full md:w-1/2 flex justify-center mb-16 md:mb-0 relative z-10">
        <div ref={bookRef} className="relative w-64 h-96 md:w-80 md:h-[480px]">
          {/* Sombra Dinâmica */}
          <div ref={shadowRef} className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-theme-brown/20 blur-xl rounded-[100%]" />
          
          <div className="absolute inset-0 bg-theme-brown rounded-r-2xl rounded-l-sm shadow-2xl overflow-hidden flex flex-col items-center justify-center p-6 text-center border-l-4 border-theme-salmon-light/30">
            <span className="text-theme-salmon-light/80 font-serif italic text-sm mb-4">Amanda Sena</span>
            <h3 className="font-serif text-3xl text-theme-base font-light tracking-wider">Sou<br/>Amada</h3>
            <div className="w-8 h-px bg-theme-salmon mt-6" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-start z-10">
        <span className="text-theme-earth font-sans text-sm tracking-widest uppercase mb-4">
          O Livro
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-theme-brown mb-6 text-balance">
          Sua jornada para a cura começa aqui.
        </h2>
        <p className="text-theme-brown/70 font-sans text-xl mb-10 leading-relaxed font-light">
          Este não é apenas um livro, é um convite para você descobrir sua verdadeira identidade. Através do meu testemunho, quero que você saiba — sem depender dos seus sentimentos — que você é profundamente amada.
        </p>

        <div className="bg-theme-salmon/10 border-l-4 border-theme-salmon p-6 mb-12 rounded-r-2xl">
          <span className="block text-theme-brown font-semibold mb-2 font-sans">Para quem é este livro?</span>
          <p className="text-theme-brown/80 font-sans text-lg leading-relaxed font-light">
            Mulheres maduras, mães, tentantes ou que sofreram com a dor da inferioridade e precisam resgatar sua identidade de filha amada.
          </p>
        </div>

        <button
          onClick={openModal}
          className="group flex items-center gap-3 rounded-full bg-theme-brown px-8 py-4 text-lg text-theme-base shadow-xl shadow-theme-brown/20 transition-all hover:bg-theme-brown/90 hover:-translate-y-1 cursor-pointer"
        >
          Quero ler o Livro
          <MoveRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
