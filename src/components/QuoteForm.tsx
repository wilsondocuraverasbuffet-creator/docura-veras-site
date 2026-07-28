import { FormEvent, useState } from 'react';
import { SITE } from '../config/site';

const initial = { name: '', company: '', city: '', date: '', time: '', guests: '', type: '', notes: '' };

export default function QuoteForm() {
  const [form, setForm] = useState(initial);
  const set = (field: keyof typeof form, value: string) => setForm({ ...form, [field]: value });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Olá, Doçura Vera's! Gostaria de solicitar um orçamento.\n\nNome: ${form.name}\nEmpresa: ${form.company || 'Não informado'}\nCidade: ${form.city}\nData: ${form.date || 'A definir'}\nHorário: ${form.time || 'A definir'}\nConvidados: ${form.guests || 'A definir'}\nTipo de evento: ${form.type}\nObservações: ${form.notes || 'Sem observações'}`;
    window.open(SITE.whatsappLink(message), '_blank', 'noopener,noreferrer');
  };
  const input = 'mt-2 w-full border-b border-line bg-transparent py-3 text-sm text-ink outline-none transition placeholder:text-taupe/60 focus:border-gold';

  return (
    <section id="orcamento" className="bg-white">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[.8fr_1.2fr]">
        <div className="bg-gold p-10 text-white lg:p-20">
          <p className="text-[10px] font-semibold uppercase tracking-[.3em] text-white/70">Seu evento começa aqui</p>
          <h2 className="mt-7 font-display text-5xl leading-[1.05] lg:text-6xl">Conte-nos como deseja receber.</h2>
          <p className="mt-8 max-w-md text-sm leading-7 text-white/80">Partilhe as principais informações. Ao enviar, o WhatsApp abrirá com a mensagem organizada e pronta para a nossa equipa.</p>
          <div className="mt-16 border-t border-white/25 pt-8 text-sm leading-7"><p>{SITE.contact.areas}</p><p>{SITE.contact.whatsappDisplay}</p><p>{SITE.contact.email}</p></div>
        </div>
        <form onSubmit={submit} className="grid gap-x-8 gap-y-6 p-8 sm:grid-cols-2 lg:p-16">
          <label className="field-label">Nome*<input required className={input} value={form.name} onChange={e => set('name', e.target.value)} placeholder="Como podemos chamar você?" /></label>
          <label className="field-label">Empresa<input className={input} value={form.company} onChange={e => set('company', e.target.value)} placeholder="Nome da empresa" /></label>
          <label className="field-label">Cidade*<select required className={input} value={form.city} onChange={e => set('city', e.target.value)}><option value="">Selecione</option><option>São Paulo</option><option>Rio de Janeiro</option><option>Outra cidade</option></select></label>
          <label className="field-label">Tipo de evento*<select required className={input} value={form.type} onChange={e => set('type', e.target.value)}><option value="">Selecione</option><option>Coffee break corporativo</option><option>Evento empresarial</option><option>Evento esportivo</option><option>Evento social</option><option>Coquetel</option><option>Outro</option></select></label>
          <label className="field-label">Data<input type="date" className={input} value={form.date} onChange={e => set('date', e.target.value)} /></label>
          <label className="field-label">Horário<input type="time" className={input} value={form.time} onChange={e => set('time', e.target.value)} /></label>
          <label className="field-label sm:col-span-2">Número de convidados<input type="number" min="1" className={input} value={form.guests} onChange={e => set('guests', e.target.value)} placeholder="Quantidade aproximada" /></label>
          <label className="field-label sm:col-span-2">Observações<textarea rows={3} className={input} value={form.notes} onChange={e => set('notes', e.target.value)} placeholder="Conte-nos mais sobre o evento" /></label>
          <button className="btn-dark mt-4 sm:col-span-2" type="submit">Enviar pelo WhatsApp</button>
        </form>
      </div>
      <a href={SITE.whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Falar pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#1f8f55] text-lg font-bold text-white shadow-lg transition hover:scale-105">W</a>
    </section>
  );
}
