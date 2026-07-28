const photos = [
  ['/images/gallery-2.jpg', 'Coffee Break', 'Corporativo'],
  ['/images/gallery-3.jpg', 'Recepção', 'Experiência'],
  ['/images/gallery-6.jpg', 'Eventos', 'Catering'],
  ['/images/service-coqueteis.jpg', 'Cocktail', 'Conexões'],
  ['/images/service-convencoes.jpg', 'Convenções', 'Presença'],
];
export function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section-dark">
      <div className="page-width section-heading light-heading">
        <div><p className="eyebrow light">Portfólio</p><h2>Momentos construídos com intenção.</h2></div>
        <p>Uma seleção de experiências em que gastronomia, ambiente e serviço trabalham juntos.</p>
      </div>
      <div className="portfolio-grid page-width">
        {photos.map(([src, title, tag], i) => (
          <figure key={src} className={`portfolio-card card-${i + 1}`}><img src={src} alt={title} loading="lazy" /><figcaption><span>{tag}</span><strong>{title}</strong></figcaption></figure>
        ))}
      </div>
    </section>
  );
}
