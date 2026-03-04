'use client'
import { useEffect, useState } from 'react'
import type { BlogPost } from '@/lib/db'

const slugify = (s: string) => s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
const EMPTY: BlogPost = { id:'', slug:'', title:'', excerpt:'', content:'', category:'', published:false, createdAt:'' }

export default function AdminBlogs() {
  const [blogs, setBlogs]     = useState<BlogPost[]>([])
  const [form, setForm]       = useState<BlogPost>(EMPTY)
  const [editing, setEditing] = useState(false)

  const load = async () => { const r = await fetch('/api/admin/blogs'); setBlogs(await r.json()) }
  useEffect(() => { load() }, [])

  const save = async () => {
    const data = { ...form, id: form.id || crypto.randomUUID(), slug: form.slug || slugify(form.title), createdAt: form.createdAt || new Date().toISOString() }
    await fetch('/api/admin/blogs', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) })
    setForm(EMPTY); setEditing(false); load()
  }

  const del = async (id: string) => {
    if (!confirm('Delete karo?')) return
    await fetch('/api/admin/blogs', { method:'DELETE', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ id }) })
    load()
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-playfair text-3xl font-bold text-white">Blog Posts</h1>
        <button onClick={() => { setForm(EMPTY); setEditing(true) }}
          className="bg-[#c9a84c] text-black px-6 py-3 text-xs tracking-widest uppercase">+ New Post</button>
      </div>

      {editing && (
        <div className="bg-[#1a1a1a] p-8 mb-8 border border-white/10">
          <h2 className="text-white text-lg font-bold mb-6">{form.id ? 'Edit' : 'New'} Post</h2>
          <div className="space-y-4">
            {[
              ['title','Title'],['category','Category'],['excerpt','Short Excerpt'],
            ].map(([k,l]) => (
              <div key={k}>
                <label className="block text-[0.65rem] uppercase tracking-widest text-white/40 mb-2">{l}</label>
                <input value={(form as any)[k]} onChange={e => setForm(p => ({ ...p, [k]: e.target.value }))}
                  className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a84c] transition" />
              </div>
            ))}
            <div>
              <label className="block text-[0.65rem] uppercase tracking-widest text-white/40 mb-2">Content (HTML ya plain text)</label>
              <textarea rows={8} value={form.content} onChange={e => setForm(p => ({ ...p, content: e.target.value }))}
                className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a84c] transition resize-none" />
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="pub" checked={form.published} onChange={e => setForm(p => ({ ...p, published: e.target.checked }))} className="w-4 h-4 accent-[#c9a84c]" />
              <label htmlFor="pub" className="text-white/60 text-sm">Published (site pe dikhega)</label>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={save} className="bg-[#c9a84c] text-black px-8 py-3 text-xs uppercase tracking-widest">Save</button>
            <button onClick={() => setEditing(false)} className="border border-white/20 text-white/50 px-8 py-3 text-xs uppercase tracking-widest hover:text-white transition">Cancel</button>
          </div>
        </div>
      )}

      <div className="space-y-0.5">
        {blogs.length === 0 && <p className="text-white/30 text-sm py-8 text-center">Abhi koi post nahi. Upar se add karo.</p>}
        {blogs.map(b => (
          <div key={b.id} className="bg-[#1a1a1a] p-5 flex justify-between items-center gap-4 border border-white/5">
            <div>
              <h3 className="text-white text-sm font-medium">{b.title}</h3>
              <p className="text-[#c9a84c] text-xs uppercase tracking-widest mt-0.5">{b.category} · /{b.slug}</p>
            </div>
            <div className="flex gap-2 items-center flex-shrink-0">
              <span className={`text-[0.6rem] border px-2 py-0.5 uppercase tracking-widest ${b.published ? 'text-green-400 border-green-400/30' : 'text-white/30 border-white/10'}`}>
                {b.published ? 'Live' : 'Draft'}
              </span>
              <button onClick={() => { setForm(b); setEditing(true) }} className="text-white/50 hover:text-white text-xs border border-white/10 px-4 py-2 transition">Edit</button>
              <button onClick={() => del(b.id)} className="text-red-400/70 hover:text-red-400 text-xs border border-red-400/10 px-4 py-2 transition">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
