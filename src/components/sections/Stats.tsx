import { STATS } from '@/lib/data'

export default function Stats() {
  return (
    <div className="bg-[#c9a84c] py-16 px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
      {STATS.map(s => (
        <div key={s.label}>
          <div className="font-playfair font-black text-black leading-none mb-2" style={{ fontSize: 'clamp(48px,6vw,72px)' }}>
            {s.num}
          </div>
          <div className="text-[0.75rem] tracking-[0.15em] uppercase text-black/60">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
