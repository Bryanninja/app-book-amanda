"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

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

    // O pino foi substituído por position: sticky no CSS para evitar bugs de transbordo em telas pequenas

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
      className="relative flex flex-col md:flex-row items-start justify-between md:min-h-[300vh] px-6 py-12 lg:py-24 md:px-16 transition-colors duration-1000 ease-in-out"
    >
      {/* Lado Esquerdo - Texto Fixo (Sticky) apenas no Desktop */}
      <div 
        ref={textContentRef}
        className="w-full md:w-1/2 flex flex-col justify-center h-auto md:sticky md:top-24 md:h-[calc(100vh-192px)] md:pr-8 lg:pr-16 mb-16 md:mb-0"
      >
        <span className="text-theme-earth font-sans text-sm tracking-widest uppercase mb-2 lg:mb-4">
          A Dor e o Vale
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-theme-brown mb-4 lg:mb-8 text-balance leading-tight">
          Onde o mundo via um fim, Cristo construía um recomeço.
        </h2>
        <div className="space-y-4 lg:space-y-6 text-theme-brown/90 font-sans text-base lg:text-lg font-light leading-relaxed">
          <p>
            O diagnóstico de endometriose profunda e infertilidade soou como o fim de um sonho. Entre dores físicas incapacitantes e a sensação de falhar como mulher, me vi nas profundezas de um vale. Mas foi exatamente ali, quando os médicos diziam ser impossível, que o consolo de Cristo me encontrou.
          </p>
          <div className="w-12 h-px bg-theme-earth/30 my-4" />
          <span className="text-theme-earth font-sans text-sm tracking-widest uppercase mb-2 block">
            O Milagre e a África
          </span>
          <p>
            Deus me lembrou das orações de menina: <strong>'Ela já tem nome'</strong>, o Senhor me disse. Clara nasceu como um milagre. E enquanto eu ainda celebrava a vida no meu ventre, fomos chamados a atravessar o oceano rumo a Moçambique.
          </p>
          <p>
            Na África, em meio à força das mulheres moçambicanas e uma comunhão profunda, o Senhor restaurou não só o meu corpo, mas a minha verdadeira feminilidade em Cristo.
          </p>
        </div>
      </div>

      {/* Lado Direito - Imagens com Scroll */}
      <div 
        ref={imagesContainerRef}
        className="w-full md:w-1/2 flex flex-col gap-16 md:gap-32 md:pt-32 md:pb-[50vh]"
      >
        {/* Imagem 1: A Dor / Busca */}
        <div className="testimony-image relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-[0.5px] border-theme-brown/10">
          <div className="absolute inset-0 bg-neutral-100" />
          <Image src="/photos/familia-arch.webp" alt="A Força da Família" fill quality={100} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-theme-brown/60 to-transparent flex items-end p-8">
             <p className="text-theme-base font-serif text-2xl italic tracking-wide">A força da família.</p>
          </div>
        </div>

        {/* Imagem 2: A Família / Adoção */}
        <div className="testimony-image relative w-full aspect-square rounded-full overflow-hidden shadow-2xl mt-12 md:mt-32 md:-ml-12 border-[0.5px] border-theme-brown/10">
          <div className="absolute inset-0 bg-neutral-200" />
          <Image src="/photos/abraco-moises.webp" alt="O Consolo no Vale" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0 bg-theme-brown/20 flex items-center justify-center p-8 text-center">
             <p className="text-theme-base font-serif text-2xl italic drop-shadow-md">O consolo no vale.</p>
          </div>
        </div>

        {/* Imagem 3: Missão na África */}
        <div className="testimony-image relative w-full aspect-[4/5] rounded-[40px] rounded-tr-none overflow-hidden shadow-2xl mt-12 md:mt-32 border-[0.5px] border-theme-brown/10">
          <div className="absolute inset-0 bg-neutral-300" />
          <Image src="/photos/table-mountain-frame.webp" alt="A África" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-theme-brown/70 to-transparent flex items-end p-8">
             <p className="text-theme-base font-serif text-2xl italic tracking-wide">A África e o florescer da alma.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
