'use client'

import { m, useMotionValue } from 'framer-motion'
import type { PointerEvent } from 'react'

interface SpotlightProps {
  children: React.ReactNode
  className?: string
}

/** Card wrapper with a soft glow that tracks the pointer (transform only; hover devices only via CSS). */
export default function Spotlight({ children, className = '' }: SpotlightProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

  return (
    <div className={`spotlight relative overflow-hidden ${className}`} onPointerMove={handleMove}>
      <m.span aria-hidden="true" className="spotlight-glow" style={{ x, y }} />
      {children}
    </div>
  )
}
