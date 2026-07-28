import { SITE } from '../config/site';

export default function Footer() {
  return (
    <footer id="contato" className="bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-3">
          <div><p className="font-display text-3xl tracking-[.06em]">{SITE.brand}</p><p className="mt-3 text-[9px] uppercase tracking-[.28em] text-white/45">{SITE.descriptor}</p><p className="mt-8 max-w-xs font-display text-2xl italic text-sand">{SITE.signature}</p></div>
          <div><p className="footer-title">Contato</p><a href={SITE.whatsappLink()} target="_blank" rel="noopener noreferrer" className="footer-link mt-5">{SITE.contact.whatsappDisplay}</a><a href={`mailto:${SITE.contact.email}`} className="footer-link">{SITE.contact.email}</a><a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="footer-link">{SITE.social.instagramDisplay}</a></div>
          <div><p className="footer-title">Atendimento</p><p className="mt-5 text-sm leading-7 text-white/60">Eventos corporativos, esportivos e sociais em São Paulo e no Rio de Janeiro.</p><a href="#orcamento" className="mt-7 inline-block text-[10px] font-semibold uppercase tracking-[.2em] text-gold">Solicitar orçamento →</a></div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-[9px] uppercase tracking-[.16em] text-white/35 md:flex-row md:justify-between"><p>© {new Date().getFullYear()} {SITE.legalName}</p><p>Hospitalidade · Eventos · Experiências</p></div>
      </div>
    </footer>
  );
}
