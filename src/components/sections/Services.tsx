import { SERVICES } from '@/lib/data'

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-16 py-28 bg-[#0a0a0a]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20 reveal">
        <div>
          <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-4">What We Do</p>
          <h2 className="font-playfair font-bold leading-tight" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>
            Our<br />Services
          </h2>
        </div>
        <p className="max-w-xs text-white/50 text-sm leading-7">
          Custom solutions for every client — we understand your business goals and build websites that actually deliver results.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-0.5">
        {SERVICES.map((s) => (
          <div key={s.num} className="reveal group bg-[#2a2a2a] hover:bg-[#1e1e1e] p-12 relative overflow-hidden transition-colors">
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <div className="font-playfair font-black text-5xl mb-6" style={{ color: 'rgba(201,168,76,0.15)' }}>{s.num}</div>
            <h3 className="font-playfair text-xl font-bold mb-4">{s.title}</h3>
            <p className="text-white/50 text-sm leading-7 mb-7">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map(t => (
                <span key={t} className="text-[0.65rem] tracking-widest uppercase border border-[#c9a84c]/30 text-[#c9a84c] px-2.5 py-1">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
