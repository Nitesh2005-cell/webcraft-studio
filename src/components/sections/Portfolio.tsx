import type { Project } from '@/lib/db'
import Link from 'next/link'

const FALLBACK = [
  { id:'1', title:'Raza Spices Co.',    category:'E-Commerce · FMCG',    gradient:'from-amber-950 to-amber-800',   tags:[], featured:true,  description:'', createdAt:'' },
  { id:'2', title:'NovaTech Solutions', category:'Corporate · SaaS',     gradient:'from-blue-950 to-blue-800',    tags:[], featured:false, description:'', createdAt:'' },
  { id:'3', title:'Shan Photography',   category:'Portfolio · Creative', gradient:'from-zinc-900 to-zinc-700',    tags:[], featured:false, description:'', createdAt:'' },
  { id:'4', title:'GreenLeaf Organics', category:'E-Commerce · Health',  gradient:'from-yellow-950 to-yellow-800',tags:[], featured:false, description:'', createdAt:'' },
]

export default function Portfolio({ projects }: { projects: Project[] }) {
  const items = projects.length > 0 ? projects : FALLBACK
  return (
    <section id="work" className="px-6 md:px-16 py-28 bg-[#0d0d0d]">
      <div className="flex justify-between items-end mb-16 reveal flex-wrap gap-4">
        <div>
          <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-4">Our Work</p>
          <h2 className="font-playfair font-bold leading-tight" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>
            Recent<br />Projects
          </h2>
        </div>
        <Link href="/contact" className="text-white/60 text-xs tracking-widest uppercase hover:text-[#c9a84c] transition flex items-center gap-2">
          Sab Projects Dekho →
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-0.5">
        {items.slice(0, 4).map((p, i) => (
          <div key={p.id} className={`group relative overflow-hidden ${i === 0 ? 'md:row-span-2' : ''}`}>
            <div className={`bg-gradient-to-br ${p.gradient} flex items-end p-8 transition-transform duration-500 group-hover:scale-[1.03] ${i === 0 ? 'min-h-[620px]' : 'min-h-[300px]'}`}>
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-3/4 bg-white/5 border border-white/10 rounded overflow-hidden opacity-60">
                <div className="bg-white/5 px-2.5 py-1.5 flex gap-1.5">
                  {['bg-red-400','bg-yellow-400','bg-green-400'].map(c => <div key={c} className={`w-1.5 h-1.5 rounded-full ${c}`}/>)}
                </div>
                <div className="p-3 space-y-1.5">
                  <div className="h-8 rounded bg-[#c9a84c]/15 w-full" />
                  <div className="h-1 rounded bg-white/10 w-4/5" />
                  <div className="h-1 rounded bg-white/10 w-3/5" />
                </div>
              </div>
              <div className="relative z-10 w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', padding: '60px 0 0' }}>
                <h3 className="font-playfair text-xl font-bold mb-1">{p.title}</h3>
                <span className="text-[#c9a84c] text-xs uppercase tracking-widest">{p.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
