import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Orçamento", href: "#orcamento" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <a href="#" className="flex flex-col" aria-label="Doçura Vera's — Página inicial">
          <span
            className={`font-serif text-xl tracking-[0.12em] transition-colors duration-500 lg:text-2xl ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            Doçura Vera&rsquo;s
          </span>
          <span
            className={`text-[9px] font-medium tracking-[0.25em] uppercase transition-colors duration-500 ${
              scrolled ? "text-warm-gray" : "text-white/70"
            }`}
          >
            Buffet &middot; Eventos &middot; Catering
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[5px] lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-px w-5 transition-all duration-300 ${
              open
                ? "translate-y-[3px] rotate-45 bg-charcoal"
                : scrolled
                ? "bg-charcoal"
                : "bg-white"
            }`}
          />
          <span
            className={`block h-px w-5 transition-all duration-300 ${
              open
                ? "-translate-y-[3px] -rotate-45 bg-charcoal"
                : scrolled
                ? "bg-charcoal"
                : "bg-white"
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-beige transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl tracking-wide text-charcoal transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
