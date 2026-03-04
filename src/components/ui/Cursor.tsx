'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const pos  = useRef({ x: 0, y: 0 })
  const lag  = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY } }
    let frame: number
    const animate = () => {
      lag.current.x += (pos.current.x - lag.current.x) * 0.12
      lag.current.y += (pos.current.y - lag.current.y) * 0.12
      if (dot.current) {
        dot.current.style.left = pos.current.x + 'px'
        dot.current.style.top  = pos.current.y + 'px'
      }
      if (ring.current) {
        ring.current.style.left = lag.current.x + 'px'
        ring.current.style.top  = lag.current.y + 'px'
      }
      frame = requestAnimationFrame(animate)
    }
    window.addEventListener('mousemove', onMove)
    frame = requestAnimationFrame(animate)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(frame) }
  }, [])

  return (
    <>
      <div ref={dot}  className="fixed pointer-events-none z-[9999] w-2.5 h-2.5 bg-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div ref={ring} className="fixed pointer-events-none z-[9998] w-9 h-9 border border-gold rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60" />
    </>
  )
}
