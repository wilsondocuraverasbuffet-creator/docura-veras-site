import { FormEvent, useState } from "react";
import { SITE } from "../config/site";
import { useInView } from "../hooks/useInView";

export default function QuoteForm() {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState({ name: "", date: "", city: "", type: "", guests: "" });

  function submit(event: FormEvent) {
    event.preventDefault();
    const message = [
      "Olá, gostaria de solicitar um orçamento para um evento.",
      `Nome: ${form.name}`,
      `Data: ${form.date || "A definir"}`,
      `Cidade: ${form.city}`,
      `Tipo de evento: ${form.type}`,
      `Quantidade de convidados: ${form.guests || "A definir"}`,
    ].join("\n");
    window.open(SITE.whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  const inputClass = "w-full border-b border-warm-gray-light/60 bg-transparent px-0 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-warm-gray-light focus:border-gold";

  return (
    <section id="orcamento" ref={ref} className={`fade-section bg-charcoal ${isInView ? "visible" : ""}`}>
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-12 lg:py-32">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">Seu evento começa aqui</span>
          <h2 className="mt-4 font-serif text-3xl leading-snug text-white lg:text-4xl"><em>Conte-nos o que você está planejando.</em></h2>
          <p className="mt-6 max-w-md leading-relaxed text-white/65">Preencha as informações principais. Ao enviar, o WhatsApp será aberto com a mensagem pronta para nossa equipe.</p>
          <p className="mt-8 text-sm text-white/80">Atendimento em São Paulo e Rio de Janeiro<br />WhatsApp: {SITE.contact.whatsappDisplay}</p>
        </div>

        <form onSubmit={submit} className="grid gap-x-8 gap-y-5 bg-beige p-7 sm:grid-cols-2 lg:p-10">
          <label className="text-[10px] font-semibold tracking-[0.18em] uppercase text-warm-gray">Nome<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Como podemos chamar você?" /></label>
          <label className="text-[10px] font-semibold tracking-[0.18em] uppercase text-warm-gray">Data<input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClass} /></label>
          <label className="text-[10px] font-semibold tracking-[0.18em] uppercase text-warm-gray">Cidade<select required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputClass}><option value="">Selecione</option><option>São Paulo</option><option>Rio de Janeiro</option><option>Outra cidade</option></select></label>
          <label className="text-[10px] font-semibold tracking-[0.18em] uppercase text-warm-gray">Tipo de evento<select required value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className={inputClass}><option value="">Selecione</option><option>Coffee break corporativo</option><option>Evento empresarial</option><option>Evento esportivo</option><option>Evento social</option><option>Coquetel</option><option>Outro</option></select></label>
          <label className="text-[10px] font-semibold tracking-[0.18em] uppercase text-warm-gray sm:col-span-2">Número de convidados<input type="number" min="1" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className={inputClass} placeholder="Quantidade aproximada" /></label>
          <button type="submit" className="mt-4 bg-gold px-8 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase text-white transition-colors hover:bg-gold-dark sm:col-span-2">Enviar pelo WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
