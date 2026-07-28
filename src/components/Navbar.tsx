import { useEffect, useState } from 'react';
import { SITE } from '../config/site';

const links = [
  ['A marca', '#sobre'],
  ['Hospitalidade', '#hospitalidade'],
  ['Como trabalhamos', '#metodo'],
  ['Estrutura', '#estrutura'],
  ['Portfólio', '#portfolio'],
  ['Orçamento', '#orcamento'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ivory/95 shadow-[0_1px_0_rgba(39,35,31,.08)] backdrop-blur' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-12">
        <a href="#hero" aria-label="Página inicial" className="leading-none">
          <span className={`block font-display text-[1.55rem] tracking-[.08em] ${scrolled || open ? 'text-ink' : 'text-white'}`}>{SITE.brand}</span>
          <span className={`mt-2 block text-[8px] font-medium uppercase tracking-[.28em] ${scrolled || open ? 'text-taupe' : 'text-white/70'}`}>{SITE.descriptor}</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => <a key={href} href={href} className={`nav-link ${scrolled ? 'text-ink' : 'text-white'}`}>{label}</a>)}
          <a href="#orcamento" className="border border-gold px-5 py-3 text-[10px] font-semibold uppercase tracking-[.2em] text-gold transition hover:bg-gold hover:text-white">Solicitar orçamento</a>
        </div>

        <button aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)} className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden">
          <span className={`h-px w-6 transition ${open ? 'translate-y-[4px] rotate-45 bg-ink' : scrolled ? 'bg-ink' : 'bg-white'}`} />
          <span className={`h-px w-6 transition ${open ? '-translate-y-[3px] -rotate-45 bg-ink' : scrolled ? 'bg-ink' : 'bg-white'}`} />
        </button>
      </nav>

      <div className={`fixed inset-0 z-40 grid place-items-center bg-ivory transition duration-500 lg:hidden ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="flex flex-col items-center gap-7">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="font-display text-3xl text-ink">{label}</a>)}
        </div>
      </div>
    </header>
  );
}
