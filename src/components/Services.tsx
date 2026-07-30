const services = [
  { n: '01', title: 'Coffee Break Corporativo', text: 'Receções elegantes para reuniões, treinamentos, convenções e encontros de negócios.', image: '/images/service-coffee-break.jpg' },
  { n: '02', title: 'Eventos Empresariais', text: 'Hospitalidade alinhada à identidade e ao nível de exigência da sua empresa.', image: '/images/service-eventos-empresariais.jpg' },
  { n: '03', title: 'Eventos Esportivos', text: 'Operação ágil, logística precisa e cardápios pensados para atletas, equipas e convidados.', image: '/images/service-eventos-esportivos.jpg' },
  { n: '04', title: 'Catering Corporativo', text: 'Soluções personalizadas para encontros empresariais, ações de marca e operações corporativas.', image: '/images/service-lancamentos.jpg' },
];

export default function Services() {
  return (
    <section id="hospitalidade" className="bg-white py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div><p className="eyebrow">Nossa hospitalidade</p><h2 className="heading-xl mt-5">Experiências pensadas para diferentes encontros.</h2></div>
          <p className="body-copy max-w-xl lg:justify-self-end">Criamos soluções à medida, com cardápio, estrutura, equipa e apresentação definidos de acordo com o perfil de cada evento.</p>
        </div>
        <div className="space-y-6">
          {services.map((s, i) => (
            <article key={s.title} className={`group grid min-h-[480px] overflow-hidden bg-stone lg:grid-cols-2 ${i % 2 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
              <div className="overflow-hidden"><img src={s.image} alt={s.title} loading="lazy" className="h-full min-h-[360px] w-full object-cover transition duration-1000 group-hover:scale-[1.03]" /></div>
              <div className="flex flex-col justify-between p-9 lg:p-16">
                <span className="text-[10px] font-semibold tracking-[.25em] text-gold">{s.n}</span>
                <div className="mt-20"><h3 className="font-display text-4xl leading-tight text-ink lg:text-5xl">{s.title}</h3><p className="body-copy mt-6 max-w-md">{s.text}</p></div>
                <a href="#orcamento" className="mt-10 inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[.2em] text-ink"><span className="h-px w-10 bg-gold transition-all group-hover:w-16" />Solicitar proposta</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
