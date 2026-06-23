"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Testimony() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animação de cor de fundo (Transição da dor/bege para cura/salmão suave)
    gsap.to(containerRef.current, {
      backgroundColor: "var(--color-theme-salmon-light)",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 40%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    // Pinar o texto enquanto as imagens rolam ao lado
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: textContentRef.current,
      pinSpacing: false, // Falso porque os dois lados estão no mesmo container flex
    });

    // Efeito Parallax suave nas imagens (fade up)
    const images = gsap.utils.toArray(".testimony-image");
    images.forEach((img: any, i) => {
      gsap.fromTo(
        img,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative flex flex-col md:flex-row items-start justify-between min-h-[300vh] px-6 py-24 md:px-16 transition-colors duration-1000 ease-in-out"
    >
      {/* Lado Esquerdo - Texto Fixo (Sticky) */}
      <div 
        ref={textContentRef}
        className="w-full md:w-1/2 flex flex-col justify-center h-screen md:pr-16"
      >
        <span className="text-theme-earth font-sans text-sm tracking-widest uppercase mb-4">
          O Testemunho
        </span>
        <h2 className="font-serif text-4xl md:text-6xl text-theme-brown mb-8 text-balance leading-tight">
          De um diagnóstico impossível à uma missão na África.
        </h2>
        <div className="space-y-6 text-theme-brown/80 font-sans text-lg font-light leading-relaxed">
          <p>
            A dor da infertilidade e o peso de um diagnóstico médico traziam não apenas um vazio físico, mas profundas feridas na alma. Parecia o fim de um sonho.
          </p>
          <p>
            Mas Deus tinha outros planos. Um chamado claro e inegável nos levou, como família, a deixar nossa zona de conforto e abraçar uma missão na África do Sul.
          </p>
          <p>
            Foi no solo africano, servindo e plantando uma igreja, que a verdadeira cura aconteceu. Entender que o amor de Deus não depende do que sentimos, mas do que Ele é, transformou tudo.
          </p>
        </div>
      </div>

      {/* Lado Direito - Imagens com Scroll */}
      <div 
        ref={imagesContainerRef}
        className="w-full md:w-1/2 flex flex-col gap-32 pt-32 pb-[50vh]"
      >
        {/* Imagem 1: A Dor / Busca */}
        <div className="testimony-image relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-neutral-200 animate-pulse" /> {/* Placeholder */}
          {/* Use img tag when real image is available */}
          <div className="absolute inset-0 bg-gradient-to-t from-theme-brown/50 to-transparent flex items-end p-8">
             <p className="text-white font-serif text-xl italic">A busca pela cura.</p>
          </div>
        </div>

        {/* Imagem 2: A Família / Adoção */}
        <div className="testimony-image relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl mt-12 md:mt-32 md:-ml-12">
          <div className="absolute inset-0 bg-neutral-300 animate-pulse" /> {/* Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-t from-theme-brown/50 to-transparent flex items-end p-8">
             <p className="text-white font-serif text-xl italic">A promessa da família.</p>
          </div>
        </div>

        {/* Imagem 3: Missão na África */}
        <div className="testimony-image relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl mt-12 md:mt-32">
          <div className="absolute inset-0 bg-neutral-400 animate-pulse" /> {/* Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-t from-theme-brown/50 to-transparent flex items-end p-8">
             <p className="text-white font-serif text-xl italic">A África e o florescer da alma.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
