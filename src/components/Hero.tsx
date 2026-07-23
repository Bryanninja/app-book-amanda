'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useCheckoutStore } from '@/store/checkoutStore';
import { MoveRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { openModal } = useCheckoutStore();

  useEffect(() => {
    // Força o vídeo a tocar no mobile (safari/ios) ignorando bugs de autoplay
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay blocked by browser (Low Power Mode).");
      });
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.mask-reveal span',
        { y: '120%' },
        {
          y: '0%',
          duration: 1.2,
          stagger: 0.1,
          delay: 0.2,
        },
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.6',
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)' },
          '-=0.4',
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Efeito Magnético no Botão
  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Background de Vídeo (O arquivo original 0623.mp4 será colocado na pasta public) */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/photos/amanda-arch.webp"
          className="h-full w-full object-cover opacity-80"
        >
          <source src="/videos/amanda-book-hero.mp4" type="video/mp4" />
        </video>
        {/* Véu branco sobre o vídeo para garantir legibilidade*/}
        <div className="absolute inset-0 z-0 bg-white/70 mix-blend-normal backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl pt-12">
        <h1
          ref={headlineRef}
          className="text-theme-brown flex flex-col font-serif text-4xl leading-[1.1] font-medium tracking-tight text-balance md:text-6xl lg:text-7xl"
        >
          <div className="overflow-hidden pb-2">
            <div className="mask-reveal inline-block">
              <span className="inline-block">Saber</span>
            </div>{' '}
            <div className="mask-reveal inline-block">
              <span className="inline-block">que</span>
            </div>{' '}
            <div className="mask-reveal inline-block">
              <span className="inline-block">é</span>
            </div>{' '}
            <div className="mask-reveal text-theme-salmon inline-block">
              <span className="inline-block pr-2 italic drop-shadow-[0_0_8px_rgba(255,255,255,1)]">
                amada
              </span>
            </div>
          </div>
          <div className="overflow-hidden pb-4">
            <div className="mask-reveal inline-block">
              <span className="inline-block">transforma</span>
            </div>{' '}
            <div className="mask-reveal inline-block">
              <span className="inline-block">de</span>
            </div>{' '}
            <div className="mask-reveal inline-block">
              <span className="inline-block">dentro</span>
            </div>{' '}
            <div className="mask-reveal inline-block">
              <span className="inline-block">para</span>
            </div>{' '}
            <div className="mask-reveal text-theme-earth inline-block">
              <span className="inline-block italic drop-shadow-[0_0_8px_rgba(255,255,255,1)]">
                fora.
              </span>
            </div>
          </div>
        </h1>

        <p
          ref={subtitleRef}
          className="text-theme-brown/80 mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed font-light text-pretty md:mt-8 md:text-2xl"
        >
          Uma jornada real de restauração da alma e identidade, vitória sobre a infertilidade, um chamado improvável para a África e cura da endometriose. Através do testemunho e de estudos fundamentados na Palavra de Deus.
        </p>

        <div className="mt-14 flex flex-col items-center justify-center p-4">
          <button
            ref={buttonRef}
            onClick={openModal}
            className="group bg-theme-brown text-theme-base shadow-theme-brown/20 hover:bg-theme-brown/90 flex cursor-pointer items-center gap-3 rounded-full px-8 py-5 text-xl font-medium shadow-xl transition-colors"
          >
            Quero ler o Livro
            <MoveRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <div className="mt-4 flex items-center gap-2 rounded-full bg-white/50 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-theme-salmon text-lg">✨</span>
            <span className="text-sm text-theme-brown/80 font-medium">Frete Grátis para todo o Brasil (Mercado Livre)</span>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll Sutil */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce opacity-40 md:bottom-10">
        <ChevronDown className="text-theme-brown h-10 w-10" />
      </div>
    </section>
  );
}
