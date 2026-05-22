'use client'
import { useEffect, useRef } from 'react'

export default function StarsBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      star.style.left = Math.random() * 100 + '%'
      star.style.width = star.style.height = Math.random() * 3 + 1 + 'px'
      star.style.animationDuration = Math.random() * 10 + 5 + 's'
      star.style.animationDelay = Math.random() * 5 + 's'
      container.appendChild(star)
    }
  }, [])

  return <div ref={containerRef} className="stars" />
}