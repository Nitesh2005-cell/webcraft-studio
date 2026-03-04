'use client'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/#work',     label: 'Work' },
  { href: '/#process',  label: 'Process' },
  { href: '/blog',      label: 'Blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-16 py-7 flex justify-between items-center"
      style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.92), transparent)' }}>
      <Link href="/" className="font-playfair text-xl font-bold text-[#f5f0e8]">
        Web<span className="text-[#c9a84c]">Craft</span>
      </Link>

      {/* Desktop */}
      <ul className="hidden md:flex gap-10 list-none">
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href} className="text-[#e8dfc8] text-xs tracking-[0.12em] uppercase opacity-80 hover:opacity-100 hover:text-[#c9a84c] transition">
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/contact" className="bg-[#c9a84c] text-black text-xs tracking-[0.12em] uppercase font-medium px-6 py-2.5 hover:bg-[#e8c96a] transition">
            Start Project
          </Link>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open
            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />}
        </svg>
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-t border-white/5 px-6 py-6 flex flex-col gap-5 md:hidden">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-white/70 text-sm tracking-widest uppercase">{l.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}
            className="bg-[#c9a84c] text-black text-center py-3 text-sm tracking-widest uppercase font-medium">
            Start Project
          </Link>
        </div>
      )}
    </nav>
  )
}
