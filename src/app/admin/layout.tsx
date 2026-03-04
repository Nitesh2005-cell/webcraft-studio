'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem('wc_admin')
    const pass   = process.env.NEXT_PUBLIC_ADMIN_PASS || 'webcraft2025'
    if (stored === pass) { setAuthed(true); return }
    const input = prompt('Admin Password:')
    if (input === pass) { localStorage.setItem('wc_admin', input); setAuthed(true) }
    else router.push('/')
  }, [router])

  if (!authed) return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white/40 text-sm tracking-widest uppercase">
      Checking...
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0d0d0d] pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex gap-6 mb-10 border-b border-white/10 pb-6 flex-wrap">
          <Link href="/admin"       className="text-[#c9a84c] text-xs tracking-widest uppercase">Projects</Link>
          <Link href="/admin/blogs" className="text-white/40 hover:text-[#c9a84c] text-xs tracking-widest uppercase transition">Blogs</Link>
          <Link href="/"            className="text-white/40 hover:text-[#c9a84c] text-xs tracking-widest uppercase transition ml-auto">← Site Dekho</Link>
        </div>
        {children}
      </div>
    </div>
  )
}
