import { useInView } from "../hooks/useInView";

const VALUES = [
  { number: "25", label: "anos de experiência", text: "Uma trajetória construída com trabalho, adaptação e cuidado em cada entrega." },
  { number: "02", label: "grandes capitais", text: "Atendimento de eventos em São Paulo e no Rio de Janeiro com um único padrão de qualidade." },
  { number: "01", label: "projeto por vez", text: "Cada evento recebe planejamento próprio, respeitando público, local, horário e objetivo." },
];

export default function Testimonials() {
  const { ref, isInView } = useInView();
  return (
    <section id="experiencia" ref={ref} className={`fade-section bg-white ${isInView ? "visible" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="mb-16 text-center"><span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">Nossa experiência</span><h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-snug text-charcoal lg:text-4xl"><em>Confiança construída evento após evento.</em></h2></div>
        <div className="grid gap-10 border-y border-warm-gray-light/30 py-12 lg:grid-cols-3">
          {VALUES.map((item) => <div key={item.label} className="stagger-child text-center lg:border-r lg:border-warm-gray-light/30 lg:last:border-0"><p className="font-serif text-5xl text-gold">{item.number}</p><p className="mt-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal">{item.label}</p><p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-warm-gray">{item.text}</p></div>)}
        </div>
      </div>
    </section>
  );
}
