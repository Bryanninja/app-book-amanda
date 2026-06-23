"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como funciona a entrega do livro físico na África?",
    answer: "Atualmente, o livro físico é entregue via Mercado Livre no Brasil. Para Angola e Moçambique, recomendamos a versão E-book, que pode ser baixada imediatamente após a confirmação do pagamento via Cartão ou M-Pesa."
  },
  {
    question: "O pagamento é seguro?",
    answer: "Totalmente seguro! Utilizamos a Amazon e o Mercado Livre para o Brasil e Portugal. Para África, usamos plataformas parceiras com certificação de segurança internacional."
  },
  {
    question: "Como faço para comprar via M-Pesa ou transferência?",
    answer: "Basta clicar em 'Quero ler o Livro', selecionar seu país e clicar na opção 'Transferência / M-Pesa'. Você será direcionado para o nosso WhatsApp, onde uma pessoa da equipe fará o envio do E-book na mesma hora."
  },
  {
    question: "Posso ler o E-book no celular?",
    answer: "Sim! O formato do E-book é compatível com qualquer celular, tablet ou computador. Você pode ler a qualquer momento."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-theme-base flex justify-center">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-theme-earth font-sans text-sm tracking-widest uppercase mb-4 block">Dúvidas Frequentes</span>
          <h2 className="font-serif text-4xl text-theme-brown">Ainda tem alguma dúvida?</h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-theme-brown/10">
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-theme-salmon cursor-pointer"
              >
                <span className="font-serif text-2xl text-theme-brown/90">{faq.question}</span>
                <ChevronDown 
                  className={`h-6 w-6 text-theme-brown/50 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="font-sans text-xl text-theme-brown/70 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
