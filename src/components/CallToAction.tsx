import { SITE } from "../config/site";
import { useInView } from "../hooks/useInView";

export default function CallToAction() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`fade-section ${isInView ? "visible" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-12 lg:py-32">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-snug tracking-wide text-charcoal lg:text-4xl">
          <em>
            Vamos criar um evento que seus convidados jamais esquecerão.
          </em>
        </h2>

        <div className="my-8 mx-auto h-px w-16 bg-gold" />

        <a
          href={SITE.whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gold px-8 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase text-white transition-colors duration-300 hover:bg-gold-dark"
        >
          Solicitar Orçamento
        </a>
      </div>
    </section>
  );
}
