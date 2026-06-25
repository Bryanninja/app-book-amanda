import { X, Check } from "lucide-react";

const transformations = [
  {
    dor: "Pressão para ser uma mulher endurecida e de alta performance.",
    solucao: "Descanso na identidade de filha amada e o resgate da leveza feminina."
  },
  {
    dor: "Sentimento de vergonha e culpa por erros no casamento ou na maternidade.",
    solucao: "A compreensão do perdão de Deus e a construção de um lar fundamentado em Cristo."
  },
  {
    dor: "Diagnósticos médicos implacáveis, dores físicas severas e infertilidade.",
    solucao: "O encontro com a paz de Deus no meio do vale e a manifestação de milagres."
  },
  {
    dor: "O medo do desconhecido e a exaustão diante de grandes mudanças de vida.",
    solucao: "A confiança de que Deus prepara conexões divinas em lugares improváveis."
  }
];

export default function Transformation() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-16">
          <span className="text-theme-earth font-sans text-sm tracking-widest uppercase mb-4 block">A Transformação</span>
          <h2 className="font-serif text-4xl md:text-5xl text-theme-brown mb-6 text-balance">
            O que você vai encontrar neste livro
          </h2>
          <p className="text-xl font-light font-sans text-theme-brown/90 max-w-2xl mx-auto">
            Uma troca poderosa entre aquilo que o mundo exige de você e aquilo que o Pai já preparou para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Coluna 1: A Ilusão do Mundo (Dores) */}
            <div className="bg-neutral-50/50 border border-neutral-200 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 opacity-80">
                  <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0">
                    <X className="w-5 h-5 text-neutral-500" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-theme-brown">A Ilusão do Mundo</h3>
                </div>

                <ul className="space-y-6">
                  {[
                    "Pressão para ser uma mulher endurecida e de alta performance.",
                    "Sentimento de vergonha e culpa por erros no casamento ou na maternidade.",
                    "Diagnósticos médicos implacáveis, dores físicas severas e infertilidade.",
                    "O medo do desconhecido e a exaustão diante de grandes mudanças de vida.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start opacity-85 transition-opacity duration-300 hover:opacity-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 mt-2.5 flex-shrink-0" />
                      <p className="text-theme-brown/90 font-sans text-lg font-light leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          {/* Coluna 2: A Verdade de Deus (Transformação) */}
          <div className="bg-white border border-theme-salmon/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group scale-100 md:scale-105 z-10">
            {/* Efeito de background sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-theme-salmon/10 to-transparent" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-theme-salmon/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-theme-salmon" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-theme-brown font-semibold">A Verdade de Deus</h3>
              </div>

              <ul className="space-y-6">
                {[
                  "Descanso na identidade de filha amada e o resgate da leveza feminina.",
                  "A compreensão do perdão de Deus e a construção de um lar fundamentado em Cristo.",
                  "O encontro com a paz de Deus no meio do vale e a manifestação de milagres.",
                  "A confiança de que Deus prepara conexões divinas em lugares improváveis.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-theme-salmon mt-2.5 flex-shrink-0 shadow-sm" />
                    <p className="text-theme-brown/90 font-sans text-lg font-normal leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
