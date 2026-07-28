import { SITE } from '../config/site';
export function FloatingWhatsApp() {
  return <a className="floating-whatsapp" href={SITE.whatsappLink()} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><span>WhatsApp</span><b>↗</b></a>;
}
