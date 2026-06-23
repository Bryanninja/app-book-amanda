export default function QuoteBanner() {
  return (
    <section className="w-full bg-theme-salmon/10 py-32 md:py-48 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1OTNlMmUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djI2aDJWMzRoMjZ2LTJoLTI2VjBoLTJ2MjZIMHYyaDI2djI2aDJWMzR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="text-theme-salmon text-6xl md:text-8xl font-serif absolute -top-8 md:-top-16 left-0 opacity-30 select-none">"</span>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-theme-brown leading-tight md:leading-snug text-balance">
          A última palavra nunca pertenceu ao diagnóstico, mas a Ele.
        </h2>
        <span className="text-theme-salmon text-6xl md:text-8xl font-serif absolute -bottom-16 md:-bottom-24 right-0 opacity-30 select-none rotate-180">"</span>
      </div>
    </section>
  );
}
