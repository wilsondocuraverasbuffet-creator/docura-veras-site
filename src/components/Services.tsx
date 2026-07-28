import { useInView } from "../hooks/useInView";

const SERVICES = [
  {
    title: "Coffee Break Corporativo",
    img: "/images/service-coffee-break.jpg",
    alt: "Estação de coffee break premium com café especial, doces finos e mini sanduíches gourmet",
  },
  {
    title: "Eventos Empresariais",
    img: "/images/service-eventos-empresariais.jpg",
    alt: "Evento empresarial com buffet sofisticado e executivos interagindo",
  },
  {
    title: "Eventos Esportivos",
    img: "/images/service-eventos-esportivos.jpg",
    alt: "Catering premium para evento esportivo com estação de alimentação elegante",
  },
  {
    title: "Treinamentos",
    img: "/images/service-treinamentos.jpg",
    alt: "Sala de treinamento corporativo com coffee break refinado",
  },
  {
    title: "Convenções",
    img: "/images/service-convencoes.jpg",
    alt: "Convenção corporativa com serviço de catering premium em auditório",
  },
  {
    title: "Lançamentos",
    img: "/images/service-lancamentos.jpg",
    alt: "Evento de lançamento de produto com mesa de coquetel premium",
  },
  {
    title: "Coquetéis",
    img: "/images/service-coqueteis.jpg",
    alt: "Coquetel executivo com drinks sofisticados e canapés artesanais",
  },
  {
    title: "Eventos Sociais",
    img: "/images/service-eventos-sociais.jpg",
    alt: "Evento social elegante com buffet refinado e convidados bem vestidos",
  },
  {
    title: "Buffet Personalizado",
    img: "/images/service-buffet-personalizado.jpg",
    alt: "Buffet personalizado com mesa posta impecável e gastronomia artesanal",
  },
];

export default function Services() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="servicos"
      ref={ref}
      className={`fade-section ${isInView ? "visible" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="mb-16 text-center">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">
            Serviços
          </span>
          <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl leading-snug tracking-wide text-charcoal lg:text-4xl">
            <em>Soluções para cada ocasião</em>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="stagger-child group relative aspect-[4/3] overflow-hidden"
            >
              <img
                src={s.img}
                alt={s.alt}
                width={600}
                height={450}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              {/* Title */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white">
                  {s.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
