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
      
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative z-10 perspective-[1000px] mb-16 md:mb-0">
        {/* Livro Placeholder */}
        <div 
          ref={bookRef}
          className="relative w-[280px] h-[400px] md:w-[320px] md:h-[460px] bg-theme-salmon rounded-r-xl rounded-l-sm shadow-2xl overflow-hidden flex flex-col items-center justify-center border-l-8 border-theme-brown/20 transform-style-3d rotate-y-[-10deg]"
        >
          <div className="absolute top-8 left-0 w-full text-center">
            <h3 className="font-serif text-3xl text-theme-brown font-bold tracking-widest uppercase">Sou<br/>Amada</h3>
            <div className="w-12 h-px bg-theme-brown mx-auto mt-4" />
          </div>
          <div className="absolute bottom-8 left-0 w-full text-center">
            <p className="font-sans text-sm text-theme-brown/80 tracking-widest uppercase">Amanda Sena</p>
          </div>
        </div>
        
        {/* Sombra Dinâmica Realista */}
        <div 
          ref={shadowRef}
          className="w-[240px] md:w-[280px] h-[20px] bg-black/40 blur-xl rounded-[100%] mt-8 mx-auto"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-16 z-10">
        <h2 className="font-serif text-4xl md:text-5xl text-theme-brown mb-6 text-balance">
          Sua jornada para a cura começa aqui.
        </h2>
        <p className="text-theme-brown/70 font-sans text-lg mb-10 leading-relaxed font-light">
          Este não é apenas um livro, é um convite para você descobrir sua verdadeira identidade. Através do meu testemunho, quero que você saiba — sem depender dos seus sentimentos — que você é profundamente amada.
        </p>

        <ul className="space-y-4 mb-12">
          {['Restauração da auto-imagem.', 'Cura de feridas emocionais profundas.', 'Descoberta do propósito no meio da dor.'].map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-theme-salmon mt-2.5 flex-shrink-0" />
              <span className="font-sans text-theme-brown/80 text-lg">{item}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={openModal}
          className="group flex items-center gap-3 rounded-full bg-theme-brown px-8 py-4 text-lg text-theme-base shadow-xl shadow-theme-brown/20 transition-all hover:bg-theme-brown/90 hover:-translate-y-1"
        >
          Quero ler o Livro
          <MoveRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
