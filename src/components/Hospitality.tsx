const services = [
  { number: '01', title: 'Coffee Break Corporativo', text: 'Recepções elegantes para reuniões, treinamentos, convenções e encontros estratégicos.', image: '/images/service-coffee-break.jpg' },
  { number: '02', title: 'Eventos Corporativos', text: 'Soluções completas para lançamentos, feiras, confraternizações, cocktails e ações de marca.', image: '/images/service-eventos-empresariais.jpg' },
  { number: '03', title: 'Eventos Esportivos', text: 'Operação ágil e estruturada para corridas, provas, ativações e experiências de grande fluxo.', image: '/images/service-eventos-esportivos.jpg' },
  { number: '04', title: 'Eventos Sociais', text: 'Catering personalizado para celebrações, encontros privados e ocasiões especiais.', image: '/images/service-eventos-sociais.jpg' },
];

export function Hospitality() {
  return (
    <section id="catering" className="hospitality section-dark">
      <div className="page-width section-heading light-heading">
        <div><p className="eyebrow light">Catering corporativo</p><h2>Soluções pensadas para cada ocasião.</h2></div>
        <p>Do primeiro alinhamento ao último convidado, cada entrega é planejada para oferecer fluidez, beleza e segurança.</p>
      </div>
      <div className="service-editorial page-width">
        {services.map((service, index) => (
          <article className={`service-row ${index % 2 ? 'reverse' : ''}`} key={service.title}>
            <div className="service-image-wrap"><img src={service.image} alt={service.title} loading="lazy" /></div>
            <div className="service-copy">
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#contato" className="text-link light-link">Planejar este evento <span>↘</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
