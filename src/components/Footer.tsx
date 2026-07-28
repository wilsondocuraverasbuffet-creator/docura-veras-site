import { SITE } from '../config/site';
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main page-width">
        <div><div className="footer-brand">Doçura Vera's</div><p>{SITE.signature}</p></div>
        <div className="footer-nav"><a href="#marca">A marca</a><a href="#catering">Catering</a><a href="#estrutura">Estrutura</a><a href="#portfolio">Portfólio</a></div>
        <div className="footer-contact"><a href={SITE.social.instagram} target="_blank" rel="noreferrer">{SITE.social.instagramDisplay}</a><a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a><a href={SITE.whatsappLink()} target="_blank" rel="noreferrer">{SITE.contact.whatsappDisplay}</a></div>
      </div>
      <div className="footer-bottom page-width"><span>© {new Date().getFullYear()} Doçura Vera's</span><span>Especialistas em Catering Corporativo</span></div>
    </footer>
  );
}
