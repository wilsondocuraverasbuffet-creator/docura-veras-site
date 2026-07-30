import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { QuoteForm } from '../components/QuoteForm';
import { Reveal } from '../components/Reveal';
import { SITE } from '../config/site';

const formats = [
  ['Corridas de rua','Estrutura de alimentação para atletas, equipes, convidados e organização antes, durante ou após a prova.'],
  ['Eventos de marcas','Ativações com apresentação alinhada à identidade do patrocinador e à dinâmica do evento.'],
  ['Circuitos esportivos','Padronização e flexibilidade para operações realizadas em diferentes datas, locais e etapas.'],
  ['Eventos corporativos esportivos','Soluções para ações internas, experiências de bem-estar e encontros esportivos de empresas.'],
];

const operation = [
  ['Planejamento logístico','Analisamos local, horário, fluxo de público, acesso e tempo disponível para montagem.'],
  ['Cardápio adequado','Selecionamos alimentos e bebidas compatíveis com o perfil dos participantes e o momento do evento.'],
  ['Montagem organizada','Criamos uma estrutura funcional, visualmente cuidadosa e preparada para atendimento de alta demanda.'],
  ['Reposição e suporte','A equipe acompanha a operação para manter apresentação, abastecimento e agilidade durante o serviço.'],
];

const solutions = [
  ['Hidratação','Água mineral, água de coco, sucos naturais, água saborizada e outras opções conforme a proposta.'],
  ['Alimentação leve','Frutas, sanduíches, pães de queijo, bolos, wraps, iogurtes, granola e composições personalizadas.'],
  ['Pós-prova','Mesas completas para acolher participantes após a atividade, com reposição e fluxo de atendimento planejados.'],
  ['Área VIP e convidados','Apresentação diferenciada para patrocinadores, imprensa, convidados e equipes organizadoras.'],
];

const faqs = [
  ['Vocês atendem corridas com grande número de participantes?','Sim. A proposta é dimensionada de acordo com o número de pessoas, o tempo de atendimento, a estrutura do local e a logística necessária.'],
  ['É possível personalizar o cardápio para atletas?','Sim. A composição pode priorizar opções leves, práticas, naturais e adequadas ao horário e ao perfil do evento.'],
  ['Vocês levam toda a estrutura?','Podemos incluir alimentos, bebidas, utensílios, montagem, equipe, reposição e desmontagem, conforme o escopo contratado.'],
  ['Atendem eventos em São Paulo e Rio de Janeiro?','Sim. Atendemos as duas cidades e regiões próximas, mediante disponibilidade e avaliação logística.'],
  ['Como receber uma proposta?','Envie data, cidade, local, estimativa de participantes e formato do atendimento pelo formulário ou WhatsApp.'],
];

export function SportsEventsPage() {
  useEffect(() => {
    document.title = "Buffet para Corridas e Eventos Esportivos | Doçura Vera's | SP e RJ";
    const description = "Catering e buffet para corridas de rua e eventos esportivos em São Paulo e Rio de Janeiro. Alimentação, hidratação, montagem, equipe e operação personalizada.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel','canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', `${SITE.url}/eventos-esportivos`);
    window.scrollTo(0, 0);
  }, []);

  return <>
    <Navbar />
    <main>
      <section className="sports-hero">
        <img src="/images/service-eventos-esportivos.jpg" alt="Estrutura de alimentação da Doçura Vera's para evento esportivo" className="sports-hero-image" />
        <div className="sports-hero-overlay" />
        <div className="page-width sports-hero-content">
          <p className="eyebrow light">Eventos Esportivos • Corridas • São Paulo e Rio de Janeiro</p>
          <h1>Alimentação e estrutura para eventos esportivos de alta demanda.</h1>
          <p>Planejamento, produção própria e operação organizada para corridas, circuitos, ativações de marcas e experiências esportivas corporativas.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#orcamento">Solicitar proposta personalizada <span>↗</span></a>
            <a className="text-link light-link" href={SITE.whatsappLink('Olá, gostaria de solicitar uma proposta para um evento esportivo.')} target="_blank" rel="noreferrer">Falar no WhatsApp <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="sports-trust" aria-label="Diferenciais para eventos esportivos"><div className="page-width sports-trust-grid">
        <Reveal><div><strong>25+</strong><span>anos de experiência</span></div></Reveal>
        <Reveal delay={80}><div><strong>Alta demanda</strong><span>operação planejada</span></div></Reveal>
        <Reveal delay={160}><div><strong>Produção própria</strong><span>qualidade e padronização</span></div></Reveal>
        <Reveal delay={240}><div><strong>SP + RJ</strong><span>atendimento regional</span></div></Reveal>
      </div></section>

      <Reveal><section className="section sports-intro"><div className="page-width sports-intro-grid">
        <p className="eyebrow">Experiência que acompanha o ritmo do evento</p>
        <div><h2>Uma operação eficiente começa muito antes da largada.</h2><p>Em eventos esportivos, pontualidade, fluxo e reposição são tão importantes quanto o cardápio. Planejamos cada etapa para atender participantes, convidados, patrocinadores e organização com segurança, agilidade e apresentação profissional.</p></div>
      </div></section></Reveal>

      <Reveal><section className="section sports-formats"><div className="page-width">
        <div className="section-heading"><div><p className="eyebrow">Formatos atendidos</p><h2>Soluções para diferentes experiências esportivas.</h2></div><p>Cada projeto é dimensionado conforme público, duração, local, horários e objetivos da organização.</p></div>
        <div className="sports-format-grid">{formats.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section></Reveal>

      <Reveal><section className="section-dark sports-operation"><div className="page-width">
        <div className="section-heading light-heading"><div><p className="eyebrow light">Operação completa</p><h2>Organização para servir bem, mesmo nos momentos de maior movimento.</h2></div><p>Integramos gastronomia, logística e atendimento para que a experiência aconteça com fluidez.</p></div>
        <div className="sports-operation-list">{operation.map(([title,text],i)=><article key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </div></section></Reveal>

      <Reveal><section className="sports-solutions"><div className="sports-solutions-image"><img src="/images/gallery-4.jpg" alt="Mesa com alimentos e bebidas para evento esportivo" loading="lazy" /></div><div className="sports-solutions-copy"><p className="eyebrow">Cardápio e estrutura sob medida</p><h2>Do ponto de hidratação à recepção pós-prova.</h2><p>A proposta pode combinar diferentes frentes de atendimento, mantendo unidade visual e eficiência operacional.</p><div className="sports-solutions-list">{solutions.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section></Reveal>

      <Reveal><section className="section sports-difference"><div className="page-width sports-difference-grid"><div><p className="eyebrow">Por que a Doçura Vera's</p><h2>Flexibilidade para adaptar. Experiência para executar.</h2></div><div><p>Trabalhamos com produção própria, montagem cuidadosa e atendimento personalizado. Isso nos permite ajustar quantidades, composição, apresentação e operação às necessidades reais de cada evento.</p><ul><li>Planejamento conforme fluxo e cronograma</li><li>Cardápios personalizados</li><li>Apresentação alinhada à marca do evento</li><li>Equipe e reposição conforme o escopo</li><li>Experiência com grandes empresas</li></ul></div></div></section></Reveal>

      <Reveal><section className="section sports-gallery"><div className="page-width"><div className="section-heading"><div><p className="eyebrow">Estrutura e apresentação</p><h2>Uma entrega à altura da experiência do evento.</h2></div><p>Organização, cuidado visual e praticidade para receber bem em ambientes de grande circulação.</p></div><div className="sports-gallery-grid">{['service-eventos-esportivos.jpg','gallery-1.jpg','gallery-4.jpg','gallery-6.jpg'].map((img,i)=><figure key={img}><img src={`/images/${img}`} alt={`Catering para evento esportivo Doçura Vera's ${i+1}`} loading="lazy" /></figure>)}</div></div></section></Reveal>

      <Reveal><section className="section sports-faq"><div className="page-width sports-faq-grid"><div><p className="eyebrow">Perguntas frequentes</p><h2>Informações para organizar seu evento.</h2></div><div>{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section></Reveal>

      <Reveal><div id="orcamento"><QuoteForm /></div></Reveal>
    </main>
    <Footer /><FloatingWhatsApp />
  </>;
}
