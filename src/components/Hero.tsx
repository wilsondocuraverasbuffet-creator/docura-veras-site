export function Hero() {
  return (
    <section id="top" className="hero">
      <img className="hero-image" src="/images/hero.jpg" alt="Mesa de coffee break premium cuidadosamente montada" />
      <div className="hero-shade" />
      <div className="hero-content page-width">
        <p className="eyebrow light">São Paulo · Rio de Janeiro</p>
        <h1>Especialistas em Catering Corporativo.</h1>
        <p className="hero-lead">Coffee breaks, eventos corporativos e soluções gastronômicas para empresas que valorizam excelência, organização e cuidado em cada detalhe.</p>
        <div className="hero-actions">
          <a className="button button-gold" href="#contato">Solicitar proposta personalizada</a>
          <a className="text-link light-link" href="#catering">Conhecer nossas soluções <span>↘</span></a>
        </div>
      </div>
      <div className="hero-foot page-width">
        <span>25 anos de experiência</span>
        <span>Coffee breaks e eventos corporativos</span>
        <span>Atendimento personalizado</span>
      </div>
    </section>
  );
}
