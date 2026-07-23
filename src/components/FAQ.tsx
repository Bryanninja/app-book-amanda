"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como funciona a entrega do livro?",
    answer: "O livro físico está disponível para todo o Brasil e é enviado com frete grátis por meio do Mercado Livre, oferecendo praticidade e segurança na sua compra. Se você mora em Pedro Leopoldo (MG), também pode adquirir o livro diretamente pelo WhatsApp, com retirada ou entrega local, conforme disponibilidade. Em breve, o E-book estará disponível na Amazon para leitores do Brasil, Portugal, Angola e África do Sul. Também disponibilizaremos a compra do E-book para Moçambique por meio desta página."
  },
  {
    question: "O frete é grátis?",
    answer: "Sim! O livro Sou Amada possui frete grátis para todo o Brasil nas compras realizadas pelo Mercado Livre. Assim, você recebe o seu exemplar no conforto da sua casa, sem custo adicional de envio."
  },
  {
    question: "O pagamento é seguro?",
    answer: "Sim! As compras realizadas pelo Mercado Livre utilizam a plataforma de pagamento segura da própria empresa, garantindo proteção durante todo o processo. Para compras realizadas pelo WhatsApp em Pedro Leopoldo (MG), o pagamento é combinado diretamente durante o atendimento."
  },
  {
    question: "Como comprar em Pedro Leopoldo (MG)?",
    answer: "Se você mora em Pedro Leopoldo (MG), basta clicar em 'Quero ler o Livro' e escolher a opção WhatsApp. Nossa equipe entrará em contato para orientar a compra, informar as formas de pagamento e combinar a entrega ou retirada do seu exemplar. Para as demais cidades do Brasil, a compra é realizada pelo Mercado Livre, com frete grátis."
  },
  {
    question: "Posso ler o E-book no celular?",
    answer: "Sim! Em breve, o E-book estará disponível na Amazon e poderá ser lido em celulares, tablets, computadores e dispositivos Kindle por meio do aplicativo Kindle. O lançamento será realizado inicialmente para Brasil, Portugal, Angola e África do Sul. Em seguida, também disponibilizaremos o E-book para Moçambique por meio desta página."
  },
  {
    question: "Qual é o prazo de entrega?",
    answer: "Os pedidos realizados pelo Mercado Livre seguem o prazo informado pela própria plataforma no momento da compra, variando de acordo com a região de entrega. Em Pedro Leopoldo (MG), a entrega ou retirada será combinada diretamente pelo WhatsApp."
  },
  {
    question: "O livro possui versão digital?",
    answer: "Ainda não. Neste momento, está disponível apenas o livro físico. Em breve, o E-book será lançado na Amazon para leitores do Brasil, Portugal, Angola e África do Sul. Posteriormente, também estará disponível para Moçambique por meio desta página."
  },
  {
    question: "O livro é apenas para mulheres que enfrentam infertilidade ou endometriose?",
    answer: "Não. Embora eu compartilhe minha caminhada de restauração da alma, vitória sobre a infertilidade, cura da endometriose e o chamado missionário para a África, o Sou Amada foi escrito para toda mulher que deseja conhecer mais profundamente a Cristo, descobrir sua verdadeira identidade e ser transformada pela verdade da Palavra de Deus."
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
