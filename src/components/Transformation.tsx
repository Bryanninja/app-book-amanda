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
          <p className="text-xl font-light font-sans text-theme-brown/70 max-w-2xl mx-auto">
            Uma troca poderosa entre aquilo que o mundo exige de você e aquilo que o Pai já preparou para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Coluna da Dor */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-theme-brown/50 text-center mb-8">A Ilusão do Mundo</h3>
            {transformations.map((t, i) => (
              <div key={i} className="bg-theme-base p-6 md:p-8 rounded-2xl border border-theme-brown/5 relative opacity-70">
                <div className="absolute -left-3 -top-3 bg-red-100 p-2 rounded-full text-red-500">
                  <X strokeWidth={2} size={16} />
                </div>
                <p className="font-sans text-lg text-theme-brown/70">{t.dor}</p>
              </div>
            ))}
          </div>

          {/* Coluna da Solução */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-theme-salmon text-center mb-8">A Verdade de Deus</h3>
            {transformations.map((t, i) => (
              <div key={i} className="bg-theme-salmon/5 p-6 md:p-8 rounded-2xl border border-theme-salmon/20 relative shadow-lg shadow-theme-salmon/5">
                <div className="absolute -left-3 -top-3 bg-theme-salmon text-white p-2 rounded-full">
                  <Check strokeWidth={3} size={16} />
                </div>
                <p className="font-sans text-xl text-theme-brown font-medium leading-relaxed">{t.solucao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
