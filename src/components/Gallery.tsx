const images = [
  ['/images/gallery-1.jpg', 'Coffee break corporativo'],
  ['/images/gallery-2.jpg', 'Apresentação gastronómica'],
  ['/images/gallery-3.jpg', 'Montagem de evento'],
  ['/images/gallery-4.jpg', 'Hospitalidade em cada detalhe'],
  ['/images/gallery-5.jpg', 'Evento empresarial'],
  ['/images/gallery-6.jpg', 'Experiência Doçura Vera’s'],
];

export default function Gallery() {
  return (
    <section id="portfolio" className="bg-ivory py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-14 grid gap-6 lg:grid-cols-2"><div><p className="eyebrow">Portfólio</p><h2 className="heading-xl mt-5">Cenários que acolhem. Detalhes que permanecem.</h2></div><p className="body-copy max-w-lg self-end lg:justify-self-end">Uma seleção de experiências que traduzem a nossa forma de receber: elegante, organizada e sempre atenta ao contexto de cada cliente.</p></div>
        <div className="grid auto-rows-[230px] gap-4 md:grid-cols-12 md:auto-rows-[280px]">
          {images.map(([src, alt], i) => <figure key={src} className={`group relative overflow-hidden ${i === 0 ? 'md:col-span-7 md:row-span-2' : i === 1 ? 'md:col-span-5' : i === 2 ? 'md:col-span-5' : i === 3 ? 'md:col-span-4' : 'md:col-span-4'}`}><img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-16 text-[10px] uppercase tracking-[.2em] text-white opacity-0 transition group-hover:opacity-100">{alt}</figcaption></figure>)}
        </div>
      </div>
    </section>
  );
}
