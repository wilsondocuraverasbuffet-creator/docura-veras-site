export function Hero() {
  return (
    <section id="top" className="hero">
      <img className="hero-image" src="/images/hero.jpg" alt="Mesa de coffee break premium cuidadosamente montada" />
      <div className="hero-shade" />
      <div className="hero-content page-width">
        <p className="eyebrow light">São Paulo · Rio de Janeiro</p>
        <h1>Hospitalidade que representa a sua marca.</h1>
        <p className="hero-lead">Experiências gastronómicas para empresas e eventos que valorizam excelência, organização e cuidado em cada detalhe.</p>
        <div className="hero-actions">
          <a className="button button-gold" href="#contato">Solicitar orçamento</a>
          <a className="text-link light-link" href="#hospitalidade">Conhecer nossa hospitalidade <span>↘</span></a>
        </div>
      </div>
      <div className="hero-foot page-width">
        <span>25 anos de experiência</span>
        <span>Eventos corporativos e sociais</span>
        <span>Atendimento personalizado</span>
      </div>
    </section>
  );
}
