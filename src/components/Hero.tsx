export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <img src="/images/hero.jpg" alt="Hospitalidade premium em evento corporativo" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,18,15,.77)_0%,rgba(21,18,15,.48)_48%,rgba(21,18,15,.14)_100%)]" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] items-end px-6 pb-20 pt-40 lg:px-12 lg:pb-24">
        <div className="max-w-4xl">
          <p className="mb-7 text-[10px] font-semibold uppercase tracking-[.34em] text-sand">São Paulo · Rio de Janeiro</p>
          <h1 className="font-display text-[clamp(3rem,7.2vw,7.3rem)] leading-[.92] tracking-[-.025em] text-white">Hospitalidade que representa a sua marca.</h1>
          <div className="mt-8 max-w-xl border-l border-gold pl-6">
            <p className="text-base leading-8 text-white/80 lg:text-lg">Coffee breaks, eventos corporativos e experiências gastronómicas criadas com rigor, elegância e atenção absoluta aos detalhes.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#orcamento" className="btn-primary">Solicitar orçamento</a>
            <a href="#hospitalidade" className="btn-ghost">Conhecer a nossa hospitalidade</a>
          </div>
        </div>
      </div>
      <a href="#sobre" aria-label="Descer" className="absolute bottom-8 right-8 hidden items-center gap-4 text-[9px] uppercase tracking-[.25em] text-white/60 lg:flex"><span className="h-px w-12 bg-white/40" />Descobrir</a>
    </section>
  );
}
