import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-6 md:px-16 pb-25 pt-25 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 40%, #1a1200 0%, #0a0a0a 60%)' }} />
      <div className="absolute inset-0 grid-bg" />

      {/* Big letter */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 font-playfair font-black leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(200px, 28vw, 380px)', color: 'transparent', WebkitTextStroke: '1px rgba(201,168,76,0.12)' }}>
        W
      </div>

      <span className="relative z-10 inline-block border border-[#c9a84c] text-[#c9a84c] text-[0.7rem] tracking-[0.2em] uppercase px-4 py-1.5 mb-8 w-fit">
        Premium Web Agency
      </span>
      <h1 className="relative z-10 font-playfair font-black leading-[0.95]"
        style={{ fontSize: 'clamp(52px, 8vw, 110px)' }}>
        We Build<br /><em className="italic text-[#c9a84c]">Digital</em><br />Masterpieces
      </h1>
      <p className="relative z-10 mt-9 text-white/55 max-w-md leading-7 text-sm">
        We give your business a powerful online identity — stunning websites that convert visitors into clients.
      </p>
      <div className="relative z-10 mt-12 flex gap-5 items-center flex-wrap">
        <Link href="/#work" className="bg-[#c9a84c] text-black px-9 py-4 text-xs tracking-widest uppercase font-medium hover:bg-[#e8c96a] transition">
          View Our Work
        </Link>
        <Link href="/contact" className="text-[#e8dfc8] text-xs tracking-widest uppercase opacity-70 hover:opacity-100 transition flex items-center gap-2">
          Let&apos;s Talk <span>→</span>
        </Link>
      </div>
    </section>
  )
}
