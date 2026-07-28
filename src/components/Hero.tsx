import { useEffect, useState } from "react";
import { SITE } from "../config/site";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const onScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offsetY * 0.25}px)` }}
      >
        <img
          src="/images/hero.jpg"
          alt="Mesa de coffee break corporativo premium com louças refinadas, doces finos e arranjos florais discretos"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-12">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl leading-tight tracking-wide text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.15]">
            <em>Transformamos eventos em experiências memoráveis.</em>
          </h1>

          {/* Gold hairline */}
          <div className="my-6 h-px w-16 bg-gold" />

          <p className="max-w-lg text-base leading-relaxed text-white/85 lg:text-lg">
            Hospitalidade, gastronomia e organização para eventos corporativos, esportivos e sociais em São Paulo e no Rio de Janeiro.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#orcamento"
              className="inline-flex items-center bg-gold px-7 py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white transition-colors duration-300 hover:bg-gold-dark"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center border border-white/60 px-7 py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
