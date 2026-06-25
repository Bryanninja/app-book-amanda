import Image from "next/image";

export default function Gallery() {
  const photos = [
    { src: "/photos/batismo-mocambique.webp", alt: "Batismo nas águas em Moçambique" },
    { src: "/photos/casamento-michel.webp", alt: "Casamento com Michel" },
    { src: "/photos/bebe-clara.webp", alt: "O nascimento de Clara" },
    { src: "/photos/moises-cachorros.webp", alt: "Moisés na infância" },
    { src: "/photos/table-mountain-topo.webp", alt: "Família no topo da Table Mountain" },
    { src: "/photos/familia-grama.webp", alt: "A família reunida na grama" },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-theme-earth font-sans text-sm tracking-widest uppercase mb-4 block">A Jornada em Imagens</span>
          <h2 className="font-serif text-4xl md:text-5xl text-theme-brown mb-6">
            O milagre que os olhos puderam ver
          </h2>
          <p className="text-theme-brown/80 text-lg font-light">
          A restituição da família, as promessas cumpridas e a alegria de viver uma nova história.
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
                <Image 
                  src={photo.src} 
                  alt={photo.alt} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-all duration-700 group-hover:scale-105 saturate-[0.85] sepia-[.15] contrast-[1.05] brightness-[1.02] group-hover:saturate-100 group-hover:sepia-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
