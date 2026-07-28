const pillars = [
  ['Produção', 'Preparação cuidadosa, controlo de qualidade e apresentação consistente.'],
  ['Logística', 'Transporte, cronograma e equipa coordenados para cada local e horário.'],
  ['Montagem', 'Composição elegante do espaço com atenção à circulação e aos detalhes.'],
  ['Serviço', 'Atendimento discreto, cordial e atento durante toda a experiência.'],
];

export default function Structure() {
  return (
    <section id="estrutura" className="structure-section">
      <div className="site-container structure-grid">
        <div className="structure-image-wrap">
          <img src="/images/about.jpg" alt="Estrutura e preparação da Doçura Vera's" loading="lazy" />
          <span className="image-caption">Bastidores · preparação · cuidado</span>
        </div>
        <div className="structure-content">
          <p className="eyebrow">Nossa estrutura</p>
          <h2 className="heading-xl">A excelência que o convidado vê começa nos bastidores.</h2>
          <p className="body-copy structure-intro">Uma operação bem executada depende de processos claros, equipa preparada e atenção a cada etapa.</p>
          <div className="pillar-list">
            {pillars.map(([title, text], index) => (
              <article className="pillar-item" key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
