"use client";

import { useCheckoutStore } from "@/store/checkoutStore";
import { X, MapPin, BookOpen, CreditCard, Smartphone } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CheckoutModal() {
  const { isOpen, selectedCountry, closeModal, setCountry } = useCheckoutStore();
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

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

  // Bloqueia scroll do body quando modal abre
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
          className="absolute right-4 top-4 rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-theme-brown"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-8 text-center">
          <h2 className="font-serif text-2xl text-theme-brown">
            {!selectedCountry ? "Onde você está?" : "Escolha a forma de entrega"}
          </h2>
          <p className="mt-2 text-sm text-neutral-500 font-sans">
            {!selectedCountry
              ? "Selecione seu país para ver as opções disponíveis."
              : "Opções personalizadas para sua região."}
          </p>
        </div>

        {!selectedCountry ? (
          <div className="grid grid-cols-1 gap-3">
            {[
              { id: "BR", name: "Brasil", flag: "🇧🇷" },
              { id: "PT", name: "Portugal", flag: "🇵🇹" },
              { id: "MZ", name: "Moçambique", flag: "🇲🇿" },
              { id: "AO", name: "Angola", flag: "🇦🇴" },
            ].map((country) => (
              <button
                key={country.id}
                onClick={() => setCountry(country.id as any)}
                className="flex items-center justify-between rounded-xl border border-neutral-200 bg-theme-base/50 p-4 transition-all hover:border-theme-salmon hover:bg-theme-salmon/10 active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{country.flag}</span>
                  <span className="font-medium text-theme-brown">{country.name}</span>
                </div>
                <MapPin className="h-5 w-5 text-neutral-300" />
              </button>
            ))}
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {selectedCountry === "BR" && (
              <div className="flex flex-col gap-3">
                <OptionButton
                  icon={<BookOpen />}
                  title="Livro Físico"
                  subtitle="Comprar via Mercado Livre"
                  href="#"
                />
                <OptionButton
                  icon={<Smartphone />}
                  title="E-book Digital"
                  subtitle="Comprar via Amazon"
                  href="#"
                  variant="outline"
                />
              </div>
            )}

            {selectedCountry === "PT" && (
              <div className="flex flex-col gap-3">
                <OptionButton
                  icon={<Smartphone />}
                  title="E-book Digital"
                  subtitle="Comprar via Amazon"
                  href="#"
                />
              </div>
            )}

            {(selectedCountry === "MZ" || selectedCountry === "AO") && (
              <div className="flex flex-col gap-3">
                <OptionButton
                  icon={<CreditCard />}
                  title="Comprar com Cartão"
                  subtitle="Download Imediato"
                  href="#"
                />
                <OptionButton
                  icon={<Smartphone />}
                  title="Transferência / M-Pesa"
                  subtitle="Falar no WhatsApp"
                  href="#"
                  variant="outline"
                />
              </div>
            )}

            <button
              onClick={() => setCountry(null)}
              className="mt-6 w-full text-center text-sm font-medium text-neutral-400 hover:text-theme-brown transition-colors"
            >
              ← Voltar para seleção de país
            </button>
          </div>
        )}
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
      className={`flex items-center gap-4 rounded-xl p-4 transition-all active:scale-[0.98] ${
        variant === "primary"
          ? "bg-theme-brown text-white hover:bg-theme-brown/90 shadow-lg shadow-theme-brown/20"
          : "border-2 border-theme-brown text-theme-brown hover:bg-theme-brown/5"
      }`}
    >
      <div className={variant === "primary" ? "text-theme-salmon-light" : "text-theme-brown"}>
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <span className="font-semibold">{title}</span>
        <span className={`text-xs ${variant === "primary" ? "text-neutral-300" : "text-neutral-500"}`}>
          {subtitle}
        </span>
      </div>
    </a>
  );
}
