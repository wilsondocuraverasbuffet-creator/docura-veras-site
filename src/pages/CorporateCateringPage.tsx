import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { QuoteForm } from '../components/QuoteForm';
import { Reveal } from '../components/Reveal';
import { SITE } from '../config/site';

const occasions = [
  ['Reuniões e treinamentos','Coffee breaks, refeições e pausas gastronômicas planejadas conforme a duração e o perfil do encontro.'],
  ['Convenções e congressos','Operações organizadas para receber equipes, convidados e participantes em diferentes momentos do evento.'],
  ['Lançamentos e ativações','Apresentação alinhada ao posicionamento da marca e à experiência que a empresa deseja proporcionar.'],
  ['Recepções executivas','Serviços mais refinados para diretoria, clientes estratégicos, parceiros e convidados especiais.'],
];

const pillars = [
  ['Produção própria','Controle de qualidade, frescor, padronização e flexibilidade para adaptar cada proposta.'],
  ['Apresentação impecável','Mesas e alimentos organizados para reforçar profissionalismo e valorizar a imagem da empresa.'],
  ['Personalização','Cardápio, formato de serviço e estrutura definidos conforme público, horário, local e objetivo.'],
  ['Experiência corporativa','Mais de 25 anos atendendo empresas e operações que exigem pontualidade, organização e confiança.'],
  ['Flexibilidade operacional','Capacidade de ajustar quantidades, logística e formato diante das necessidades reais do evento.'],
];

const services = [
  ['Coffee break','Formatos tradicionais, executivos, leves ou premium para reuniões, treinamentos e encontros empresariais.'],
  ['Brunch e café da manhã','Composições completas para recepções matinais, integrações, workshops e eventos internos.'],
  ['Coquetel corporativo','Salgados, finger foods, bebidas e apresentação refinada para networking, lançamentos e celebrações.'],
  ['Refeições e apoio gastronômico','Soluções personalizadas para agendas mais longas, equipes de produção e convidados.'],
];

const faqs = [
  ['O cardápio pode ser personalizado?','Sim. Ajustamos itens, quantidades e formato de serviço conforme o perfil dos convidados, o horário, o orçamento e eventuais restrições alimentares.'],
  ['Vocês fornecem montagem e equipe?','Sim. A proposta pode incluir transporte, montagem, utensílios, equipe de apoio, reposição e desmontagem.'],
  ['Atendem eventos de diferentes portes?','Sim. Dimensionamos cada operação conforme quantidade de participantes, duração, local e complexidade logística.'],
  ['Vocês atendem São Paulo e Rio de Janeiro?','Sim. Atuamos nas duas cidades e regiões próximas, mediante disponibilidade e avaliação logística.'],
  ['Como solicitar uma proposta?','Envie data, cidade, local, número estimado de convidados e formato desejado pelo formulário ou WhatsApp.'],
];

export function CorporateCateringPage() {
  useEffect(() => {
    document.title = "Catering Corporativo Premium | Doçura Vera's | São Paulo e Rio de Janeiro";
    const description = "Catering corporativo premium para reuniões, convenções, lançamentos, treinamentos e recepções executivas em São Paulo e Rio de Janeiro.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel','canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', `${SITE.url}/catering-corporativo`);
    window.scrollTo(0, 0);
  }, []);

  return <>
    <Navbar />
    <main>
      <section className="corp-hero">
        <img src="/images/service-eventos-empresariais.jpg" alt="Catering corporativo premium da Doçura Vera's" className="corp-hero-image" />
        <div className="corp-hero-overlay" />
        <div className="page-width corp-hero-content">
          <p className="eyebrow light">Catering Corporativo • São Paulo e Rio de Janeiro</p>
          <h1>Gastronomia, apresentação e organização a serviço da sua empresa.</h1>
          <p>Soluções personalizadas para reuniões, treinamentos, convenções, lançamentos e recepções executivas, com produção própria e operação planejada em cada detalhe.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#orcamento">Solicitar proposta personalizada <span>↗</span></a>
            <a className="text-link light-link" href={SITE.whatsappLink('Olá, gostaria de solicitar uma proposta de catering corporativo.')} target="_blank" rel="noreferrer">Falar no WhatsApp <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="corp-trust" aria-label="Diferenciais do catering corporativo"><div className="page-width corp-trust-grid">
        <Reveal><div><strong>25+</strong><span>anos de experiência</span></div></Reveal>
        <Reveal delay={80}><div><strong>Produção própria</strong><span>controle e qualidade</span></div></Reveal>
        <Reveal delay={160}><div><strong>Sob medida</strong><span>cardápio e operação</span></div></Reveal>
        <Reveal delay={240}><div><strong>SP + RJ</strong><span>atendimento regional</span></div></Reveal>
      </div></section>

      <Reveal><section className="section corp-intro"><div className="page-width corp-intro-grid">
        <p className="eyebrow">Uma entrega alinhada à sua marca</p>
        <div><h2>Mais do que servir: representar bem a empresa que nos contrata.</h2><p>Cada evento corporativo comunica valores. Por isso, combinamos gastronomia, estética e organização para criar uma experiência coerente com o nível de cuidado que sua empresa deseja transmitir aos convidados.</p></div>
      </div></section></Reveal>

      <Reveal><section className="section corp-occasions"><div className="page-width">
        <div className="section-heading"><div><p className="eyebrow">Onde atuamos</p><h2>Catering pensado para diferentes momentos corporativos.</h2></div><p>Adaptamos o serviço à agenda, ao público, ao espaço e ao objetivo de cada encontro.</p></div>
        <div className="corp-card-grid">{occasions.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section></Reveal>

      <Reveal><section className="section-dark corp-services"><div className="page-width">
        <div className="section-heading light-heading"><div><p className="eyebrow light">Formatos de serviço</p><h2>Uma solução gastronômica para cada ocasião.</h2></div><p>Os formatos podem ser combinados e personalizados conforme a dinâmica do evento.</p></div>
        <div className="corp-service-grid">{services.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section></Reveal>

      <Reveal><section className="corp-feature"><div className="corp-feature-image"><img src="/images/service-convencoes.jpg" alt="Montagem elegante para convenção corporativa" loading="lazy" /></div><div className="corp-feature-copy"><p className="eyebrow">Operação completa</p><h2>Da escolha do cardápio à desmontagem.</h2><p>Conforme o escopo contratado, cuidamos da produção, transporte, montagem, utensílios, bebidas, equipe, reposição e desmontagem. A empresa centraliza a operação em um único fornecedor e ganha tranquilidade para focar no evento.</p><ul><li>Planejamento conforme cronograma</li><li>Montagem e apresentação profissional</li><li>Equipe de apoio e reposição</li><li>Opções para restrições alimentares</li><li>Logística em São Paulo e Rio de Janeiro</li></ul></div></section></Reveal>

      <Reveal><section className="section corp-pillars"><div className="page-width">
        <div className="section-heading"><div><p className="eyebrow">Por que a Doçura Vera's</p><h2>Confiança construída em cada detalhe.</h2></div><p>Nossos diferenciais se transformam em segurança para quem organiza e em uma experiência melhor para quem participa.</p></div>
        <div className="corp-pillar-list">{pillars.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section></Reveal>

      <Reveal><section className="section corp-gallery"><div className="page-width"><div className="section-heading"><div><p className="eyebrow">Apresentação e experiência</p><h2>Uma estética profissional do início ao fim.</h2></div><p>Composições cuidadosas para ambientes corporativos, recepções e encontros estratégicos.</p></div><div className="corp-gallery-grid">{['service-eventos-empresariais.jpg','service-convencoes.jpg','service-coqueteis.jpg','gallery-3.jpg'].map((img,i)=><figure key={img}><img src={`/images/${img}`} alt={`Catering corporativo Doçura Vera's ${i+1}`} loading="lazy" /></figure>)}</div></div></section></Reveal>

      <Reveal><section className="section corp-faq"><div className="page-width corp-faq-grid"><div><p className="eyebrow">Perguntas frequentes</p><h2>Informações para planejar sua contratação.</h2></div><div>{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section></Reveal>

      <Reveal><div id="orcamento"><QuoteForm /></div></Reveal>
    </main>
    <Footer /><FloatingWhatsApp />
  </>;
}
