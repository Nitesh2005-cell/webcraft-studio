'use client'
import { useEffect, useState } from 'react'
import type { Project } from '@/lib/db'

const EMPTY: Project = { id:'', title:'', category:'', description:'', tags:[], featured:false, gradient:'from-amber-950 to-amber-800', createdAt:'' }

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [form, setForm]         = useState<Project>(EMPTY)
  const [editing, setEditing]   = useState(false)

  const load = async () => { const r = await fetch('/api/admin/projects'); setProjects(await r.json()) }
  useEffect(() => { load() }, [])

  const save = async () => {
    const data = { ...form, id: form.id || crypto.randomUUID(), createdAt: form.createdAt || new Date().toISOString() }
    await fetch('/api/admin/projects', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) })
    setForm(EMPTY); setEditing(false); load()
  }

  const del = async (id: string) => {
    if (!confirm('Delete karo?')) return
    await fetch('/api/admin/projects', { method:'DELETE', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ id }) })
    load()
  }

  const field = (k: keyof Project, label: string, span = false) => (
    <div className={span ? 'col-span-2' : ''}>
      <label className="block text-[0.65rem] uppercase tracking-widest text-white/40 mb-2">{label}</label>
      <input value={String((form as any)[k])} onChange={e => setForm(p => ({ ...p, [k]: e.target.value }))}
        className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a84c] transition" />
    </div>
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-playfair text-3xl font-bold text-white">Projects</h1>
        <button onClick={() => { setForm(EMPTY); setEditing(true) }}
          className="bg-[#c9a84c] text-black px-6 py-3 text-xs tracking-widest uppercase">+ New Project</button>
      </div>

      {editing && (
        <div className="bg-[#1a1a1a] p-8 mb-8 border border-white/10">
          <h2 className="text-white text-lg font-bold mb-6">{form.id ? 'Edit' : 'New'} Project</h2>
          <div className="grid grid-cols-2 gap-4">
            {field('title', 'Title')}
            {field('category', 'Category')}
            {field('description', 'Description', true)}
            {field('gradient', 'Gradient (e.g. from-blue-950 to-blue-800)')}
            <div>
              <label className="block text-[0.65rem] uppercase tracking-widest text-white/40 mb-2">Tags (comma separated)</label>
              <input value={form.tags.join(', ')} onChange={e => setForm(p => ({ ...p, tags: e.target.value.split(',').map(t => t.trim()) }))}
                className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a84c] transition" />
            </div>
            <div className="flex items-center gap-3 pt-6">
              <input type="checkbox" id="feat" checked={form.featured} onChange={e => setForm(p => ({ ...p, featured: e.target.checked }))} className="w-4 h-4 accent-[#c9a84c]" />
              <label htmlFor="feat" className="text-white/60 text-sm">Featured Project</label>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={save} className="bg-[#c9a84c] text-black px-8 py-3 text-xs uppercase tracking-widest">Save</button>
            <button onClick={() => setEditing(false)} className="border border-white/20 text-white/50 px-8 py-3 text-xs uppercase tracking-widest hover:text-white transition">Cancel</button>
          </div>
        </div>
      )}

      <div className="space-y-0.5">
        {projects.length === 0 && <p className="text-white/30 text-sm py-8 text-center">Abhi koi project nahi. Upar se add karo.</p>}
        {projects.map(p => (
          <div key={p.id} className="bg-[#1a1a1a] p-5 flex justify-between items-center gap-4 border border-white/5">
            <div>
              <h3 className="text-white text-sm font-medium">{p.title}</h3>
              <p className="text-[#c9a84c] text-xs uppercase tracking-widest mt-0.5">{p.category}</p>
            </div>
            <div className="flex gap-2 items-center flex-shrink-0">
              {p.featured && <span className="text-[#c9a84c] text-[0.6rem] border border-[#c9a84c]/30 px-2 py-0.5 uppercase tracking-widest">Featured</span>}
              <button onClick={() => { setForm(p); setEditing(true) }} className="text-white/50 hover:text-white text-xs border border-white/10 px-4 py-2 transition">Edit</button>
              <button onClick={() => del(p.id)} className="text-red-400/70 hover:text-red-400 text-xs border border-red-400/10 px-4 py-2 transition">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
