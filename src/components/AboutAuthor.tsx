'use client';

import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import { useCheckoutStore } from '@/store/checkoutStore';

export default function AboutAuthor() {
  const { openModal } = useCheckoutStore();

  return (
    <section className="bg-theme-base overflow-hidden px-6 py-24 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 md:flex-row md:gap-24">
        {/* Foto da Autora */}
        <div className="relative w-full md:w-5/12">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[400px] overflow-hidden rounded-full shadow-2xl">
            {/* Imagem Placeholder - a Amanda pode colocar uma foto bonita dela de rosto/corpo aqui (ex: author-amanda.jpg) */}
            <div className="absolute inset-0 bg-neutral-200" />
            <Image
              src="/photos/amanda-arch.webp"
              alt="Amanda Sena"
              fill
              quality={100}
              className="absolute inset-0 h-full w-full scale-200 object-cover object-[center_top] grayscale-[10%]"
            />
          </div>
          <div className="bg-theme-salmon/20 absolute -right-8 -bottom-8 -z-10 h-48 w-48 rounded-full blur-3xl" />
        </div>

        {/* Texto da Autora */}
        <div className="flex w-full flex-col justify-center text-left md:w-7/12">
          <span className="text-theme-earth mb-4 font-sans text-sm tracking-widest uppercase">
            A Autora
          </span>
          <h2 className="text-theme-brown mb-8 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            Prazer, Amanda Sena.
          </h2>
          <div className="text-theme-brown/80 space-y-6 font-sans text-xl leading-relaxed font-light">
            <p>
              Sou arquiteta por formação, mas foi nos caminhos da vida,
              enfrentando o luto profundo pela perda do meu pai biológico aos
              oito anos de idade, e depois a intensa luta contra a endometriose,
              que descobri a minha verdadeira vocação: ser uma filha amada.
            </p>
            <p>
              Construí minha família ao lado do Michel, o amor da minha vida, e
              vi o milagre de Deus nascer no ventre quando geramos Clara,
              cumprindo uma promessa feita quando eu ainda era jovem.
            </p>
            <p>
              Hoje, além de esposa e mãe, dedico meus dias a levar uma mensagem
              de restauração para mulheres que, assim como eu, um dia
              acreditaram nas mentiras que o mundo conta sobre a feminilidade, e
              precisam ser lembradas de que o amor de Cristo é o único lugar
              seguro para descansar.
            </p>
          </div>

          <div className="mt-12">
            <button
              onClick={openModal}
              className="border-theme-salmon text-theme-brown hover:text-theme-salmon inline-flex cursor-pointer items-center gap-3 border-b-2 pb-1 text-xl font-medium transition-all"
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
