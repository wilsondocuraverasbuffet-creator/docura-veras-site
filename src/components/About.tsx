import { useInView } from "../hooks/useInView";

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="sobre"
      ref={ref}
      className={`fade-section ${isInView ? "visible" : ""}`}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-32">
        {/* Text */}
        <div className="flex flex-col justify-center">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">
            Sobre Nós
          </span>

          <h2 className="mt-4 font-serif text-3xl leading-snug tracking-wide text-charcoal lg:text-4xl">
            <em>Excelência que se sente em cada detalhe.</em>
          </h2>

          <p className="mt-6 leading-relaxed text-warm-gray lg:text-[17px]">
            Há cerca de 25 anos, a Doçura Vera's transforma encontros em experiências marcadas pelo cuidado. Nossa história foi construída em eventos corporativos, esportivos e sociais, sempre com atenção verdadeira às pessoas e aos detalhes.
          </p>

          <p className="mt-4 leading-relaxed text-warm-gray lg:text-[17px]">
            Unimos produção artesanal, apresentação elegante, organização e atendimento próximo. Do planejamento à desmontagem, nossa equipe cuida de cada etapa para que o cliente possa receber bem e aproveitar o evento com tranquilidade.
          </p>

          <p className="mt-8 text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">
            São Paulo &nbsp;|&nbsp; Rio de Janeiro
          </p>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src="/images/about.jpg"
            alt="Detalhe de mesa de buffet corporativo com louças refinadas e guardanapos de tecido personalizados"
            width={720}
            height={900}
            loading="lazy"
            className="h-full w-full rounded-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
}
