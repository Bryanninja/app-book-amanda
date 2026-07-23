'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Testimony() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animação de cor de fundo (Transição da dor/bege para cura/salmão suave)
      gsap.to(containerRef.current, {
        backgroundColor: 'var(--color-theme-salmon-light)',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 40%',
          end: 'bottom 80%',
          scrub: true,
        },
      });

      // O layout agora flui naturalmente (sem sticky) para acomodar textos maiores em qualquer tela

      // Efeito Parallax suave nas imagens (fade up)
      const images = gsap.utils.toArray('.testimony-image');
      images.forEach((img: any, i) => {
        gsap.fromTo(
          img,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 1,
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-start justify-between px-6 py-12 transition-colors duration-1000 ease-in-out md:px-16 lg:flex-row lg:py-24"
    >
      {/* Lado Esquerdo - Texto Fixo (Sticky) apenas no Desktop */}
      <div
        ref={textContentRef}
        className="mb-16 flex h-auto w-full flex-col justify-center lg:mb-0 lg:w-1/2 lg:pr-16"
      >
        <span className="text-theme-earth mb-2 font-sans text-sm tracking-widest uppercase lg:mb-4">
          A Dor e o Vale
        </span>
        <h2 className="text-theme-brown mb-4 font-serif text-3xl leading-tight text-balance md:text-4xl lg:mb-8">
          Será que as circunstâncias podem definir quem você é?
        </h2>
        <div className="text-theme-brown/90 space-y-6 font-sans text-lg leading-relaxed font-light lg:space-y-8 lg:text-xl">
          <p>
            Se a dor, um diagnóstico, um coração vazio, uma longa espera,
            feridas na alma ou qualquer outra circunstância fizeram você deixar
            de enxergar quem realmente é, este livro é para você.
          </p>
          <div className="bg-theme-earth/30 my-4 h-px w-12" />
          <p>
            Durante anos, minha identidade foi marcada por feridas profundas,
            infertilidade, endometriose e longos processos de espera. Mas Deus
            me conduziu por uma jornada que transformou completamente a minha
            vida.
          </p>
          <p>
            Primeiro, revelou a profundidade do Seu amor e quem eu realmente sou
            em Cristo, restaurando a minha alma. Dessa revelação nasceram os
            milagres: Jesus venceu a infertilidade em meu ventre, conduziu minha
            família ao improvável chamado na África e manifestou Sua cura sobre
            a endometriose.
          </p>
          <p>
            Neste livro, compartilho essa jornada por meio dos meus testemunhos
            e de estudos fundamentados na Palavra de Deus, revelando como essa
            verdade foi vivida em minha própria história. Em cada capítulo,
            caminharemos juntas para conhecer mais profundamente a Cristo e
            descobrir quem você realmente é.
          </p>
          <p className="font-medium italic">
            Minha oração é que, ao terminar esta leitura, você descubra, com o
            coração, a verdade que transforma mulheres de dentro para fora.
          </p>
        </div>
      </div>

      {/* Lado Direito - Imagens com Scroll */}
      <div
        ref={imagesContainerRef}
        className="flex w-full flex-col gap-16 lg:w-1/2 lg:gap-32 lg:pt-24"
      >
        {/* Imagem 1: A Dor / Busca */}
        <div className="testimony-image border-theme-brown/10 relative aspect-[3/4] w-full overflow-hidden rounded-2xl border-[0.5px] shadow-2xl">
          <div className="absolute inset-0 bg-neutral-100" />
          <Image
            src="/photos/familia-arch.webp"
            alt="A Força da Família"
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover contrast-[1.05] saturate-[0.85] sepia-[.15]"
          />
          <div className="from-theme-brown/60 absolute inset-0 flex items-end bg-gradient-to-t to-transparent p-8">
            <p className="text-theme-base font-serif text-2xl tracking-wide italic">
              A força da família.
            </p>
          </div>
        </div>

        {/* Imagem 2: Batismo  */}
        <div className="testimony-image border-theme-brown/10 relative mt-12 aspect-square w-full overflow-hidden rounded-full border-[0.5px] shadow-2xl md:mt-32 md:-ml-12">
          <div className="absolute inset-0 bg-neutral-200" />
          <Image
            src="/photos/batismo-mocambique.webp"
            alt="Restauração"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover contrast-[1.05] saturate-[0.85] sepia-[.15]"
          />
          <div className="bg-theme-brown/20 absolute inset-0 flex items-center justify-center p-8 text-center">
            <p className="text-theme-base font-serif text-2xl italic drop-shadow-md">
              Restauração.
            </p>
          </div>
        </div>

        {/* Imagem 3: Missão na África/ girafa */}
        <div className="testimony-image border-theme-brown/10 relative mt-12 aspect-[4/5] w-full overflow-hidden rounded-[40px] rounded-tr-none border-[0.5px] shadow-2xl md:mt-32">
          <div className="absolute inset-0 bg-neutral-300" />
          <Image
            src="/photos/safari-clara.webp"
            alt="A África"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover contrast-[1.05] saturate-[0.85] sepia-[.15]"
          />
          <div className="from-theme-brown/70 absolute inset-0 flex items-end bg-gradient-to-t to-transparent p-8">
            <p className="text-theme-base font-serif text-2xl tracking-wide italic">
              A África e o florescer da alma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
