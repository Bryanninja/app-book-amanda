export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-theme-base pt-32 pb-24 px-6 md:px-16 selection:bg-theme-salmon/30 selection:text-theme-brown">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-theme-brown mb-8">Termos de Uso</h1>
        
        <div className="space-y-6 font-sans text-lg text-theme-brown/80 font-light leading-relaxed">
          <p>
            Bem-vindo ao site Sou Amada. Ao acessar este site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
          </p>
          
          <h2 className="font-serif text-2xl text-theme-brown mt-8 mb-4">1. Uso de Licença</h2>
          <p>
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Sou Amada, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>modificar ou copiar os materiais;</li>
            <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Sou Amada;</li>
            <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
            <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
          </ul>

          <h2 className="font-serif text-2xl text-theme-brown mt-8 mb-4">2. Isenção de responsabilidade</h2>
          <p>
            Os materiais no site da Sou Amada são fornecidos 'como estão'. Sou Amada não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
          </p>

          <h2 className="font-serif text-2xl text-theme-brown mt-8 mb-4">3. Compras e Transações</h2>
          <p>
            As vendas do livro físico e E-book são gerenciadas por plataformas parceiras de alta segurança (como Mercado Livre e Amazon). Questões relacionadas ao processamento do pagamento, estorno ou garantia da entrega física estão sujeitas aos termos dessas respectivas plataformas. Para vendas diretas (ex: via M-Pesa), o suporte é feito diretamente através do nosso contato de WhatsApp oficial.
          </p>

          <h2 className="font-serif text-2xl text-theme-brown mt-8 mb-4">4. Modificações</h2>
          <p>
            O site Sou Amada pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
          </p>

          <div className="mt-12 pt-8 border-t border-theme-brown/10">
            <a href="/" className="text-theme-salmon hover:text-theme-salmon-light font-medium transition-colors">
              ← Voltar para a página inicial
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
