"use client";

import { useCheckoutStore } from "@/store/checkoutStore";
import { X, MapPin, BookOpen, CreditCard, Smartphone } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import { getWhatsAppLink } from "@/utils/whatsapp";

export default function CheckoutModal() {
  const { isOpen, selectedCountry, closeModal, setCountry } = useCheckoutStore();
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const whatsappLink = getWhatsAppLink("+55 11 98208-2667", "Olá, Amanda! Gostaria de comprar o livro físico Sou Amada em Pedro Leopoldo.");

  useEffect(() => {
    if (isOpen) {
      gsap.to(backdropRef.current, { opacity: 1, duration: 0.4, ease: "power2.out", display: "flex" });
      gsap.fromTo(
        modalRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)", delay: 0.1 }
      );
    } else {
      gsap.to(modalRef.current, { y: 20, opacity: 0, scale: 0.95, duration: 0.3, ease: "power2.in" });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        display: "none",
        delay: 0.2,
      });
    }
  }, [isOpen]);

  // Bloqueia scroll do body e pausa o Lenis quando modal abre
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = "auto";
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = "auto";
      if (lenis) lenis.start();
    };
  }, [isOpen, lenis]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) closeModal();
  };

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 hidden items-center justify-center bg-black/40 backdrop-blur-md p-4 opacity-0"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl opacity-0"
      >
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-theme-brown cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl text-theme-brown">
            Escolha a forma de entrega
          </h2>
          <p className="mt-2 text-base text-neutral-500 font-sans">
            Selecione a opção que melhor atende à sua localização.
          </p>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-col gap-3">
            <OptionButton
              icon={<BookOpen />}
              title="Todo o Brasil"
              subtitle="Comprar via Mercado Livre (Frete Grátis)"
              href="https://produto.mercadolivre.com.br/MLB-4926455775-livro-cristo-sou-amada-identidade-em-cristo-e-cura-para-mulheres-amanda-sena-stawicki-_JM"
            />
            <OptionButton
              icon={<Smartphone />}
              title="Pedro Leopoldo - MG"
              subtitle="Comprar via WhatsApp (Retirada ou Entrega local)"
              href={whatsappLink}
              variant="outline"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function OptionButton({
  icon,
  title,
  subtitle,
  href,
  variant = "primary",
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
  variant?: "primary" | "outline";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-4 rounded-xl p-4 transition-all active:scale-[0.98] cursor-pointer ${
        variant === "primary"
          ? "bg-theme-brown text-white hover:bg-theme-brown/90 shadow-lg shadow-theme-brown/20"
          : "border-2 border-theme-brown text-theme-brown hover:bg-theme-brown/5"
      }`}
    >
      <div className={variant === "primary" ? "text-theme-salmon-light" : "text-theme-brown"}>
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <span className="font-sans font-semibold text-lg">{title}</span>
        <span className={`font-sans text-sm ${variant === "primary" ? "text-neutral-300" : "text-neutral-500"}`}>
          {subtitle}
        </span>
      </div>
    </a>
  );
}
