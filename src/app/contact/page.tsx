'use client'
import { useState } from 'react'

const SERVICES = ['Business Website','E-Commerce Store','Landing Page','UI/UX Design','SEO','Other']
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [form, setForm]     = useState({ name:'', email:'', phone:'', service:'', message:'' })
  const [status, setStatus] = useState<Status>('idle')

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) })
    setStatus(res.ok ? 'success' : 'error')
  }

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-16 bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto">
        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-4">Get In Touch</p>
        <h1 className="font-playfair font-black leading-none mb-4" style={{ fontSize:'clamp(44px,7vw,80px)' }}>
          Let&apos;s <em className="italic text-[#c9a84c]">Talk</em>
        </h1>
        <p className="text-white/50 mb-12 text-sm">Free consultation — no commitment required.</p>

        {status === 'success' ? (
          <div className="border border-[#c9a84c] p-10 text-center">
            <p className="font-playfair text-[#c9a84c] text-2xl font-bold mb-3">Thank You! 🎉</p>
            <p className="text-white/60 text-sm">We will get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-5">
            {[
              { k:'name',  l:'Your Name *',    t:'text',  p:'John Smith' },
              { k:'email', l:'Email Address *', t:'email', p:'john@example.com' },
              { k:'phone', l:'Phone Number',    t:'tel',   p:'+1 234 567 8900' },
            ].map(f => (
              <div key={f.k}>
                <label className="block text-[0.65rem] tracking-widest uppercase text-white/40 mb-2">{f.l}</label>
                <input type={f.t} placeholder={f.p} required={f.l.includes('*')} value={(form as any)[f.k]} onChange={set(f.k)}
                  className="w-full bg-[#1a1a1a] border border-white/10 px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#c9a84c] transition text-sm" />
              </div>
            ))}
            <div>
              <label className="block text-[0.65rem] tracking-widest uppercase text-white/40 mb-2">Service Needed</label>
              <select value={form.service} onChange={set('service')}
                className="w-full bg-[#1a1a1a] border border-white/10 px-5 py-4 text-white focus:outline-none focus:border-[#c9a84c] transition text-sm">
                <option value="">Select a service...</option>
                {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[0.65rem] tracking-widest uppercase text-white/40 mb-2">Message *</label>
              <textarea rows={5} placeholder="Describe your project..." required value={form.message} onChange={set('message')}
                className="w-full bg-[#1a1a1a] border border-white/10 px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#c9a84c] transition resize-none text-sm" />
            </div>
            <button type="submit" disabled={status === 'loading'}
              className="w-full bg-[#c9a84c] text-black py-5 text-xs tracking-widest uppercase font-medium hover:bg-[#e8c96a] transition disabled:opacity-50">
              {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>
            {status === 'error' && <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>}
          </form>
        )}
      </div>
    </section>
  )
}
