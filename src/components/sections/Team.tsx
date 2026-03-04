const TEAM = [
  {
    name: 'Zoro Sharma',
    role: 'Builds the product',
    image: '/team/zoro.jpg'
  },
  {
    name: 'Luffy Kandari',
    role: 'Engineers the backend',
    image: '/team/luffy.jpg'
  },
  {
    name: 'Sanji Kumar',
    role: 'Designs the experience',
    image: '/team/sanji.jpg'
  },
]

export default function Team() {
  return (
    <section className="bg-[#0a0a0a] py-28 px-6 md:px-16">
      <div className="mb-16">
        <span className="text-[#c9a84c] text-[0.7rem] tracking-[0.2em] uppercase">Our Team</span>
        <h2 className="font-playfair font-black text-[#f5f0e8] mt-3 leading-tight"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
          The People Behind<br />WebCraft
        </h2>
        <p className="mt-5 text-white/45 text-sm leading-7 max-w-md">
          A small team crafting modern websites with precision and care.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TEAM.map(member => (
          <div key={member.name} className="group">
            {/* Photo — rounded rectangle with pop-up on hover */}
            <div className="relative overflow-hidden rounded-2xl mb-6 bg-white/5 border border-white/8"
              style={{ aspectRatio: '3/4' }}>
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              ) : (
                /* Placeholder — drop your image in public/team/ and set the path above */
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-white/15 text-[0.65rem] tracking-widest uppercase">Photo</span>
                </div>
              )}

              {/* Gold border glow on hover */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-[#c9a84c]/40 transition-all duration-500 pointer-events-none" />
            </div>

            <h3 className="font-playfair font-bold text-[#f5f0e8] text-xl mb-1">{member.name}</h3>
            <p className="text-[#c9a84c] text-[0.7rem] tracking-[0.15em] uppercase">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
