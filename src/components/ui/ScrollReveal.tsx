'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    // Pehle saare reveal elements visible kar do
    const els = document.querySelectorAll('.reveal')
    els.forEach(el => el.classList.add('visible'))

    // Phir scroll pe bhi kaam kare
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.05 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}