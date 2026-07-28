import { useInView } from "../hooks/useInView";

const GALLERY = [
  { src: "/images/gallery-1.jpg", alt: "Detalhe de doces finos sobre louça branca com acabamento dourado", span: "lg:col-span-2 lg:row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Mesa de coffee break corporativo completa com café, sucos e frutas", span: "" },
  { src: "/images/gallery-3.jpg", alt: "Arranjo floral discreto sobre mesa de evento executivo", span: "" },
  { src: "/images/gallery-4.jpg", alt: "Mini sanduíches gourmet em bandeja de prata", span: "lg:col-span-2" },
  { src: "/images/gallery-5.jpg", alt: "Auditório corporativo com serviço de catering elegante ao fundo", span: "" },
  { src: "/images/gallery-6.jpg", alt: "Detalhe de café sendo servido em xícara de porcelana", span: "" },
];

export default function Gallery() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="galeria"
      ref={ref}
      className={`fade-section bg-white ${isInView ? "visible" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="mb-16 text-center">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">
            Galeria
          </span>
          <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl leading-snug tracking-wide text-charcoal lg:text-4xl">
            <em>Momentos que inspiram</em>
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[280px]">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className={`stagger-child group overflow-hidden ${g.span}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                width={800}
                height={600}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
