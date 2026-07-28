import { useEffect, useState } from 'react';
import { SITE } from '../config/site';

const links = [
  ['A marca', '#marca'],
  ['Hospitalidade', '#hospitalidade'],
  ['Estrutura', '#estrutura'],
  ['Portfólio', '#portfolio'],
  ['Contato', '#contato'],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav-shell ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand-lockup" href="#top" aria-label="Doçura Vera's - início">
        <span className="brand-name">Doçura Vera's</span>
        <span className="brand-descriptor">{SITE.descriptor}</span>
      </a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>
        <span /><span />
      </button>
      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Navegação principal">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contato" onClick={() => setOpen(false)}>Solicitar orçamento</a>
      </nav>
    </header>
  );
}
