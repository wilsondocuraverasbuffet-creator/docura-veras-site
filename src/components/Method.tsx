const steps = [
  ['01', 'Planejamento', 'Entendemos o evento, o público, o espaço e os objetivos.'],
  ['02', 'Produção', 'Organizamos insumos, equipa e cada detalhe da apresentação.'],
  ['03', 'Logística', 'Planejamos transporte, horários e necessidades de acesso.'],
  ['04', 'Montagem', 'Construímos uma experiência visualmente coerente e funcional.'],
  ['05', 'Atendimento', 'Recebemos e servimos com atenção, agilidade e discrição.'],
  ['06', 'Encerramento', 'Finalizamos a operação com organização e responsabilidade.'],
];

export function Method() {
  return (
    <section className="section method page-width">
      <div className="section-heading">
        <div><p className="eyebrow">Nosso método</p><h2>Precisão nos bastidores. Leveza para quem participa.</h2></div>
        <p>Sabemos que um evento não permite segunda oportunidade. Por isso, estruturamos cada etapa com método, presença e atenção.</p>
      </div>
      <div className="method-list">
        {steps.map(([n, title, text]) => (
          <div className="method-item" key={title}><span>{n}</span><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>
    </section>
  );
}
