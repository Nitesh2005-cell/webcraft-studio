import { getBlogs } from '@/lib/db'
import Link from 'next/link'

export default function BlogPage() {
  const posts = getBlogs(true)
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-16 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-4">Knowledge</p>
        <h1 className="font-playfair font-black leading-none mb-16" style={{ fontSize:'clamp(44px,7vw,80px)' }}>
          Our <em className="italic text-[#c9a84c]">Blog</em>
        </h1>
        <div className="grid md:grid-cols-2 gap-0.5">
          {posts.length === 0 && <p className="text-white/30 col-span-2 text-sm">Abhi koi post nahi hai.</p>}
          {posts.map(p => (
            <Link key={p.id} href={`/blog/${p.slug}`}
              className="group bg-[#1a1a1a] p-10 border border-white/5 hover:border-[#c9a84c]/30 transition block">
              <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-3">{p.category}</p>
              <h2 className="font-playfair text-2xl font-bold mb-3 text-white group-hover:text-[#c9a84c] transition">{p.title}</h2>
              <p className="text-white/50 text-sm leading-7 mb-4">{p.excerpt}</p>
              <span className="text-[#c9a84c] text-xs">Paro →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
