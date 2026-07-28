import { useInView } from "../hooks/useInView";

const ITEMS = [
  {
    title: "Atendimento Personalizado",
    desc: "Entendemos suas necessidades e criamos soluções sob medida para o seu evento.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="14" r="6" />
        <path d="M8 36c0-6.627 5.373-12 12-12s12 5.373 12 12" />
        <path d="M30 14a4 4 0 1 1 0-8" />
        <path d="M34 36c0-4.5-2-8.5-5.2-11" />
      </svg>
    ),
  },
  {
    title: "Ingredientes Selecionados",
    desc: "Utilizamos ingredientes frescos e de alta qualidade para garantir sabor e sofisticação.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4c-4 6-10 10-10 18a10 10 0 0 0 20 0c0-8-6-12-10-18z" />
        <path d="M16 28a4.5 4.5 0 0 0 4-2" />
      </svg>
    ),
  },
  {
    title: "Pontualidade Absoluta",
    desc: "Compromisso com prazos e excelência em cada etapa do serviço.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="22" r="14" />
        <path d="M20 12v10l6 4" />
        <path d="M20 4v4" />
      </svg>
    ),
  },
  {
    title: "Equipe Treinada",
    desc: "Profissionais capacitados para oferecer um atendimento discreto e eficiente.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="5" />
        <circle cx="28" cy="14" r="5" />
        <path d="M4 34c0-5.523 4.477-10 10-10" />
        <path d="M24 24c5.523 0 10 4.477 10 10" />
        <path d="M14 24h12" />
      </svg>
    ),
  },
  {
    title: "Apresentação Impecável",
    desc: "Cada detalhe visual é pensado para valorizar a experiência dos seus convidados.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="32" height="24" rx="2" />
        <path d="M4 16h32" />
        <path d="M14 24h12" />
        <path d="M18 28h4" />
      </svg>
    ),
  },
  {
    title: "Experiência Corporativa",
    desc: "Cerca de 25 anos de experiência em eventos, com repertório para diferentes públicos e formatos.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="14" width="24" height="22" rx="1" />
        <path d="M14 14V8h12v6" />
        <path d="M8 22h24" />
        <rect x="17" y="19" width="6" height="6" rx="1" />
      </svg>
    ),
  },
  {
    title: "São Paulo e Rio de Janeiro",
    desc: "Atendimento nas duas maiores capitais do país com a mesma qualidade e dedicação.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4C14.477 4 10 8.477 10 14c0 8 10 22 10 22s10-14 10-22c0-5.523-4.477-10-10-10z" />
        <circle cx="20" cy="14" r="4" />
      </svg>
    ),
  },
  {
    title: "Personalização Completa",
    desc: "Cardápios, decoração e serviço adaptados à identidade e ao propósito do seu evento.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="28" r="3" />
        <circle cx="28" cy="20" r="3" />
        <path d="M12 15v10M12 9V4M12 36v-5M28 23v13M28 4v13" />
      </svg>
    ),
  },
];

export default function Differentials() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`fade-section bg-white ${isInView ? "visible" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="mb-16 text-center">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">
            Diferenciais
          </span>
          <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl leading-snug tracking-wide text-charcoal lg:text-4xl">
            <em>O que nos torna diferentes</em>
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="stagger-child flex flex-col items-center text-center"
            >
              <div className="mb-5 text-gold">{item.icon}</div>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
