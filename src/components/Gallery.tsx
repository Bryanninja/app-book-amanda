import Image from 'next/image';

export default function Gallery() {
  const photos = [
    { src: '/photos/church.webp', alt: 'Igreja em Moçambique' },
    { src: '/photos/casamento-michel.webp', alt: 'Casamento com Michel' },
    { src: '/photos/bebe-clara.webp', alt: 'O nascimento de Clara' },
    {
      src: '/photos/amanda-kids.webp',
      alt: 'Amanda e Clara junto com as crianças na África',
    },
    {
      src: '/photos/amanda-family.webp',
      alt: 'A Família reunida',
    },
    { src: '/photos/mission.webp', alt: 'Missões na África' },
  ];

  return (
    <section className="overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-theme-earth mb-4 block font-sans text-sm tracking-widest uppercase">
            A Jornada em Imagens
          </span>
          <h2 className="text-theme-brown mb-6 font-serif text-4xl md:text-5xl">
            O milagre que os olhos puderam ver
          </h2>
          <p className="text-theme-brown/80 text-lg font-light">
            A restituição da família, as promessas cumpridas e a alegria de
            viver uma nova história.
          </p>
        </div>

        {/* CSS Masonry-like Grid Simples */}
        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="border-theme-brown/5 group break-inside-avoid overflow-hidden rounded-2xl border shadow-lg"
            >
              <div className="relative aspect-square w-full bg-neutral-100">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover brightness-[1.02] contrast-[1.05] saturate-[0.85] sepia-[.15] transition-all duration-700 group-hover:scale-105 group-hover:saturate-100 group-hover:sepia-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
