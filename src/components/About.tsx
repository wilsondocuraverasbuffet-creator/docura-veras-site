import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, isInView } = useInView();
  return (
    <section id="sobre" ref={ref} className={`reveal bg-ivory ${isInView ? 'visible' : ''}`}>
      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">A nossa essência</p>
            <div className="mt-16 hidden lg:block">
              <span className="font-display text-8xl leading-none text-gold">25</span>
              <p className="mt-3 max-w-[12rem] text-xs uppercase leading-5 tracking-[.18em] text-taupe">anos de experiência em eventos</p>
            </div>
          </div>
          <div>
            <h2 className="heading-xl">Servir bem é compreender que cada detalhe comunica.</h2>
            <div className="mt-10 grid gap-8 border-t border-line pt-9 md:grid-cols-2">
              <p className="body-copy">A Doçura Vera’s nasceu do prazer de receber. Ao longo de mais de duas décadas, transformámos esse cuidado numa operação preparada para eventos que exigem precisão, apresentação e confiança.</p>
              <p className="body-copy">Planeamos cada etapa — da produção à montagem, do serviço ao encerramento — para que o cliente possa dedicar-se aos seus convidados com tranquilidade.</p>
            </div>
            <blockquote className="mt-14 font-display text-3xl italic leading-snug text-ink md:text-4xl">“Não servimos apenas alimentos. Criamos a forma como as pessoas se sentem ao chegar.”</blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
