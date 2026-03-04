import Link from 'next/link'

export default function CTA() {
  return (
    <section id="contact" className="px-6 md:px-16 py-36 bg-[#0a0a0a] text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />
      <h2 className="reveal font-playfair font-black leading-none mb-8 relative z-10"
        style={{ fontSize: 'clamp(44px,7vw,88px)' }}>
        Ready to Go<br /><em className="italic text-[#c9a84c]">Online?</em>
      </h2>
      <p className="reveal text-white/50 mb-12 relative z-10 text-sm">Free consultation — no commitment. Just a conversation.</p>
      <div className="reveal flex gap-4 justify-center flex-wrap relative z-10">
        <Link href="/contact" className="bg-[#c9a84c] text-black px-10 py-5 text-xs tracking-widest uppercase font-medium hover:bg-[#e8c96a] transition">
          Book a Free Consultation
        </Link>
        <a href="tel:+923001234567" className="text-white/60 text-xs tracking-widest uppercase flex items-center gap-2 hover:text-[#c9a84c] transition">
          Or Call Us →
        </a>
      </div>
    </section>
  )
}
