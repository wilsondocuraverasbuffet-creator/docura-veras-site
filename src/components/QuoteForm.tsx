import { FormEvent, useState } from 'react';
import { SITE } from '../config/site';

const initial = { name: '', company: '', city: '', date: '', time: '', guests: '', type: '', notes: '' };
export function QuoteForm() {
  const [form, setForm] = useState(initial);
  const update = (field: keyof typeof initial, value: string) => setForm(current => ({ ...current, [field]: value }));
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const message = `Olá! Gostaria de solicitar um orçamento.\n\nNome: ${form.name}\nEmpresa: ${form.company || 'Não informado'}\nCidade: ${form.city}\nData: ${form.date}\nHorário: ${form.time || 'A definir'}\nConvidados: ${form.guests}\nTipo de evento: ${form.type}\nObservações: ${form.notes || 'Sem observações'}`;
    window.open(SITE.whatsappLink(message), '_blank', 'noopener,noreferrer');
  };
  return (
    <section id="contato" className="quote-section">
      <div className="quote-intro">
        <p className="eyebrow light">Vamos conversar</p>
        <h2>Conte-nos sobre o seu próximo evento.</h2>
        <p>Compartilhe as informações principais e abriremos uma conversa no WhatsApp com a mensagem organizada.</p>
        <div className="contact-lines"><a href={`tel:+${SITE.contact.whatsapp}`}>{SITE.contact.whatsappDisplay}</a><a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a><span>{SITE.contact.areas}</span></div>
      </div>
      <form className="quote-form" onSubmit={submit}>
        <label>Nome<input required value={form.name} onChange={e => update('name', e.target.value)} placeholder="Seu nome" /></label>
        <label>Empresa<input value={form.company} onChange={e => update('company', e.target.value)} placeholder="Nome da empresa" /></label>
        <label>Cidade<input required value={form.city} onChange={e => update('city', e.target.value)} placeholder="São Paulo, Rio de Janeiro..." /></label>
        <label>Data<input required type="date" value={form.date} onChange={e => update('date', e.target.value)} /></label>
        <label>Horário<input type="time" value={form.time} onChange={e => update('time', e.target.value)} /></label>
        <label>Número de convidados<input required type="number" min="1" value={form.guests} onChange={e => update('guests', e.target.value)} placeholder="Ex.: 100" /></label>
        <label className="wide">Tipo de evento<select required value={form.type} onChange={e => update('type', e.target.value)}><option value="">Selecione</option><option>Coffee Break Corporativo</option><option>Evento Corporativo</option><option>Evento Esportivo</option><option>Evento Social</option><option>Cocktail</option><option>Outro</option></select></label>
        <label className="wide">Observações<textarea value={form.notes} onChange={e => update('notes', e.target.value)} placeholder="Conte-nos mais sobre o evento" rows={4} /></label>
        <button className="button button-gold wide" type="submit">Enviar pelo WhatsApp <span>↗</span></button>
      </form>
    </section>
  );
}
