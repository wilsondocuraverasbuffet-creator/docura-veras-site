const items = ['Produção própria', 'Logística planejada', 'Montagem completa', 'Equipa preparada', 'Apresentação refinada', 'Acompanhamento integral'];
export function Structure() {
  return (
    <section id="estrutura" className="structure-section">
      <div className="structure-collage">
        <img className="collage-a" src="/images/gallery-1.jpg" alt="Montagem de evento" loading="lazy" />
        <img className="collage-b" src="/images/gallery-4.jpg" alt="Detalhe de mesa" loading="lazy" />
        <img className="collage-c" src="/images/gallery-5.jpg" alt="Produção gastronómica" loading="lazy" />
      </div>
      <div className="structure-copy">
        <p className="eyebrow">Nossa estrutura</p>
        <h2>O cuidado que o convidado vê começa no trabalho que ele não vê.</h2>
        <p>Uma operação segura combina preparação, logística, equipa e apresentação. Cuidamos de toda a jornada para que o cliente possa dedicar sua atenção aos convidados.</p>
        <ul>{items.map(item => <li key={item}><span>—</span>{item}</li>)}</ul>
      </div>
    </section>
  );
}
