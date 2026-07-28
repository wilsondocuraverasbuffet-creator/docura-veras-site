const audiences = ['Empresas', 'Convenções', 'Treinamentos', 'Feiras', 'Lançamentos', 'Corridas', 'Eventos privados', 'Condomínios'];

export default function Audiences() {
  return (
    <section className="audiences-section">
      <div className="site-container audiences-grid">
        <div>
          <p className="eyebrow">Para quem atendemos</p>
          <h2 className="heading-xl">Hospitalidade ajustada ao contexto de cada encontro.</h2>
        </div>
        <div className="audience-list">
          {audiences.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}
        </div>
      </div>
    </section>
  );
}
