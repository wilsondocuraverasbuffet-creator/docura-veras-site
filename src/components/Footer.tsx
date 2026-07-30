import { SITE } from '../config/site';
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main page-width">
        <div><div className="footer-brand">Doçura Vera's</div><p>{SITE.signature}</p><p className="footer-area">Atendimento em São Paulo e Rio de Janeiro.</p></div>
        <div className="footer-nav"><strong>Serviços</strong><a href="/coffee-break">Coffee Break</a><a href="/eventos-esportivos">Eventos Esportivos</a><a href="/#catering">Catering Corporativo</a><a href="/#catering">Eventos Corporativos</a></div>
        <div className="footer-nav"><strong>Navegação</strong><a href="/">Início</a><a href="/#portfolio">Portfólio</a><a href="/#marca">Sobre</a><a href="/#contato">Contato</a></div>
        <div className="footer-contact"><strong>Contato</strong><a href={SITE.social.instagram} target="_blank" rel="noreferrer">{SITE.social.instagramDisplay}</a><a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a><a href={SITE.whatsappLink()} target="_blank" rel="noreferrer">{SITE.contact.whatsappDisplay}</a></div>
      </div>
      <div className="footer-bottom page-width"><span>© {new Date().getFullYear()} Doçura Vera's</span><span>Especialistas em Catering Corporativo</span></div>
    </footer>
  );
}
