import { TESTIMONIALS } from '@/lib/data'

export default function Testimonials() {
  return (
    <section className="px-6 md:px-16 py-28 bg-[#0d0d0d]">
      <div className="text-center mb-16 reveal">
        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-4">Client Reviews</p>
        <h2 className="font-playfair font-bold leading-tight" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>
          What Our<br />Clients Say
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-0.5">
        {TESTIMONIALS.map(t => (
          <div key={t.name} className="reveal bg-[#2a2a2a] p-10">
            <span className="font-playfair text-7xl font-black text-[#c9a84c] leading-[0.5] mb-6 block">&ldquo;</span>
            <p className="text-white/70 text-sm leading-7 mb-8">{t.quote}</p>
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full flex items-center justify-center font-playfair font-bold text-black text-sm"
                style={{ background: 'linear-gradient(135deg, #c9a84c, #ff4d2e)' }}>
                {t.initials}
              </div>
              <div>
                <div className="text-white text-sm font-medium">{t.name}</div>
                <div className="text-[#c9a84c] text-xs tracking-widest">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
