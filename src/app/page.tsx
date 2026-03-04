import Hero         from '@/components/sections/Hero'
import Marquee      from '@/components/sections/Marquee'
import Services     from '@/components/sections/Services'
import Portfolio    from '@/components/sections/Portfolio'
import Stats        from '@/components/sections/Stats'
import Team         from '@/components/sections/Team'
import Process      from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import CTA          from '@/components/sections/CTA'
import { getProjects } from '@/lib/db'

export default function HomePage() {
  const projects = getProjects()
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Portfolio projects={projects} />
      <Stats />
      <Team />
      <Process />
      <Testimonials />
      <CTA />
    </>
  )
}
