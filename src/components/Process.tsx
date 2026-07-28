import { useInView } from "../hooks/useInView";

const STEPS = [
  {
    num: "01",
    title: "Entendimento da necessidade",
    desc: "Ouvimos sua visão, compreendemos o perfil dos convidados e os objetivos do evento.",
  },
  {
    num: "02",
    title: "Planejamento personalizado",
    desc: "Elaboramos uma proposta sob medida: cardápio, logística, decoração e cronograma.",
  },
  {
    num: "03",
    title: "Produção artesanal",
    desc: "Cada item é preparado com ingredientes selecionados pela nossa equipe de chefs.",
  },
  {
    num: "04",
    title: "Montagem elegante",
    desc: "Cuidamos de cada detalhe da ambientação, das louças ao último guardanapo.",
  },
  {
    num: "05",
    title: "Atendimento durante o evento",
    desc: "Nossa equipe garante um serviço fluido, discreto e impecável do início ao fim.",
  },
  {
    num: "06",
    title: "Encerramento impecável",
    desc: "Desmontagem silenciosa e organizada. Você aproveita; nós resolvemos o resto.",
  },
];

export default function Process() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`fade-section ${isInView ? "visible" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="mb-16 text-center">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">
            Processo
          </span>
          <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl leading-snug tracking-wide text-charcoal lg:text-4xl">
            <em>Como trabalhamos</em>
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-0 divide-y divide-warm-gray-light/40">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="stagger-child grid grid-cols-[auto_1fr] gap-6 py-8 lg:grid-cols-[60px_200px_1fr] lg:gap-10 lg:py-10"
            >
              <span className="font-serif text-3xl text-gold lg:text-4xl">
                {step.num}
              </span>
              <div>
                <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray lg:hidden">
                  {step.desc}
                </p>
              </div>
              <p className="hidden text-[15px] leading-relaxed text-warm-gray lg:block">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
