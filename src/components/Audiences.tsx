const audiences = ['Empresas', 'Convenções', 'Treinamentos', 'Feiras', 'Lançamentos', 'Corridas', 'Eventos privados', 'Condomínios'];
export function Audiences() {
  return (
    <section className="audience section page-width">
      <p className="eyebrow">Para quem atendemos</p>
      <h2>Catering adequado ao contexto, ao público e à sua marca.</h2>
      <div className="audience-list">{audiences.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, '0')}</span>{item}</div>)}</div>
    </section>
  );
}
