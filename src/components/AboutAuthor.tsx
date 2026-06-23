"use client";

import { MoveRight } from "lucide-react";
import { useCheckoutStore } from "@/store/checkoutStore";

export default function AboutAuthor() {
  const { openModal } = useCheckoutStore();

  return (
    <section className="py-24 px-6 md:px-16 bg-theme-base overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Foto da Autora */}
        <div className="w-full md:w-5/12 relative">
          <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto rounded-full overflow-hidden shadow-2xl">
            {/* Imagem Placeholder - a Amanda pode colocar uma foto bonita dela de rosto/corpo aqui (ex: author-amanda.jpg) */}
            <div className="absolute inset-0 bg-neutral-200" />
            <img 
              src="/author-amanda.jpg" 
              alt="Amanda Sena" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%]" 
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-theme-salmon/20 rounded-full blur-3xl -z-10" />
        </div>

        {/* Texto da Autora */}
        <div className="w-full md:w-7/12 flex flex-col justify-center text-left">
          <span className="text-theme-earth font-sans text-sm tracking-widest uppercase mb-4">
            A Autora
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-theme-brown mb-8 leading-tight">
            Prazer, Amanda Sena.
          </h2>
          <div className="space-y-6 text-xl font-light font-sans text-theme-brown/80 leading-relaxed">
            <p>
              Sou arquiteta por formação, mas foi nos caminhos da vida, enfrentando o luto profundo pela perda do meu pai biológico aos oito anos de idade, e depois a intensa luta contra a endometriose, que descobri a minha verdadeira vocação: ser uma filha amada.
            </p>
            <p>
              Construí minha família ao lado do Michel, o amor da minha vida, e vi o milagre de Deus nascer no ventre quando geramos Clara, cumprindo uma promessa feita quando eu ainda era jovem.
            </p>
            <p>
              Hoje, além de esposa e mãe, dedico meus dias a levar uma mensagem de restauração para mulheres que, assim como eu, um dia acreditaram nas mentiras que o mundo conta sobre a feminilidade, e precisam ser lembradas de que o amor de Cristo é o único lugar seguro para descansar.
            </p>
          </div>

          <div className="mt-12">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-3 border-b-2 border-theme-salmon pb-1 text-xl font-medium text-theme-brown transition-all hover:text-theme-salmon cursor-pointer"
            >
              Conhecer a minha história completa
              <MoveRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
