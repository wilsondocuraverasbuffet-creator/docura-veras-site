import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { QuoteForm } from '../components/QuoteForm';
import { Reveal } from '../components/Reveal';
import { SITE } from '../config/site';

const formats = [
  ['Convenções e encontros anuais','Planejamento gastronômico para agendas extensas, diferentes momentos de serviço e grande circulação de convidados.'],
  ['Treinamentos e integrações','Coffee breaks, brunches e refeições que acompanham o ritmo do encontro sem comprometer o cronograma.'],
  ['Lançamentos e ativações de marca','Apresentação alinhada à identidade da empresa, com experiência gastronômica pensada para valorizar o momento.'],
  ['Premiações e celebrações internas','Coquetéis, recepções e serviços personalizados para reconhecer equipes, resultados e conquistas.'],
  ['Congressos e workshops','Estrutura organizada para pausas, networking, alimentação de participantes e apoio às equipes de produção.'],
  ['Reuniões executivas e recepção de clientes','Serviços refinados, discretos e pontuais para encontros estratégicos e convidados especiais.'],
];

const process = [
  ['Briefing','Entendemos objetivo, público, local, agenda, número de convidados e nível de formalidade.'],
  ['Proposta sob medida','Definimos cardápio, formato de serviço, estrutura, equipe e logística conforme a necessidade real.'],
  ['Planejamento operacional','Organizamos produção, transporte, montagem e cronograma para reduzir imprevistos no dia.'],
  ['Execução e acompanhamento','Nossa equipe conduz o serviço, reposição e desmontagem com atenção constante aos detalhes.'],
];

const strengths = [
  ['Visão completa do evento','Não pensamos apenas no cardápio. Consideramos fluxo, tempo, espaço, público e experiência da marca.'],
  ['Produção própria','Mais controle sobre qualidade, frescor, padronização e ajustes de última hora.'],
  ['Apresentação profissional','Mesas, utensílios e alimentos organizados para comunicar cuidado e reforçar a imagem da empresa.'],
  ['Flexibilidade','Adaptamos operação, quantidades e serviço às mudanças comuns da rotina corporativa.'],
  ['Experiência comprovada','Mais de 25 anos atuando em eventos e atendendo empresas em São Paulo e Rio de Janeiro.'],
];

const faqs = [
  ['Vocês cuidam de toda a operação gastronômica?','Sim. Conforme a proposta, podemos incluir produção, transporte, montagem, utensílios, bebidas, equipe, reposição e desmontagem.'],
  ['É possível combinar diferentes serviços no mesmo evento?','Sim. Podemos estruturar café de recepção, coffee break, almoço, coquetel e outros momentos em uma única operação.'],
  ['Atendem eventos de grande porte?','Sim. O dimensionamento considera número de participantes, duração, local, acessos, cronograma e estrutura disponível.'],
  ['Existem opções para restrições alimentares?','Sim. Podemos incluir alternativas vegetarianas, sem lactose, sem glúten e outras necessidades informadas previamente.'],
  ['Vocês atendem São Paulo e Rio de Janeiro?','Sim. Atuamos nas duas cidades e regiões próximas, conforme disponibilidade e análise logística.'],
  ['O orçamento pode ser personalizado?','Sim. Cada proposta é desenvolvida de acordo com objetivo, formato, público, horário, orçamento e nível de serviço desejado.'],
];

export function CorporateEventsPage() {
  useEffect(() => {
    document.title = "Buffet para Eventos Corporativos | Doçura Vera's | São Paulo e Rio de Janeiro";
    const description = "Buffet e gastronomia para eventos corporativos, convenções, treinamentos, lançamentos e celebrações empresariais em São Paulo e Rio de Janeiro.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel','canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', `${SITE.url}/eventos-corporativos`);
    window.scrollTo(0, 0);
  }, []);

  return <>
    <Navbar />
    <main>
      <section className="business-hero">
        <img src="/images/service-eventos-empresariais.jpg" alt="Evento corporativo com buffet da Doçura Vera's" className="business-hero-image" />
        <div className="business-hero-overlay" />
        <div className="page-width business-hero-content">
          <p className="eyebrow light">Eventos Corporativos • São Paulo e Rio de Janeiro</p>
          <h1>Eventos que representam sua empresa com excelência.</h1>
          <p>Gastronomia, apresentação e operação planejadas para convenções, treinamentos, lançamentos, premiações e encontros empresariais.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#orcamento">Solicitar proposta personalizada <span>↗</span></a>
            <a className="text-link light-link" href={SITE.whatsappLink('Olá, gostaria de solicitar uma proposta para um evento corporativo.')} target="_blank" rel="noreferrer">Falar no WhatsApp <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="business-trust" aria-label="Diferenciais para eventos corporativos"><div className="page-width business-trust-grid">
        <Reveal><div><strong>25+</strong><span>anos de experiência</span></div></Reveal>
        <Reveal delay={80}><div><strong>Sob medida</strong><span>para cada empresa</span></div></Reveal>
        <Reveal delay={160}><div><strong>Operação completa</strong><span>do planejamento à desmontagem</span></div></Reveal>
        <Reveal delay={240}><div><strong>SP + RJ</strong><span>atendimento regional</span></div></Reveal>
      </div></section>

      <Reveal><section className="section business-intro"><div className="page-width business-intro-grid">
        <p className="eyebrow">Uma entrega à altura da ocasião</p>
        <div><h2>Cada evento é uma extensão da imagem da sua empresa.</h2><p>Por isso, combinamos produção própria, apresentação cuidadosa e organização operacional para que cada convidado perceba profissionalismo desde a chegada até o encerramento.</p></div>
      </div></section></Reveal>

      <Reveal><section className="section business-formats"><div className="page-width">
        <div className="section-heading"><div><p className="eyebrow">Tipos de evento</p><h2>Soluções para diferentes agendas corporativas.</h2></div><p>O serviço é estruturado conforme o objetivo, o público, o horário e a dinâmica do encontro.</p></div>
        <div className="business-format-grid">{formats.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section></Reveal>

      <Reveal><section className="business-feature"><div className="business-feature-copy"><p className="eyebrow">Experiência completa</p><h2>Uma operação que acompanha o ritmo do evento.</h2><p>Organizamos cada momento gastronômico em sintonia com a programação. Do café de recepção ao coquetel de encerramento, tudo é dimensionado para manter qualidade, fluidez e apresentação.</p><ul><li>Café de recepção e credenciamento</li><li>Coffee breaks e brunches</li><li>Almoços, refeições e apoio de produção</li><li>Coquetéis e confraternizações</li><li>Equipe, utensílios e reposição</li></ul></div><div className="business-feature-image"><img src="/images/service-convencoes.jpg" alt="Montagem para convenção e evento corporativo" loading="lazy" /></div></section></Reveal>

      <Reveal><section className="section-dark business-process"><div className="page-width">
        <div className="section-heading light-heading"><div><p className="eyebrow light">Nosso processo</p><h2>Organização antes, durante e depois.</h2></div><p>Um método claro para transformar necessidades corporativas em uma operação segura e bem executada.</p></div>
        <div className="business-process-grid">{process.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section></Reveal>

      <Reveal><section className="section business-strengths"><div className="page-width">
        <div className="section-heading"><div><p className="eyebrow">Por que escolher a Doçura Vera's</p><h2>Segurança para quem organiza. Experiência para quem participa.</h2></div><p>Nossos diferenciais reduzem preocupações operacionais e ajudam a empresa a receber melhor.</p></div>
        <div className="business-strength-list">{strengths.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section></Reveal>

      <Reveal><section className="section business-gallery"><div className="page-width"><div className="section-heading"><div><p className="eyebrow">Cuidado visível</p><h2>Apresentação que faz parte da experiência.</h2></div><p>Montagens reais da Doçura Vera's, com atenção à estética, à funcionalidade e à identidade de cada evento.</p></div><div className="business-gallery-grid"><figure><img src="/images/gallery-1.jpg" alt="Mesa de buffet para evento corporativo" loading="lazy" /></figure><figure><img src="/images/gallery-4.jpg" alt="Apresentação de alimentos em evento empresarial" loading="lazy" /></figure><figure><img src="/images/gallery-5.jpg" alt="Detalhes de montagem da Doçura Vera's" loading="lazy" /></figure><figure><img src="/images/gallery-3.jpg" alt="Serviço gastronômico corporativo" loading="lazy" /></figure></div></div></section></Reveal>

      <Reveal><section className="section business-faq"><div className="page-width business-faq-grid"><div><p className="eyebrow">Perguntas frequentes</p><h2>Informações para planejar seu evento.</h2></div><div>{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section></Reveal>

      <div id="orcamento"><QuoteForm /></div>
    </main>
    <Footer />
    <FloatingWhatsApp />
  </>;
}
