import { SITE } from "../config/site";

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-warm-gray-light/30 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div><span className="font-serif text-xl tracking-[0.12em] text-charcoal">Doçura Vera&rsquo;s</span><p className="mt-1 text-[9px] font-medium tracking-[0.25em] uppercase text-warm-gray">Buffet · Eventos · Hospitalidade</p></div>
          <div><h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold">Atendimento</h4><p className="mt-3 text-sm text-warm-gray">São Paulo e Rio de Janeiro</p><a className="mt-1 block text-sm text-warm-gray hover:text-gold" href={SITE.whatsappLink()} target="_blank" rel="noopener noreferrer">{SITE.contact.whatsappDisplay}</a></div>
          <div><h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold">Contato</h4><a className="mt-3 block text-sm text-warm-gray hover:text-gold" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a><a className="mt-1 block text-sm text-warm-gray hover:text-gold" href={SITE.social.instagram} target="_blank" rel="noopener noreferrer">{SITE.social.instagramDisplay}</a></div>
          <div><h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold">Orçamento</h4><p className="mt-3 text-sm leading-relaxed text-warm-gray">Conte-nos a data, a cidade e o perfil do seu evento.</p><a href="#orcamento" className="mt-4 inline-block text-[10px] font-semibold tracking-[0.18em] uppercase text-gold">Solicitar agora →</a></div>
        </div>
        <div className="mt-12 border-t border-warm-gray-light/30 pt-6 text-center"><p className="text-[10px] tracking-[0.15em] uppercase text-warm-gray">&copy; {new Date().getFullYear()} Doçura Vera&rsquo;s Buffet. Todos os direitos reservados.</p></div>
      </div>
    </footer>
  );
}
