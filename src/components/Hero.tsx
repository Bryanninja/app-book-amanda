"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useCheckoutStore } from "@/store/checkoutStore";
import { MoveRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { openModal } = useCheckoutStore();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".mask-reveal span",
        { y: "120%" },
        {
          y: "0%",
          duration: 1.2,
          stagger: 0.1,
          delay: 0.2,
        }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.6"
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.5)" },
          "-=0.4"
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
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-theme-base px-6 text-center"
    >
      {/* Background Decorativo Suave */}
      <div className="absolute top-1/4 -left-64 h-[500px] w-[500px] rounded-full bg-theme-salmon/20 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-theme-earth/10 blur-[100px]" />

      <div className="relative z-10 max-w-4xl">
        <h1 
          ref={headlineRef}
          className="font-serif text-5xl font-medium tracking-tight text-theme-brown md:text-7xl lg:text-8xl leading-[1.1] text-balance flex flex-col"
        >
          <div className="overflow-hidden pb-2">
            <div className="mask-reveal inline-block">
              <span className="inline-block">Descubra</span>
            </div>{" "}
            <div className="mask-reveal inline-block">
              <span className="inline-block">o</span>
            </div>{" "}
            <div className="mask-reveal inline-block">
              <span className="inline-block">amor</span>
            </div>{" "}
            <div className="mask-reveal inline-block text-theme-salmon">
              <span className="inline-block italic pr-2">que</span>
            </div>
          </div>
          <div className="overflow-hidden pb-4">
            <div className="mask-reveal inline-block text-theme-salmon">
              <span className="inline-block italic pr-2">cura</span>
            </div>{" "}
            <div className="mask-reveal inline-block">
              <span className="inline-block">de</span>
            </div>{" "}
            <div className="mask-reveal inline-block">
              <span className="inline-block">dentro</span>
            </div>{" "}
            <div className="mask-reveal inline-block">
              <span className="inline-block">para</span>
            </div>{" "}
            <div className="mask-reveal inline-block">
              <span className="inline-block">fora.</span>
            </div>
          </div>
        </h1>

        <p 
          ref={subtitleRef}
          className="mx-auto mt-8 max-w-xl text-lg font-light text-theme-brown/70 md:text-xl font-sans"
        >
          A jornada transformadora de Amanda Sena através da dor, da adoção e de um chamado improvável para a África.
        </p>

        <div className="mt-14 flex justify-center p-4">
          <button
            ref={buttonRef}
            onClick={openModal}
            className="group flex items-center gap-3 rounded-full bg-theme-brown px-8 py-4 text-lg text-theme-base shadow-xl shadow-theme-brown/20 transition-colors hover:bg-theme-brown/90"
          >
            Quero ler o Livro
            <MoveRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
