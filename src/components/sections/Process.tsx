import { PROCESS_STEPS } from '@/lib/data'

export default function Process() {
  return (
    <section id="process" className="px-6 md:px-16 py-28 bg-[#0a0a0a]">
      <div className="text-center mb-20 reveal">
        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-4">How It Works</p>
        <h2 className="font-playfair font-bold leading-tight" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>
          How We<br />Work
        </h2>
      </div>
      <div className="grid md:grid-cols-4 gap-0 relative">
        <div className="hidden md:block absolute top-7 left-[10%] w-[80%] h-px"
          style={{ background: 'linear-gradient(to right, transparent, #c9a84c, transparent)' }} />
        {PROCESS_STEPS.map(s => (
          <div key={s.num} className="reveal px-8 text-center">
            <div className="w-14 h-14 border border-[#c9a84c] rounded-full flex items-center justify-center font-playfair text-xl font-bold text-[#c9a84c] mx-auto mb-7 bg-[#0a0a0a] relative z-10">
              {s.num}
            </div>
            <h3 className="font-playfair text-lg font-bold mb-3">{s.title}</h3>
            <p className="text-white/50 text-sm leading-7">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
