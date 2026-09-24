'use client'

import { m, useReducedMotion, useSpring } from 'framer-motion'
import type { PointerEvent } from 'react'
import { hasFinePointer, springConfig } from '@/lib/motion'

interface MagneticProps {
  children: React.ReactNode
  className?: string
  /** Fraction of the pointer offset the element follows. */
  strength?: number
}

/** Pulls its child toward the cursor on precise pointers. Inert on touch and with reduced motion. */
export default function Magnetic({ children, className = 'inline-flex', strength = 0.28 }: MagneticProps) {
  const reduceMotion = useReducedMotion()
  const x = useSpring(0, springConfig.magnetic)
  const y = useSpring(0, springConfig.magnetic)

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse' || !hasFinePointer()) return
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * strength)
    y.set((event.clientY - rect.top - rect.height / 2) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <m.div className={className} style={{ x, y }} onPointerMove={handleMove} onPointerLeave={reset}>
      {children}
    </m.div>
  )
}
