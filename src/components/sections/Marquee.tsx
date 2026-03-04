import { MARQUEE_ITEMS } from '@/lib/data'

export default function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="bg-[#c9a84c] py-3.5 overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-black px-8">
            {item} ✦
          </span>
        ))}
      </div>
    </div>
  )
}
