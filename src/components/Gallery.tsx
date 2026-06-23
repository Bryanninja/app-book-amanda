export default function Gallery() {
  // Array de placeholders que serão substituídos pelas fotos reais.
  // A Amanda mandou várias fotos (Batismo, África, Moisés, Clara, Casamento).
  const photos = [
    { src: "/gallery-1.jpg", alt: "Batismo nas águas" },
    { src: "/gallery-2.jpg", alt: "Família em Moçambique" },
    { src: "/gallery-3.jpg", alt: "O nascimento de Clara" },
    { src: "/gallery-4.jpg", alt: "O Casamento com Michel" },
    { src: "/gallery-5.jpg", alt: "Moisés na infância" },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-theme-earth font-sans text-sm tracking-widest uppercase mb-4 block">A Jornada em Imagens</span>
          <h2 className="font-serif text-4xl md:text-5xl text-theme-brown mb-6">
            O milagre que os olhos puderam ver
          </h2>
          <p className="text-xl font-light font-sans text-theme-brown/70 max-w-2xl mx-auto">
            Da dor do diagnóstico à alegria do batismo em terras moçambicanas.
          </p>
        </div>

        {/* CSS Masonry-like Grid Simples */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg border border-theme-brown/5 group"
            >
              <div className="relative w-full aspect-square bg-neutral-100">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
