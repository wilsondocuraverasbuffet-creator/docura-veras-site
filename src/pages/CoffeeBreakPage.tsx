import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { QuoteForm } from '../components/QuoteForm';
import { SITE } from '../config/site';

const occasions = ['Reuniões corporativas','Treinamentos','Workshops','Convenções','Palestras','Lançamentos','Integrações de equipes','Processos seletivos'];
const menus = [
  ['Tradicional','Clássicos bem selecionados para reuniões, treinamentos e encontros de curta duração.'],
  ['Premium','Seleção gastronômica diferenciada, montagem elegante e apresentação sofisticada.'],
  ['Fit','Opções leves, naturais e equilibradas para públicos que valorizam bem-estar.'],
  ['Executivo','Composição refinada para diretorias, clientes estratégicos e encontros de alto nível.'],
];
const benefits = [
  ['Produção própria','Controle de qualidade, frescor, sabor e padronização em todas as etapas.'],
  ['Apresentação impecável','Mesas cuidadosamente montadas para valorizar a imagem da sua empresa.'],
  ['Personalização','Cardápio adaptado ao público, horário, orçamento e objetivo do evento.'],
  ['Experiência com grandes empresas','Mais de 25 anos atuando em operações corporativas de diferentes portes.'],
  ['Flexibilidade','Agilidade para atender necessidades específicas e ajustes de última hora.'],
];
const included = ['Produção dos alimentos','Transporte e logística','Montagem da mesa','Bebidas e utensílios','Reposição durante o evento','Equipe de apoio','Desmontagem ao final','Opções para restrições alimentares'];
const faqs = [
  ['Existe quantidade mínima de participantes?','As propostas são elaboradas conforme o porte, a cidade e o formato do evento. Nossa equipe informa a condição adequada após receber os detalhes.'],
  ['Os cardápios podem ser personalizados?','Sim. Adaptamos itens, apresentação e composição conforme o perfil dos convidados, necessidades alimentares e orçamento.'],
  ['Vocês atendem São Paulo e Rio de Janeiro?','Sim. Atendemos as duas cidades e regiões próximas, mediante consulta de data e logística.'],
  ['Vocês fornecem toda a estrutura?','Dependendo do pacote, fornecemos alimentos, bebidas, utensílios, montagem, equipe, reposição e desmontagem.'],
  ['Como solicitar um orçamento?','Preencha o formulário ou fale conosco pelo WhatsApp informando data, cidade, horário e número de convidados.'],
];

export function CoffeeBreakPage() {
  useEffect(() => {
    document.title = "Coffee Break Corporativo Premium | Doçura Vera's | SP e RJ";
    const description = "Coffee break corporativo premium em São Paulo e Rio de Janeiro. Cardápios personalizados, produção própria, apresentação impecável e mais de 25 anos de experiência.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel','canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', `${SITE.url}/coffee-break`);
    window.scrollTo(0, 0);
  }, []);

  return <>
    <Navbar />
    <main>
      <section className="cb-hero">
        <img src="/images/service-coffee-break.jpg" alt="Mesa de coffee break corporativo da Doçura Vera's" className="cb-hero-image" />
        <div className="cb-hero-overlay" />
        <div className="page-width cb-hero-content">
          <p className="eyebrow light">Coffee Break Corporativo • São Paulo e Rio de Janeiro</p>
          <h1>Uma experiência que valoriza a imagem da sua empresa.</h1>
          <p>Produção própria, apresentação impecável e cardápios personalizados para reuniões, treinamentos, convenções e eventos corporativos.</p>
          <div className="hero-actions"><a className="button button-gold" href="#orcamento">Solicitar orçamento <span>↗</span></a><a className="text-link light-link" href={SITE.whatsappLink('Olá, gostaria de solicitar um orçamento para coffee break corporativo.')} target="_blank" rel="noreferrer">Falar no WhatsApp <span>↗</span></a></div>
        </div>
      </section>

      <section className="section cb-intro"><div className="page-width cb-intro-grid"><p className="eyebrow">Mais de 25 anos de experiência</p><div><h2>Mais do que servir alimentos, entregamos tranquilidade.</h2><p>Cada detalhe é planejado para que sua equipe possa se concentrar no evento. Da escolha do cardápio à montagem, da apresentação à reposição, assumimos a operação com organização, cuidado e flexibilidade.</p></div></div></section>

      <section className="section cb-occasions"><div className="page-width"><div className="section-heading"><div><p className="eyebrow">Para cada ocasião</p><h2>O coffee break certo para o seu encontro.</h2></div><p>Desenvolvemos soluções sob medida considerando número de convidados, duração, horário, perfil do público e objetivos da empresa.</p></div><div className="cb-chip-grid">{occasions.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,'0')}</span>{item}</div>)}</div></div></section>

      <section className="section-dark"><div className="page-width"><div className="section-heading light-heading"><div><p className="eyebrow light">Cardápios personalizados</p><h2>Quatro formatos. Inúmeras possibilidades.</h2></div><p>As categorias orientam a escolha inicial. A composição final é personalizada para cada evento.</p></div><div className="cb-menu-grid">{menus.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>Coffee Break {title}</h3><p>{text}</p><a href="#orcamento" className="text-link light-link">Solicitar proposta <span>↘</span></a></article>)}</div></div></section>

      <section className="section"><div className="page-width"><div className="section-heading"><div><p className="eyebrow">Por que escolher a Doçura Vera's</p><h2>Diferenciais que aparecem em cada detalhe.</h2></div><p>Não trabalhamos com soluções genéricas. Cada entrega é construída para representar bem a empresa contratante.</p></div><div className="cb-benefits">{benefits.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

      <section className="cb-included"><div className="cb-included-image"><img src="/images/gallery-2.jpg" alt="Apresentação de alimentos em coffee break corporativo" loading="lazy" /></div><div className="cb-included-copy"><p className="eyebrow">Estrutura completa</p><h2>O que pode estar incluso.</h2><p>Montamos a proposta conforme as necessidades do evento, oferecendo uma operação completa do início ao fim.</p><ul>{included.map(item=><li key={item}><span>✓</span>{item}</li>)}</ul></div></section>

      <section className="section cb-gallery"><div className="page-width"><div className="section-heading"><div><p className="eyebrow">Portfólio real</p><h2>Apresentação pensada para impressionar.</h2></div><p>Imagens reais de serviços da Doçura Vera's, com atenção à composição, organização e experiência dos convidados.</p></div><div className="cb-gallery-grid">{['gallery-1.jpg','gallery-3.jpg','gallery-5.jpg','gallery-6.jpg'].map((img,i)=><figure key={img} className={`cb-gallery-${i+1}`}><img src={`/images/${img}`} alt={`Coffee break corporativo Doçura Vera's ${i+1}`} loading="lazy" /></figure>)}</div></div></section>

      <section className="section cb-faq"><div className="page-width cb-faq-grid"><div><p className="eyebrow">Perguntas frequentes</p><h2>Informações para planejar com segurança.</h2></div><div>{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <div id="orcamento"><QuoteForm /></div>
    </main>
    <Footer /><FloatingWhatsApp />
  </>;
}
