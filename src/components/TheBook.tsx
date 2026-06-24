'use client';

import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useCheckoutStore } from '@/store/checkoutStore';
import { MoveRight } from 'lucide-react';

export default function TheBook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const { openModal } = useCheckoutStore();

  useGSAP(
    () => {
      // Efeito Flutuante (Yoyo) do Livro
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(bookRef.current, {
        y: -20,
        duration: 2.5,
        ease: 'power1.inOut',
      });

      // Sombra encolhendo conforme o livro sobe
      const shadowTl = gsap.timeline({ repeat: -1, yoyo: true });
      shadowTl.to(shadowRef.current, {
        scale: 0.8,
        opacity: 0.3,
        duration: 2.5,
        ease: 'power1.inOut',
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="bg-theme-base relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 md:flex-row md:px-16"
    >
      <div className="from-theme-salmon-light/30 absolute top-0 h-1/2 w-full bg-gradient-to-b to-transparent" />

      {/* Background Decorativo - Logo MARROM.png bem suave */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 aspect-[2/1] w-[40vw] max-w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-5 select-none">
        <Image
          src="/marrom.svg"
          alt="Logo Sou Amada"
          fill
          quality={100}
          className="object-contain opacity-20 grayscale"
        />
      </div>

      <div className="relative z-10 mb-16 flex w-full justify-center md:mb-0 md:w-1/2">
        <div
          ref={bookRef}
          className="relative h-[500px] w-[350px] md:h-[700px] md:w-[500px]"
        >
          {/* Sombra Dinâmica */}
          <div
            ref={shadowRef}
            className="bg-theme-brown/20 absolute -bottom-4 left-1/2 h-10 w-4/5 -translate-x-1/2 rounded-[100%] blur-2xl"
          />

          <div className="absolute inset-0">
            <Image
              src="/photos/mockup-book-amada.webp"
              alt="Livro Sou Amada"
              fill
              sizes="(max-width: 768px) 320px, 500px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="z-10 flex w-full flex-col items-start justify-center md:w-1/2">
        <span className="text-theme-earth mb-4 font-sans text-sm tracking-widest uppercase">
          O Livro
        </span>
        <h2 className="text-theme-brown mb-6 font-serif text-4xl text-balance md:text-5xl">
          Sua jornada para a cura começa aqui.
        </h2>
        <p className="text-theme-brown/70 mb-10 font-sans text-xl leading-relaxed font-light">
          Este não é apenas um livro, é um convite para você descobrir sua
          verdadeira identidade. Através do meu testemunho, quero que você saiba
          — sem depender dos seus sentimentos — que você é profundamente amada.
        </p>

        <div className="bg-theme-salmon/10 border-theme-salmon mb-12 rounded-r-2xl border-l-4 p-6">
          <span className="text-theme-brown mb-2 block font-sans font-semibold">
            Para quem é este livro?
          </span>
          <p className="text-theme-brown/80 font-sans text-lg leading-relaxed font-light">
            Mulheres maduras, mães, tentantes ou que sofreram com a dor da
            inferioridade e precisam resgatar sua identidade de filha amada.
          </p>
        </div>

        <button
          onClick={openModal}
          className="group bg-theme-brown text-theme-base shadow-theme-brown/20 hover:bg-theme-brown/90 flex cursor-pointer items-center gap-3 rounded-full px-8 py-4 text-lg shadow-xl transition-all hover:-translate-y-1"
        >
          Quero ler o Livro
          <MoveRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
