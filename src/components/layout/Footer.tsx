import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] px-6 md:px-16 py-14 flex flex-col md:flex-row justify-between items-center gap-6">
      <Link href="/" className="font-playfair text-xl font-bold text-[#f5f0e8]">
        Web<span className="text-[#c9a84c]">Craft</span>
      </Link>
      <div className="flex gap-6 flex-wrap justify-center">
        {[
          { label: 'Services', href: '/#services' },
          { label: 'Work',     href: '/#work' },
          { label: 'Process',  href: '/#process' },
          { label: 'Blog',     href: '/blog' },
          { label: 'Contact',  href: '/contact' },
        ].map(l => (
          <Link key={l.label} href={l.href}
            className="text-white/40 text-xs tracking-widest uppercase hover:text-[#c9a84c] transition">
            {l.label}
          </Link>
        ))}
      </div>
      <p className="text-white/30 text-xs">© {new Date().getFullYear()} WebCraft Studio</p>
    </footer>
  )
}
