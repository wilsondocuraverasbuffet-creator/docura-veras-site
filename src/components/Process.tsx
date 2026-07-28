const steps = [
  ['01', 'Escuta', 'Compreendemos o evento, os convidados e a imagem que deseja transmitir.'],
  ['02', 'Planeamento', 'Definimos cardápio, estrutura, logística, equipa e cronograma.'],
  ['03', 'Produção', 'Preparamos cada item com controlo, qualidade e apresentação.'],
  ['04', 'Montagem', 'Organizamos o espaço com discrição, precisão e pontualidade.'],
  ['05', 'Hospitalidade', 'Acompanhamos o serviço para que tudo flua com naturalidade.'],
];

export default function Process() {
  return (
    <section id="metodo" className="bg-ink py-24 text-white lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow text-sand">Como trabalhamos</p><h2 className="heading-xl mt-5 text-white">Um evento impecável começa muito antes da chegada dos convidados.</h2></div>
          <div className="border-t border-white/15">
            {steps.map(([n, title, text]) => <div key={n} className="grid gap-5 border-b border-white/15 py-8 md:grid-cols-[60px_180px_1fr]"><span className="text-[10px] tracking-[.2em] text-gold">{n}</span><h3 className="font-display text-2xl">{title}</h3><p className="max-w-xl text-sm leading-7 text-white/60">{text}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
